/**
 * Google Apps Script for Finance Dashboard
 * Expected sheets:
 * - investor: date, value
 * - credit: date, value
 * - overseas: date, buy, sell
 * - news: title, meta, summary, url, status, updatedAt
 */
const SHEET_ID = '124HFW7ADWz8-UqaN9as1RTqS4A1_2jjba-CFZQ8U5NQ';

function doGet() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  const data = {
    investor: readSeries(ss, 'investor', ['date', 'value']),
    credit: readSeries(ss, 'credit', ['date', 'value']),
    overseas: readSeries(ss, 'overseas', ['date', 'buy', 'sell']),
    news: readNews(ss)
  };
  const out = ContentService.createTextOutput(JSON.stringify(data));
  return out.setMimeType(ContentService.MimeType.JSON);
}

function readSeries(ss, sheetName, columns) {
  const sheet = ss.getSheetByName(sheetName);
  if (!sheet) return [];
  const values = sheet.getDataRange().getValues();
  if (values.length < 2) return [];
  const header = values[0].map((h) => String(h).trim().toLowerCase());
  const idx = columns.map((c) => header.indexOf(c));
  return values.slice(1).filter((row) => row[idx[0]]).map((row) => {
    const item = {};
    columns.forEach((c, i) => {
      item[c] = row[idx[i]];
    });
    return item;
  });
}

function readNews(ss) {
  const sheet = ss.getSheetByName('news');
  if (!sheet) return null;
  const values = sheet.getDataRange().getValues();
  if (values.length < 2) return null;
  const header = values[0].map((h) => String(h).trim().toLowerCase());
  const row = values[1];
  const get = (key) => {
    const idx = header.indexOf(key);
    return idx >= 0 ? row[idx] : '';
  };
  return {
    title: get('title'),
    meta: get('meta'),
    summary: get('summary'),
    url: get('url'),
    status: get('status'),
    updatedAt: get('updatedat')
  };
}

const NEWS_QUERY = '요구불예금';
const NEWS_RSS = `https://news.google.com/rss/search?q=${encodeURIComponent(NEWS_QUERY)}&hl=ko&gl=KR&ceid=KR:ko`;

function updateNewsDaily() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  const sheet = getOrCreateSheet(ss, 'news', ['title', 'meta', 'summary', 'url', 'status', 'updatedAt']);
  const existing = readNews(ss) || {};
  const latest = fetchLatestNews();
  const now = new Date();

  if (latest && latest.isRecent) {
    writeNewsRow(sheet, {
      title: latest.title,
      meta: latest.meta,
      summary: latest.summary,
      url: latest.url,
      status: '최근 24시간 내 기사 있음',
      updatedAt: formatKst(now)
    });
  } else {
    writeNewsRow(sheet, {
      title: existing.title || '',
      meta: existing.meta || '',
      summary: existing.summary || '',
      url: existing.url || '',
      status: '최근 24시간 내 기사 없음',
      updatedAt: formatKst(now)
    });
  }
}

function fetchLatestNews() {
  try {
    const xml = UrlFetchApp.fetch(NEWS_RSS).getContentText();
    const doc = XmlService.parse(xml);
    const channel = doc.getRootElement().getChild('channel');
    const items = channel.getChildren('item');
    if (!items || items.length === 0) return null;
    const item = items[0];
    const title = item.getChildText('title') || '';
    const url = item.getChildText('link') || '';
    const pubDateText = item.getChildText('pubDate') || '';
    const source = item.getChild('source');
    const sourceText = source ? source.getText() : 'Google News';
    const summary = stripHtml(item.getChildText('description') || '');
    const pubDate = pubDateText ? new Date(pubDateText) : null;
    const isRecent = pubDate ? (Date.now() - pubDate.getTime()) <= 24 * 60 * 60 * 1000 : false;
    return {
      title,
      meta: `${sourceText} · ${pubDate ? formatDate(pubDate) : ''}`.trim(),
      summary,
      url,
      isRecent
    };
  } catch (err) {
    Logger.log(err);
    return null;
  }
}

function getOrCreateSheet(ss, name, headers) {
  let sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  }
  return sheet;
}

function writeNewsRow(sheet, data) {
  const row = [
    data.title || '',
    data.meta || '',
    data.summary || '',
    data.url || '',
    data.status || '',
    data.updatedAt || ''
  ];
  sheet.getRange(2, 1, 1, row.length).setValues([row]);
}

function stripHtml(text) {
  return text.replace(/<[^>]*>/g, '').trim();
}

function formatDate(date) {
  return Utilities.formatDate(date, 'Asia/Seoul', 'yyyy-MM-dd');
}

function formatKst(date) {
  return Utilities.formatDate(date, 'Asia/Seoul', 'yyyy-MM-dd HH:mm');
}
