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
