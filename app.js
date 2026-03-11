const baseData = {
  investor: [{"date":"2026/03/10","value":"125,584,440"},{"date":"2026/03/09","value":"127,421,841"},{"date":"2026/03/06","value":"129,957,423"},{"date":"2026/03/05","value":"130,887,316"},{"date":"2026/03/04","value":"132,068,238"},{"date":"2026/03/03","value":"129,818,794"},{"date":"2026/02/27","value":"118,748,760"},{"date":"2026/02/26","value":"119,483,202"},{"date":"2026/02/25","value":"109,467,654"},{"date":"2026/02/24","value":"107,903,182"},{"date":"2026/02/23","value":"108,290,073"},{"date":"2026/02/20","value":"104,129,136"},{"date":"2026/02/19","value":"106,570,048"},{"date":"2026/02/13","value":"99,273,599"},{"date":"2026/02/12","value":"103,018,385"},{"date":"2026/02/11","value":"98,163,375"},{"date":"2026/02/10","value":"95,299,599"},{"date":"2026/02/09","value":"98,590,517"},{"date":"2026/02/06","value":"109,009,927"},{"date":"2026/02/05","value":"104,866,667"},{"date":"2026/02/04","value":"100,817,155"},{"date":"2026/02/03","value":"105,584,468"},{"date":"2026/02/02","value":"111,296,538"},{"date":"2026/01/30","value":"106,032,452"},{"date":"2026/01/29","value":"103,707,195"},{"date":"2026/01/28","value":"103,362,323"},{"date":"2026/01/27","value":"100,282,602"},{"date":"2026/01/26","value":"97,540,543"},{"date":"2026/01/23","value":"93,809,507"},{"date":"2026/01/22","value":"95,727,595"},{"date":"2026/01/21","value":"96,331,743"},{"date":"2026/01/20","value":"95,525,974"},{"date":"2026/01/19","value":"93,862,316"},{"date":"2026/01/16","value":"91,218,177"},{"date":"2026/01/15","value":"92,603,047"},{"date":"2026/01/14","value":"89,309,938"},{"date":"2026/01/13","value":"88,048,929"},{"date":"2026/01/12","value":"88,988,049"},{"date":"2026/01/09","value":"88,872,017"},{"date":"2026/01/08","value":"92,853,739"},{"date":"2026/01/07","value":"89,765,035"},{"date":"2026/01/06","value":"88,633,858"},{"date":"2026/01/05","value":"89,130,391"},{"date":"2026/01/02","value":"89,521,075"},{"date":"2025/12/31","value":"87,829,057"},{"date":"2025/12/30","value":"87,398,579"},{"date":"2025/12/29","value":"86,475,780"},{"date":"2025/12/26","value":"85,425,076"},{"date":"2025/12/24","value":"83,304,002"},{"date":"2025/12/23","value":"81,076,938"},{"date":"2025/12/22","value":"81,719,604"},{"date":"2025/12/19","value":"81,034,422"},{"date":"2025/12/18","value":"81,710,726"},{"date":"2025/12/17","value":"83,526,293"},{"date":"2025/12/16","value":"84,352,786"},{"date":"2025/12/15","value":"82,864,679"},{"date":"2025/12/12","value":"83,941,863"},{"date":"2025/12/11","value":"81,641,531"},{"date":"2025/12/10","value":"80,566,459"}]
,
  credit: [{"date":"2026/03/10","value":"31803317"},{"date":"2026/03/09","value":"31690508"},{"date":"2026/03/06","value":"32789896"},{"date":"2026/03/05","value":"33694521"},{"date":"2026/03/04","value":"33197791"},{"date":"2026/03/03","value":"32804073"},{"date":"2026/02/27","value":"32668983"},{"date":"2026/02/26","value":"32368488"},{"date":"2026/02/25","value":"32134040"},{"date":"2026/02/24","value":"31960208"},{"date":"2026/02/23","value":"31712325"},{"date":"2026/02/20","value":"31638448"},{"date":"2026/02/19","value":"31593229"},{"date":"2026/02/13","value":"31476674"},{"date":"2026/02/12","value":"31466410"},{"date":"2026/02/11","value":"31318010"},{"date":"2026/02/10","value":"31560720"},{"date":"2026/02/09","value":"31607698"},{"date":"2026/02/06","value":"31099495"},{"date":"2026/02/05","value":"30786792"},{"date":"2026/02/04","value":"30935180"},{"date":"2026/02/03","value":"30539766"},{"date":"2026/02/02","value":"30473064"},{"date":"2026/01/30","value":"30277851"},{"date":"2026/01/29","value":"30092487"},{"date":"2026/01/28","value":"29596166"},{"date":"2026/01/27","value":"29244996"},{"date":"2026/01/26","value":"29346682"},{"date":"2026/01/23","value":"29055410"},{"date":"2026/01/22","value":"28925745"},{"date":"2026/01/21","value":"29082114"},{"date":"2026/01/20","value":"29058554"},{"date":"2026/01/19","value":"28995014"},{"date":"2026/01/16","value":"28933786"},{"date":"2026/01/15","value":"28745580"},{"date":"2026/01/14","value":"28599293"},{"date":"2026/01/13","value":"28657441"},{"date":"2026/01/12","value":"28522408"},{"date":"2026/01/09","value":"28349745"},{"date":"2026/01/08","value":"28190294"},{"date":"2026/01/07","value":"27870759"},{"date":"2026/01/06","value":"27796261"},{"date":"2026/01/05","value":"27622356"},{"date":"2026/01/02","value":"27420700"},{"date":"2025/12/31","value":"27286469"},{"date":"2025/12/30","value":"27299548"},{"date":"2025/12/29","value":"27294510"},{"date":"2025/12/26","value":"27247572"},{"date":"2025/12/24","value":"27270110"},{"date":"2025/12/23","value":"27265131"},{"date":"2025/12/22","value":"27243930"},{"date":"2025/12/19","value":"27266021"},{"date":"2025/12/18","value":"27344532"},{"date":"2025/12/17","value":"27528779"},{"date":"2025/12/16","value":"27337687"},{"date":"2025/12/15","value":"27418784"},{"date":"2025/12/12","value":"27379592"},{"date":"2025/12/11","value":"27391215"},{"date":"2025/12/10","value":"27406497"}]
,
  overseas: [{"date":"2025/11/03","sell":"1362.35","buy":"2170.92"},{"date":"2025/11/04","sell":"1065.0999999999999","buy":"1453.95"},{"date":"2025/11/05","sell":"1396.61","buy":"1683.53"},{"date":"2025/11/06","sell":"1772.05","buy":"1739.56"},{"date":"2025/11/07","sell":"1442.37","buy":"1638.24"},{"date":"2025/11/10","sell":"1245.6600000000001","buy":"1727.07"},{"date":"2025/11/11","sell":"1492.74","buy":"1655.5"},{"date":"2025/11/12","sell":"68.92","buy":"66.22"},{"date":"2025/11/13","sell":"2060.44","buy":"2752.21"},{"date":"2025/11/14","sell":"993.76","buy":"1642.61"},{"date":"2025/11/17","sell":"1514.64","buy":"1665.72"},{"date":"2025/11/18","sell":"1606.26","buy":"1608.81"},{"date":"2025/11/19","sell":"1058.58","buy":"1660.59"},{"date":"2025/11/20","sell":"1259.1600000000001","buy":"1187.8"},{"date":"2025/11/21","sell":"1099.53","buy":"1228.3"},{"date":"2025/11/24","sell":"1343.23","buy":"1736.66"},{"date":"2025/11/25","sell":"1392.86","buy":"1460.74"},{"date":"2025/11/26","sell":"1196.83","buy":"1606.82"},{"date":"2025/11/27","sell":"1162.5899999999999","buy":"1551.35"},{"date":"2025/11/28","sell":"219.42","buy":"41"},{"date":"2025/12/01","sell":"1084.19","buy":"1373.08"},{"date":"2025/12/02","sell":"883.24","buy":"1092.6300000000001"},{"date":"2025/12/03","sell":"973.61","buy":"1244.6600000000001"},{"date":"2025/12/04","sell":"1095.8599999999999","buy":"1118.29"},{"date":"2025/12/05","sell":"1008.08","buy":"1187.67"},{"date":"2025/12/08","sell":"1071.79","buy":"1110.9000000000001"},{"date":"2025/12/09","sell":"997.18","buy":"966.4"},{"date":"2025/12/10","sell":"1011.51","buy":"1115.98"},{"date":"2025/12/11","sell":"894.16","buy":"1031.5"},{"date":"2025/12/12","sell":"1153.3399999999999","buy":"1034.33"},{"date":"2025/12/15","sell":"1014.55","buy":"1223.8499999999999"},{"date":"2025/12/16","sell":"1209.58","buy":"1760.49"},{"date":"2025/12/17","sell":"1616.81","buy":"1281.8699999999999"},{"date":"2025/12/18","sell":"1333.16","buy":"1302.18"},{"date":"2025/12/19","sell":"1281.7","buy":"1919.99"},{"date":"2025/12/22","sell":"1245.8499999999999","buy":"1192.45"},{"date":"2025/12/23","sell":"1436.61","buy":"1293.8800000000001"},{"date":"2025/12/24","sell":"1335.37","buy":"1294.98"},{"date":"2025/12/25","sell":"1121.5999999999999","buy":"1028.24"},{"date":"2025/12/26","sell":"24.56","buy":"20.45"},{"date":"2025/12/29","sell":"777.72","buy":"812.45"},{"date":"2025/12/30","sell":"1293.6600000000001","buy":"1155.8900000000001"},{"date":"2025/12/31","sell":"1390.37","buy":"1240.6300000000001"},{"date":"2026/01/01","sell":"447.87","buy":"952.22"},{"date":"2026/01/02","sell":"25.68","buy":"22.34"},{"date":"2026/01/05","sell":"425.83","buy":"881.78"},{"date":"2026/01/06","sell":"1641.2","buy":"1647.7"},{"date":"2026/01/07","sell":"1492.38","buy":"1804.65"},{"date":"2026/01/08","sell":"1225.22","buy":"1450.63"},{"date":"2026/01/09","sell":"858.49","buy":"1333.42"},{"date":"2026/01/12","sell":"844.43","buy":"1265.75"},{"date":"2026/01/13","sell":"1347.81","buy":"1148.81"},{"date":"2026/01/14","sell":"1167.0999999999999","buy":"1211.0999999999999"},{"date":"2026/01/15","sell":"983.92","buy":"1354.35"},{"date":"2026/01/16","sell":"939.08","buy":"1536.18"},{"date":"2026/01/19","sell":"1518.49","buy":"1380.01"},{"date":"2026/01/20","sell":"64.09","buy":"53.13"},{"date":"2026/01/21","sell":"1162.71","buy":"1302.26"},{"date":"2026/01/22","sell":"1661.3","buy":"1999.76"},{"date":"2026/01/23","sell":"1505.34","buy":"1771.37"},{"date":"2026/01/26","sell":"1042.99","buy":"1496.1"},{"date":"2026/01/27","sell":"1031.9000000000001","buy":"1396.13"},{"date":"2026/01/28","sell":"1322.18","buy":"1871.62"},{"date":"2026/01/29","sell":"1657","buy":"1363.85"},{"date":"2026/01/30","sell":"1638.39","buy":"1564.53"},{"date":"2026/02/02","sell":"1567.31","buy":"2470.3000000000002"},{"date":"2026/02/03","sell":"1513.89","buy":"2206.8200000000002"},{"date":"2026/02/04","sell":"1740.11","buy":"1606.97"},{"date":"2026/02/05","sell":"1183.1600000000001","buy":"2305.8200000000002"},{"date":"2026/02/06","sell":"1545.47","buy":"2153.2600000000002"},{"date":"2026/02/09","sell":"1895.09","buy":"1611.47"},{"date":"2026/02/10","sell":"1566.88","buy":"1617.35"},{"date":"2026/02/11","sell":"1374.47","buy":"1295.6400000000001"},{"date":"2026/02/12","sell":"781.57","buy":"1281.54"},{"date":"2026/02/13","sell":"1421.54","buy":"1189.8800000000001"},{"date":"2026/02/16","sell":"1065.73","buy":"1583.31"},{"date":"2026/02/17","sell":"49.84","buy":"38.85"},{"date":"2026/02/18","sell":"889.78","buy":"1030.6099999999999"},{"date":"2026/02/19","sell":"673.24","buy":"910"},{"date":"2026/02/20","sell":"927.96","buy":"740.69"},{"date":"2026/02/23","sell":"729.44","buy":"985.9"},{"date":"2026/02/24","sell":"1224.6400000000001","buy":"1001.03"},{"date":"2026/02/25","sell":"996.53","buy":"1433.24"},{"date":"2026/02/26","sell":"1453.87","buy":"1038.19"},{"date":"2026/02/27","sell":"1179.06","buy":"1129.45"},{"date":"2026/03/02","sell":"1151.72","buy":"1298.3599999999999"},{"date":"2026/03/03","sell":"884.3","buy":"1355.36"},{"date":"2026/03/04","sell":"1523.1","buy":"1647.54"},{"date":"2026/03/05","sell":"1901.28","buy":"1485.43"},{"date":"2026/03/06","sell":"1694.64","buy":"1155.8900000000001"},{"date":"2026/03/09","sell":"843.85","buy":"1384.27"},{"date":"2026/03/10","sell":"1098.57","buy":"1360.44"}]

};
const numberFmt = new Intl.NumberFormat('ko-KR');

