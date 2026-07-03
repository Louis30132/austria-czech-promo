# Google Sheets 後台設定

目前網站已支援用 Google Sheets 當團體資料後台。設定完成後，你可以在：

`http://localhost:4173/#admin`

新增同團型的不同出發日期。

## 1. 建立 Google Sheet

建立一個新的 Google 試算表，工作表名稱請改成：

`departures`

第一列欄位請放：

`groupId | airline | code | date | offer | price | url | enabled | createdAt`

`groupId` 欄位請用「標準團名」，也就是網站卡片上的副文。建議在 Google Sheet 裡把這欄做成下拉選單：

- `春遊特選奧捷國王湖(夏)10日`
- `888特選奧捷真善美10日`

系統會自動把標準團名轉成內部 id：

- `king-lake-summer-10d`：春遊特選奧捷國王湖(夏)10日
- `truth-good-beauty-10d`：888特選奧捷真善美10日

## 下拉選單設定方式

在 Google Sheet 中選取 `groupId` 欄位資料列，例如 `A2:A`，然後：

`資料` > `資料驗證` > `下拉式選單`

選項填：

1. `春遊特選奧捷國王湖(夏)10日`
2. `888特選奧捷真善美10日`

之後你就不用記 `king-lake-summer-10d` 這種英文 id，直接選中文團型即可。

可用的 `airline`：

- `BR`：長榮航空
- `CI`：中華航空
- `JX`：星宇航空
- `OTHER`：精選航班

## 2. 貼上 Apps Script

在 Google Sheet 裡點：

`擴充功能` > `Apps Script`

把 `google-sheets-backend.gs` 的內容貼進去，儲存。

## 3. 部署 Web App

在 Apps Script 裡點：

`部署` > `新增部署作業`

設定：

- 類型：`網頁應用程式`
- 執行身分：`我`
- 誰可以存取：`任何人`

部署後會得到一個 `/exec` 結尾的 Web App URL。

## 4. 接回網站

把 Web App URL 貼給 Codex，Codex 會幫你填進：

`app.js`

這一行：

```js
googleSheetApiUrl: "",
```

填好後，本機網站就會先讀 Google Sheets；後台表單也會寫入 Google Sheets。

## 5. 首頁標題設定

更新後的 Apps Script 會自動建立另一個工作表：

`siteSettings`

欄位是：

`key | value`

目前可設定：

- `heroTitleMain`：首頁黑字標題，例如 `這裡`
- `heroTitleAccent`：首頁紅字標題，例如 `只放專屬於你的歐洲行程`

也可以直接到網站後台修改：

`http://localhost:4173/#admin`

修改「首頁標題設定」後，資料會寫回 Google Sheets。
