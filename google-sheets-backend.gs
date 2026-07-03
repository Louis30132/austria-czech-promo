const SHEET_NAME = "departures";
const SETTINGS_SHEET_NAME = "siteSettings";
const HEADERS = ["groupId", "airline", "code", "date", "offer", "price", "url", "enabled", "createdAt"];
const SETTINGS_HEADERS = ["key", "value"];
const DEFAULT_SETTINGS = {
  heroTitleMain: "這裡",
  heroTitleAccent: "只放專屬於你的歐洲行程",
  "groupPrice.king-lake-summer-10d": "",
  "groupPrice.truth-good-beauty-10d": "",
};
const GROUP_OPTIONS = {
  "king-lake-summer-10d": "king-lake-summer-10d",
  "春遊特選奧捷國王湖(夏)10日": "king-lake-summer-10d",
  "truth-good-beauty-10d": "truth-good-beauty-10d",
  "888特選奧捷真善美10日": "truth-good-beauty-10d",
};

function doGet(e) {
  const params = e.parameter || {};
  const action = params.action || "list";

  try {
    if (action === "list") {
      return respond(params.callback, {
        ok: true,
        departures: listDepartures(),
        settings: getSettings(),
      });
    }

    return respond(params.callback, { ok: false, message: "This endpoint is read-only." });
  } catch (error) {
    return respond(params.callback, { ok: false, message: error.message });
  }
}

function getSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  const firstRow = sheet.getRange(1, 1, 1, HEADERS.length).getValues()[0];
  const hasHeaders = HEADERS.every((header, index) => firstRow[index] === header);

  if (!hasHeaders) {
    sheet.clear();
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
  }

  return sheet;
}

function setupSheet() {
  getSheet();
  getSettingsSheet();
}

function getSettingsSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SETTINGS_SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SETTINGS_SHEET_NAME);
  }

  const firstRow = sheet.getRange(1, 1, 1, SETTINGS_HEADERS.length).getValues()[0];
  const hasHeaders = SETTINGS_HEADERS.every((header, index) => firstRow[index] === header);

  if (!hasHeaders) {
    sheet.clear();
    sheet.getRange(1, 1, 1, SETTINGS_HEADERS.length).setValues([SETTINGS_HEADERS]);
    Object.entries(DEFAULT_SETTINGS).forEach(([key, value]) => {
      sheet.appendRow([key, value]);
    });
  } else {
    ensureDefaultSettingsRows(sheet);
  }

  return sheet;
}

function ensureDefaultSettingsRows(sheet) {
  const rows = sheet.getDataRange().getValues().slice(1);
  const existingKeys = new Set(rows.map((row) => String(row[0] || "").trim()).filter(Boolean));

  Object.entries(DEFAULT_SETTINGS).forEach(([key, value]) => {
    if (!existingKeys.has(key)) {
      sheet.appendRow([key, value]);
    }
  });
}

function addDeparture(params) {
  const required = ["groupId", "airline", "code", "date", "price", "url"];
  required.forEach((field) => {
    if (!params[field]) {
      throw new Error(`Missing ${field}.`);
    }
  });

  const sheet = getSheet();
  const groupId = normalizeGroupId(params.groupId);

  sheet.appendRow([
    groupId,
    params.airline,
    params.code,
    params.date,
    params.offer || "限時優惠",
    params.price,
    params.url,
    "TRUE",
    new Date(),
  ]);
}

function listDepartures() {
  const sheet = getSheet();
  const values = sheet.getDataRange().getValues();
  const rows = values.slice(1);

  return rows
    .filter((row) => row[0] && String(row[7]).toUpperCase() !== "FALSE")
    .map((row) => ({
      groupId: normalizeGroupId(row[0]),
      airline: String(row[1] || ""),
      code: String(row[2] || ""),
      date: formatDateValue(row[3]),
      offer: String(row[4] || "限時優惠"),
      price: String(row[5] || ""),
      url: String(row[6] || ""),
    }));
}

function getSettings() {
  const sheet = getSettingsSheet();
  const rows = sheet.getDataRange().getValues().slice(1);
  const settings = { ...DEFAULT_SETTINGS };

  rows.forEach((row) => {
    const key = String(row[0] || "").trim();
    if (key) {
      settings[key] = String(row[1] || "");
    }
  });

  return settings;
}

function saveSettings(params) {
  const sheet = getSettingsSheet();
  const settings = {
    heroTitleMain: params.heroTitleMain || DEFAULT_SETTINGS.heroTitleMain,
    heroTitleAccent: params.heroTitleAccent || DEFAULT_SETTINGS.heroTitleAccent,
  };
  const groupPrices = parseGroupPrices(params.groupPricesJson);

  Object.entries(groupPrices).forEach(([groupId, value]) => {
    settings[`groupPrice.${normalizeGroupId(groupId)}`] = value;
  });

  sheet.clear();
  sheet.getRange(1, 1, 1, SETTINGS_HEADERS.length).setValues([SETTINGS_HEADERS]);
  Object.entries(settings).forEach(([key, value]) => {
    sheet.appendRow([key, value]);
  });
}

function parseGroupPrices(value) {
  if (!value) return {};

  try {
    const parsed = JSON.parse(value);
    if (!parsed || typeof parsed !== "object") return {};

    return Object.fromEntries(
      Object.entries(parsed)
        .map(([key, price]) => [String(key || "").trim(), String(price || "").trim()])
        .filter(([key]) => key)
    );
  } catch (error) {
    return {};
  }
}

function normalizeGroupId(value) {
  const text = String(value || "").trim();
  return GROUP_OPTIONS[text] || text;
}

function formatDateValue(value) {
  if (Object.prototype.toString.call(value) === "[object Date]" && !Number.isNaN(value.getTime())) {
    return Utilities.formatDate(value, "Asia/Taipei", "yyyy/MM/dd");
  }

  return String(value || "");
}

function respond(callback, payload) {
  const json = JSON.stringify(payload);
  const body = callback ? `${callback}(${json});` : json;

  return ContentService
    .createTextOutput(body)
    .setMimeType(callback ? ContentService.MimeType.JAVASCRIPT : ContentService.MimeType.JSON);
}