function parseNumber(value) {
  if (value === null || value === undefined) return 0;
  const cleaned = String(value).replace(/,/g, '');
  const num = Number(cleaned);
  return Number.isNaN(num) ? 0 : num;
}

function toYmd(input) {
  if (!input) return '';
  if (input.includes('/')) return input;
  return input.replace(/-/g, '/');
}

function computeNet(buy, sell) {
  return Number((parseNumber(buy) - parseNumber(sell)).toFixed(2));
}

function parseDate(dateStr) {
  if (!dateStr) return new Date(0);
  const normalized = dateStr.replace(/\//g, '-');
  return new Date(`${normalized}T00:00:00`);
}

function sortByDateAsc(a, b) {
  return parseDate(a.date) - parseDate(b.date);
}

function loadSeries(key, fallback) {
  const raw = localStorage.getItem(key);
  if (!raw) return fallback;
  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return parsed;
  } catch (err) {
    console.warn('Failed to parse local series', err);
  }
  return fallback;
}

function saveSeries(key, series) {
  localStorage.setItem(key, JSON.stringify(series));
}

function upsertByDate(series, entry) {
  const idx = series.findIndex((item) => item.date === entry.date);
  if (idx >= 0) {
    series[idx] = entry;
  } else {
    series.push(entry);
  }
  return series.sort(sortByDateAsc);
}

function buildChart(ctx, label, series, valueKey = 'value', type = 'line') {
  if (!ctx || !window.Chart) return null;
  const labels = series.map((d) => d.date);
  const data = series.map((d) => parseNumber(d[valueKey]));
  const isLine = type === 'line';

  return new Chart(ctx, {
    type,
    data: {
      labels,
      datasets: [
        {
          label,
          data,
          borderColor: '#0a1020',
          backgroundColor: isLine ? 'rgba(10, 16, 32, 0.12)' : 'rgba(35, 179, 159, 0.7)',
          tension: isLine ? 0.3 : 0,
          fill: isLine,
          pointRadius: isLine ? 2 : 0,
          pointHoverRadius: isLine ? 5 : 2,
          borderWidth: isLine ? 2 : 0
        }
      ]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          ticks: {
            callback: (value) => numberFmt.format(value)
          }
        }
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: (context) => `${context.dataset.label}: ${numberFmt.format(context.parsed.y)}`
          }
        },
        legend: { display: false }
      }
    }
  });
}

const investorKey = 'series_investor';
const creditKey = 'series_credit';
const overseasKey = 'series_overseas';

let investorSeries = loadSeries(investorKey, baseData.investor).map((d) => ({
  date: toYmd(d.date),
  value: d.value
}));
let creditSeries = loadSeries(creditKey, baseData.credit).map((d) => ({
  date: toYmd(d.date),
  value: d.value
}));
let overseasSeries = loadSeries(overseasKey, baseData.overseas).map((d) => ({
  date: toYmd(d.date),
  buy: d.buy,
  sell: d.sell,
  net: computeNet(d.buy, d.sell)
}));

investorSeries.sort(sortByDateAsc);
creditSeries.sort(sortByDateAsc);
overseasSeries.sort(sortByDateAsc);

const investChart = buildChart(document.getElementById('investChart'), '투자자예탁금', investorSeries);
const creditChart = buildChart(document.getElementById('creditChart'), '신용거래융자 잔고', creditSeries);
const overseasChart = buildChart(document.getElementById('overseasChart'), '해외주식 순매수', overseasSeries, 'net', 'bar');

function refreshChart(chart, series, key = 'value') {
  if (!chart) return;
  chart.data.labels = series.map((d) => d.date);
  chart.data.datasets[0].data = series.map((d) => parseNumber(d[key]));
  chart.update();
}

function bindForm(seriesKey, chart, series, valueKey) {
  const form = document.querySelector(`form[data-series="${seriesKey}"]`);
  if (!form) return;
  form.addEventListener('submit', (event) => {
    if (!requireAuth()) return;
    event.preventDefault();
    const dateInput = form.querySelector('input[type="date"]');
    const date = toYmd(dateInput.value);
    if (!date) return;

    if (seriesKey === 'overseas') {
      const buy = form.querySelector('#overseasBuy').value;
      const sell = form.querySelector('#overseasSell').value;
      if (buy === '' || sell === '') return;
      const entry = {
        date,
        buy,
        sell,
        net: computeNet(buy, sell)
      };
      overseasSeries = upsertByDate(series, entry);
      saveSeries(overseasKey, overseasSeries);
      refreshChart(chart, overseasSeries, 'net');
      form.reset();
      return;
    }

    const valueInput = form.querySelector('input[type="number"]');
    const entry = { date, value: valueInput.value };
    const updated = upsertByDate(series, entry);
    if (seriesKey === 'investor') {
      investorSeries = updated;
      saveSeries(investorKey, investorSeries);
      refreshChart(chart, investorSeries, valueKey);
    } else if (seriesKey === 'credit') {
      creditSeries = updated;
      saveSeries(creditKey, creditSeries);
      refreshChart(chart, creditSeries, valueKey);
    }
    form.reset();
  });
}

bindForm('investor', investChart, investorSeries, 'value');
bindForm('credit', creditChart, creditSeries, 'value');
bindForm('overseas', overseasChart, overseasSeries, 'net');

function bindReset(seriesKey, base, storageKey, chart, keyField) {
  const button = document.querySelector(`button[data-reset="${seriesKey}"]`);
  if (!button) return;
  button.addEventListener('click', () => {
    if (!requireAuth()) return;
    localStorage.removeItem(storageKey);
    const fresh = base.map((d) => ({
      ...d,
      date: toYmd(d.date),
      net: d.buy ? computeNet(d.buy, d.sell) : d.net
    }));
    fresh.sort(sortByDateAsc);
    refreshChart(chart, fresh, keyField);
    if (seriesKey === 'investor') investorSeries = fresh;
    if (seriesKey === 'credit') creditSeries = fresh;
    if (seriesKey === 'overseas') overseasSeries = fresh;
  });
}

bindReset('investor', baseData.investor, investorKey, investChart, 'value');
bindReset('credit', baseData.credit, creditKey, creditChart, 'value');
bindReset('overseas', baseData.overseas, overseasKey, overseasChart, 'net');

const newsBtn = document.getElementById('newsUpdateBtn');
if (newsBtn) {
  newsBtn.addEventListener('click', () => {
    const query = encodeURIComponent('요구불예금');
    window.open(`https://search.naver.com/search.naver?where=news&query=${query}`, '_blank');
  });
}





const ADMIN_PASSWORD = 'smbcsmbc';
const adminStatus = document.getElementById('adminStatus');
const adminPass = document.getElementById('adminPass');
const adminUnlockBtn = document.getElementById('adminUnlockBtn');

function setAdminStatus(unlocked) {
  if (!adminStatus) return;
  adminStatus.textContent = unlocked ? '인증됨' : '잠김';
  adminStatus.classList.toggle('unlocked', unlocked);
}

function isAuthorized() {
  return sessionStorage.getItem('admin_unlocked') === 'true';
}

function authorizeWithPassword(value) {
  if (value && value === ADMIN_PASSWORD) {
    sessionStorage.setItem('admin_unlocked', 'true');
    setAdminStatus(true);
    if (adminPass) adminPass.value = '';
    return true;
  }
  return false;
}

function requireAuth() {
  if (isAuthorized()) return true;
  if (adminPass && authorizeWithPassword(adminPass.value.trim())) return true;
  const promptValue = window.prompt('관리자 비밀번호를 입력하세요');
  if (authorizeWithPassword(promptValue ? promptValue.trim() : '')) return true;
  alert('비밀번호가 일치하지 않습니다.');
  return false;
}

if (adminUnlockBtn) {
  adminUnlockBtn.addEventListener('click', () => {
    if (!authorizeWithPassword(adminPass ? adminPass.value.trim() : '')) {
      alert('비밀번호가 일치하지 않습니다.');
      setAdminStatus(false);
    }
  });
}

setAdminStatus(isAuthorized());



