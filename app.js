const SITE_CONFIG = {
  gaMeasurementId: "G-C68H7ZJR8W",
  googleSheetApiUrl:
    "https://script.google.com/macros/s/AKfycbyw7HHaNdTfSt_2Bj9M44urcJ9-pTf0n2hy_29xF8G085ZryPXwu4XIVPnfvxZbKBOK/exec",
};

let pageSettings = {
  heroTitleMain: "這裡",
  heroTitleAccent: "只放專屬於你的歐洲行程",
  groupPrices: {},
};

const destinations = [
  {
    id: "austria-czech",
    title: "奧捷",
    headline: "奧捷Austria & Czech",
    summary: "走進中歐童話世界，漫遊維也納、布拉格與湖區小鎮，古典音樂、宮殿風華與絕美湖景一次收藏。",
    heroImage: "./assets/king-lake-summer-10d.png",
    cardClass: "destination-card--austria",
    pageClass: "region-page--austria",
    kicker: "Austria & Czech",
    eyebrow: "熱門首選",
    status: "2 個主推團型",
  },
  {
    id: "spain-portugal",
    title: "西葡",
    headline: "西葡精選行程",
    summary: "從西班牙熱情城市到葡萄牙海岸風光，集合建築、美食、廣場與海景，適合喜歡明亮節奏的旅人。",
    heroImage:
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1200&q=80",
    cardClass: "destination-card--iberia",
    pageClass: "region-page--iberia",
    kicker: "Spain & Portugal",
    eyebrow: "熱賣氣氛",
    status: "等你放上檔期",
  },
  {
    id: "dolomites",
    title: "北義多洛米緹",
    headline: "北義山景主推",
    summary: "以北義山城、湖泊、纜車與多洛米緹群峰為主角，安排層次細緻的山景假期，畫面感安靜又高級。",
    heroImage:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    cardClass: "destination-card--dolomites",
    pageClass: "region-page--dolomites",
    kicker: "Dolomites",
    eyebrow: "景觀強打",
    status: "等你放上檔期",
  },
];

const STORAGE_KEY = "europe-promo-groups";

let groups = [
  {
    id: "king-lake-summer-10d",
    regionId: "austria-czech",
    title: "賞絕美湖景與童話小鎮，感受維也納浪漫風華",
    standardName: "春遊特選奧捷國王湖(夏)10日",
    summary: "標準團名:春遊特選奧捷國王湖(夏)10日",
    heroImage: "./assets/king-lake-summer-10d.png",
    mood: "即將滿團",
    moodClass: "mood-badge--urgent",
    features: [
      {
        title: "國王湖遊船｜把阿爾卑斯倒影收進眼底",
        detail:
          "搭乘遊船穿越清澈湖面，群山倒映與湖光山色交織，像走進一幅會呼吸的歐洲風景畫。",
      },
      {
        title: "哈修塔特｜停在世界遺產湖畔小鎮",
        detail:
          "依山傍湖的夢幻小鎮，木屋、教堂、湖面倒影構成最經典的奧地利明信片，每一步都值得按下快門。",
      },
      {
        title: "童話庫倫洛夫｜走進中世紀紅瓦小鎮",
        detail:
          "伏爾他瓦河環抱古城，紅瓦屋頂、石板小巷與城堡景觀交錯，彷彿時間停留在最浪漫的中世紀。",
      },
      {
        title: "維也納雙宮｜感受帝國首都的優雅底蘊",
        detail:
          "從熊布朗宮到美景宮，走入哈布斯堡王朝的華麗記憶，欣賞宮殿、藝術與古典城市的迷人風華。",
      },
    ],
    departures: [
      {
        code: "26EE726BRB",
        date: "2026/07/26",
        offer: "早鳥折 3,000，數量有限",
        price: "NT$104,900",
        url: "https://travel.liontravel.com/detail?NormGroupID=a4899f5b-a449-42c1-b32c-e7f1a3ca9cda&GroupID=26EE726BRB-T&Platform=APP",
      },
      {
        code: "26EE809CIB",
        date: "2026/08/09",
        offer: "早鳥折 3,000，數量有限",
        price: "NT$104,900",
        url: "https://travel.liontravel.com/detail?NormGroupID=a4899f5b-a449-42c1-b32c-e7f1a3ca9cda&GroupID=26EE809CIB-T&Platform=APP",
      },
      {
        code: "26EE817BR",
        date: "2026/08/17",
        offer: "早鳥折 3,000，數量有限",
        price: "NT$102,900",
        url: "https://travel.liontravel.com/detail?NormGroupID=a4899f5b-a449-42c1-b32c-e7f1a3ca9cda&GroupID=26EE817BR-T&Platform=APP",
      },
    ],
  },
  {
    id: "truth-good-beauty-10d",
    regionId: "austria-czech",
    title: "探訪哈修塔特與庫倫洛夫，體驗布拉格遊船美食",
    standardName: "888特選奧捷真善美10日",
    summary: "888特選奧捷真善美10日",
    heroImage: "./assets/truth-good-beauty-10d.png",
    mood: "熱門檔期",
    moodClass: "mood-badge--hot",
    features: [
      {
        title: "哈修塔特｜停在湖光山色的明信片裡",
        detail: "漫步奧地利湖區小鎮，湖面倒映木屋與山巒，每一眼都值得收藏。",
      },
      {
        title: "薩爾茲堡｜搭上纜車俯瞰音樂之城",
        detail:
          "搭乘薩爾茲堡堡壘纜車登高遠望，將古城屋瓦、教堂尖塔與阿爾卑斯山景一次收入眼底。",
      },
      {
        title: "布拉格城堡｜走進世界最大城堡群的千年時光",
        detail:
          "登上伏爾塔瓦河左岸高地，探訪布拉格城堡群，在宮殿、教堂與石板路之間感受捷克最經典的城市靈魂。",
      },
      {
        title: "伏爾塔瓦河遊船百匯｜用午宴看見布拉格浪漫",
        detail:
          "搭乘伏爾塔瓦河遊船，一邊享用午宴百匯，一邊欣賞老城區與城堡區河岸風光，是布拉格最悠閒也最難忘的片刻。",
      },
    ],
    departures: [
      {
        code: "26EE726BRC",
        date: "2026/07/26",
        offer: "早鳥折 3,000，數量有限",
        price: "NT$96,888",
        url: "https://travel.liontravel.com/detail?NormGroupID=0a15c7d1-49e4-423d-8b91-804979112053&GroupID=26EE726BRC-T&Platform=APP",
      },
      {
        code: "26EE804BR",
        date: "2026/08/04",
        offer: "早鳥折 3,000，數量有限",
        price: "NT$93,888",
        url: "https://travel.liontravel.com/detail?IsPreview=true&NormGroupID=0a15c7d1-49e4-423d-8b91-804979112053&GroupID=26EE804BR-T&Platform=APP",
      },
      {
        code: "26EE810JX",
        date: "2026/08/10",
        offer: "早鳥折 3,000，數量有限",
        price: "NT$91,888",
        url: "https://travel.liontravel.com/detail?NormGroupID=0a15c7d1-49e4-423d-8b91-804979112053&GroupID=26EE810JX-T&Platform=APP",
      },
    ],
  },
];

function loadStoredGroups() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return;
    const parsed = JSON.parse(stored);
    if (Array.isArray(parsed)) {
      groups = parsed;
    }
  } catch (error) {
    console.warn("Cannot load saved group data", error);
  }
}

function saveStoredGroups() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(groups));
}

function getDefaultDepartures() {
  return groups.flatMap((group) =>
    group.departures.map((departure) => ({
      groupId: group.id,
      airline: departure.airline || "",
      code: departure.code,
      date: departure.date,
      offer: departure.offer,
      price: departure.price,
      url: departure.url,
    })),
  );
}

function applyDepartures(departures) {
  if (!Array.isArray(departures) || departures.length === 0) return;

  groups = groups.map((group) => ({
    ...group,
    departures: departures
      .filter((departure) => departure.groupId === group.id)
      .map((departure) => ({
        airline: departure.airline || "",
        code: departure.code || "",
        date: departure.date || "",
        offer: departure.offer || "限時優惠",
        price: formatPrice(departure.price),
        url: departure.url || "",
      })),
  }));
}

function applyPageSettings(settings) {
  if (!settings || typeof settings !== "object") return;

  const groupPrices = { ...(pageSettings.groupPrices || {}) };
  Object.entries(settings).forEach(([key, value]) => {
    if (key.startsWith("groupPrice.")) {
      groupPrices[key.replace("groupPrice.", "")] = value;
    }
  });

  pageSettings = {
    ...pageSettings,
    ...settings,
    groupPrices: {
      ...groupPrices,
      ...(settings.groupPrices || {}),
    },
  };
}

function formatPrice(value) {
  const text = String(value || "").trim();
  if (!text) return "";
  if (text.includes("NT$")) return text;

  const numeric = text.replace(/[^\d]/g, "");
  if (!numeric) return text;

  return `NT$${Number(numeric).toLocaleString("en-US")}`;
}

function requestSheetApi(params) {
  return new Promise((resolve, reject) => {
    if (!SITE_CONFIG.googleSheetApiUrl) {
      reject(new Error("Google Sheets API URL is not configured."));
      return;
    }

    const callbackName = `sheetCallback_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    const url = new URL(SITE_CONFIG.googleSheetApiUrl);
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.set(key, value ?? "");
    });
    url.searchParams.set("callback", callbackName);

    const script = document.createElement("script");
    const timeout = window.setTimeout(() => {
      cleanup();
      reject(new Error("Google Sheets request timed out."));
    }, 12000);

    function cleanup() {
      window.clearTimeout(timeout);
      script.remove();
      delete window[callbackName];
    }

    window[callbackName] = (payload) => {
      cleanup();
      resolve(payload);
    };

    script.onerror = () => {
      cleanup();
      reject(new Error("Cannot connect to Google Sheets API."));
    };

    script.src = url.toString();
    document.head.appendChild(script);
  });
}

async function loadRemoteDepartures() {
  if (!SITE_CONFIG.googleSheetApiUrl) return false;

  try {
    const payload = await requestSheetApi({ action: "list" });
    if (payload?.ok && Array.isArray(payload.departures)) {
      applyDepartures(payload.departures);
      applyPageSettings(payload.settings);
      return true;
    }
  } catch (error) {
    console.warn("Cannot load Google Sheets data", error);
  }

  return false;
}

async function saveRemoteDeparture(departure) {
  const payload = await requestSheetApi({
    action: "add",
    groupId: departure.groupId,
    airline: departure.airline,
    code: departure.code,
    date: departure.date,
    offer: departure.offer,
    price: departure.price,
    url: departure.url,
  });

  if (!payload?.ok) {
    throw new Error(payload?.message || "Cannot save departure.");
  }
}

async function saveRemoteSettings(settings) {
  const payload = await requestSheetApi({
    action: "saveSettings",
    heroTitleMain: settings.heroTitleMain,
    heroTitleAccent: settings.heroTitleAccent,
    groupPricesJson: JSON.stringify(settings.groupPrices || {}),
  });

  if (!payload?.ok) {
    throw new Error(payload?.message || "Cannot save settings.");
  }
}

function resetStoredGroups() {
  localStorage.removeItem(STORAGE_KEY);
  window.location.reload();
}

function setupAnalytics() {
  if (!SITE_CONFIG.gaMeasurementId) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${SITE_CONFIG.gaMeasurementId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };

  window.gtag("js", new Date());
  window.gtag("config", SITE_CONFIG.gaMeasurementId);
}

function trackEvent(name, params = {}) {
  if (typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }
}

function getAirlineBrand(value = "") {
  if (value.includes("JX")) {
    return { theme: "theme-jx", name: "星宇航空" };
  }
  if (value.includes("BR")) {
    return { theme: "theme-br", name: "長榮航空" };
  }
  if (value.includes("CI")) {
    return { theme: "theme-ci", name: "中華航空" };
  }
  return { theme: "theme-other", name: "精選航班" };
}

function getLowestPrice(group) {
  const override = String(pageSettings.groupPrices?.[group.id] || "").trim();
  if (override) return override;

  const prices = group.departures
    .map((departure) => Number(String(departure.price || "").replace(/[^\d]/g, "")))
    .filter((price) => Number.isFinite(price) && price > 0);

  if (!prices.length) return "";

  return `NT$${Math.min(...prices).toLocaleString("en-US")}元起`;
}

function renderDeparture(groupId, groupTitle, option, index, selectedIndex) {
  const brand = getAirlineBrand(option.airline || option.code);
  return `
    <div class="departure ${brand.theme} ${selectedIndex === index ? "is-selected" : ""}" data-group="${groupId}" data-index="${index}" tabindex="0" role="button" aria-label="${groupTitle} ${option.date}">
      <div class="ticket-shell">
        <div class="ticket-main">
          <div class="ticket-badges">
            <span class="airline-badge">${brand.name}</span>
            <span class="offer-badge">限時優惠</span>
          </div>
          <div class="ticket-grid">
            <section class="ticket-panel ticket-panel--date">
              <p class="ticket-panel__label">出發日期</p>
              <p class="departure__date">${option.date}</p>
              <p class="departure__code">團號 ${option.code}</p>
            </section>
            <section class="ticket-panel ticket-panel--offer">
              <p class="ticket-panel__label">優惠內容</p>
              <p class="offer-text">${option.offer}</p>
            </section>
            <section class="ticket-panel ticket-panel--price">
              <p class="price-box__label">直售價</p>
              <p class="price-box__value">${option.price}</p>
            </section>
          </div>
        </div>
        <div class="ticket-stub">
          <span class="ticket-stub__hint">Boarding</span>
          <a class="cta-link" href="${option.url}" target="_blank" rel="noreferrer" data-open-url="${option.url}" data-open-code="${option.code}">查看行程</a>
        </div>
      </div>
    </div>
  `;
}

function renderGroupCard(group) {
  const lowestPrice = getLowestPrice(group);

  return `
    <article class="promo-card" data-card="${group.id}" tabindex="0">
      <div class="promo-card__media">
        <img class="promo-card__image" src="${group.heroImage}" alt="${group.title}">
        <div class="promo-card__shade"></div>
        <span class="mood-badge ${group.moodClass}">${group.mood}</span>
      </div>
      <div class="promo-card__body">
        <h2 class="promo-card__title">${group.title}</h2>
        <div class="promo-card__meta">
          <p class="promo-card__summary">${group.summary}</p>
          ${lowestPrice ? `<p class="promo-card__price">${lowestPrice}</p>` : ""}
        </div>
        <div class="promo-card__expand">
          <div class="promo-card__expand-inner">
            <div class="feature-block">
              <div class="feature-block__intro">
                <p class="feature-block__kicker">Trip Highlights</p>
                <h3 class="feature-block__title">這趟行程最值得停留的瞬間</h3>
              </div>
              <div class="feature-grid">
              ${group.features
                .map(
                  (feature, index) => `
                    <section class="feature" style="--feature-index: ${index}">
                      <span class="feature__number">${String(index + 1).padStart(2, "0")}</span>
                      <h3 class="feature__title">${feature.title}</h3>
                      <p class="feature__detail">${feature.detail}</p>
                    </section>
                  `,
                )
                .join("")}
              </div>
            </div>
            <section class="departure-section">
              <p class="departure-section__title">出發日期與優惠</p>
              <div class="departure-list" data-list="${group.id}">
                ${group.departures
                  .map((option, index) =>
                    renderDeparture(group.id, group.title, option, index, 0),
                  )
                  .join("")}
              </div>
            </section>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderDestinationCard(destination) {
  return `
    <button class="destination-card ${destination.cardClass}" data-destination="${destination.id}" type="button">
      <img src="${destination.heroImage}" alt="${destination.title}" class="destination-card__image">
      <span class="destination-card__shade"></span>
      <span class="destination-card__title">${destination.title}</span>
      <div class="destination-card__hovercopy">
        <p class="destination-card__summary">${destination.summary}</p>
      </div>
    </button>
  `;
}

function renderCategoryNav(activeId = "") {
  return `
    <nav class="region-nav" aria-label="地區分類">
      ${destinations
        .map(
          (destination) => `
            <button
              class="region-nav__item${destination.id === activeId ? " is-active" : ""}"
              data-destination="${destination.id}"
              type="button"
            >
              ${destination.title}
            </button>
          `,
        )
        .join("")}
    </nav>
  `;
}

function renderRegionPage(destination) {
  const regionGroups = groups.filter((group) => group.regionId === destination.id);

  if (regionGroups.length === 0) {
    return `
      ${renderCategoryNav(destination.id)}
      <section class="region-empty ${destination.pageClass}">
        <div class="region-empty__hero">
          <img src="${destination.heroImage}" alt="${destination.title}" class="region-empty__image">
          <div class="region-empty__shade"></div>
        </div>
        <div class="region-empty__content">
          <p class="region-empty__kicker">${destination.kicker}</p>
          <h2 class="region-empty__title">${destination.headline}</h2>
          <p class="region-empty__copy">這一區我先幫你把風格架好了，等你把 ${destination.title} 的主推行程與團號貼給我，我就能直接補成正式促銷頁。</p>
        </div>
      </section>
    `;
  }

  return `
    ${renderCategoryNav(destination.id)}
    <section class="region-shell ${destination.pageClass}">
      <header class="headline">
        <div class="headline__topline">
          <button type="button" class="back-link" id="back-to-categories">返回分類</button>
        </div>
        <h1 class="headline__title">${destination.headline}</h1>
        <p class="headline__intro">${destination.summary}</p>
      </header>
      <section class="cards">
        ${regionGroups.map(renderGroupCard).join("")}
      </section>
    </section>
  `;
}

function renderCategoryPage() {
  return `
    <section class="category-hero">
      <div class="category-hero__inner">
        <h1 class="category-hero__title">
          <span class="category-hero__title-main">${pageSettings.heroTitleMain}</span>
          <span class="category-hero__title-accent">${pageSettings.heroTitleAccent}</span>
        </h1>
      </div>
    </section>
    <section class="category-grid">
      ${destinations.map(renderDestinationCard).join("")}
    </section>
  `;
}

function bindDestinationButtons() {
  document.querySelectorAll("[data-destination]").forEach((button) => {
    button.addEventListener("click", () => {
      const destinationId = button.dataset.destination;
      const destination = destinations.find((item) => item.id === destinationId);
      mountRegion(destinationId);
      trackEvent("enter_destination", {
        destination_id: destination.id,
        destination_title: destination.title,
      });
      window.scrollTo(0, 0);
    });
  });
}

function renderDepartures(groupId, selectedIndex) {
  const group = groups.find((item) => item.id === groupId);
  const list = document.querySelector(`[data-list="${groupId}"]`);
  list.innerHTML = group.departures
    .map((option, optionIndex) =>
      renderDeparture(groupId, group.title, option, optionIndex, selectedIndex),
    )
    .join("");
  bindDepartureClicks();
}

function bindDepartureClicks() {
  document.querySelectorAll(".departure").forEach((button) => {
    button.addEventListener("click", () => {
      const groupId = button.dataset.group;
      const index = Number(button.dataset.index);
      const group = groups.find((item) => item.id === groupId);
      const selected = group.departures[index];
      renderDepartures(groupId, index);
      trackEvent("select_departure", {
        group_id: groupId,
        group_title: group.title,
        departure_code: selected.code,
        departure_date: selected.date,
      });
    });

    button.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        button.click();
      }
    });
  });

  document.querySelectorAll(".cta-link").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.stopPropagation();
      trackEvent("open_itinerary", {
        departure_code: link.dataset.openCode,
        itinerary_url: link.dataset.openUrl,
      });
    });
  });
}

function bindRegionCardInteractions() {
  const cards = [...document.querySelectorAll("[data-card]")];
  cards.forEach((card) => {
    const group = groups.find((item) => item.id === card.dataset.card);

    const activate = () => {
      cards.forEach((item) => item.classList.remove("is-active"));
      card.classList.add("is-active");
    };

    const deactivate = () => {
      card.classList.remove("is-active");
    };

    card.addEventListener("mouseenter", activate);
    card.addEventListener("mouseleave", deactivate);
    card.addEventListener("focus", activate);
    card.addEventListener("blur", deactivate);
    card.addEventListener("click", (event) => {
      if (event.target.closest(".departure") || event.target.closest(".cta-link")) {
        return;
      }
      const nextState = !card.classList.contains("is-active");
      cards.forEach((item) => item.classList.remove("is-active"));
      if (nextState) {
        card.classList.add("is-active");
        trackEvent("expand_group", {
          group_id: group.id,
          group_title: group.title,
        });
      }
    });
  });
}

function renderAdminPage() {
  const dataMode = SITE_CONFIG.googleSheetApiUrl ? "Google Sheets" : "本機測試資料";
  const groupOptions = groups
    .map((group) => {
      const destination = destinations.find((item) => item.id === group.regionId);
      return `<option value="${group.id}">${destination?.title || "未分類"}｜${group.standardName || group.summary}</option>`;
    })
    .join("");

  return `
    <main class="admin-shell">
      <header class="admin-header">
        <div>
          <p class="admin-kicker">Local Admin</p>
          <h1 class="admin-title">團體資料表單</h1>
          <p class="admin-copy">目前資料來源：${dataMode}。可依團型、航空公司模板新增不同出發日期。</p>
        </div>
        <button class="admin-secondary" type="button" id="back-to-site">回前台</button>
      </header>

      <section class="admin-panel">
        <div class="admin-panel__top">
          <h2>首頁標題設定</h2>
        </div>
        <form class="admin-form" id="settings-form">
          <label>
            <span>黑字標題</span>
            <input name="heroTitleMain" value="${pageSettings.heroTitleMain}" required>
          </label>

          <label>
            <span>紅字標題</span>
            <input name="heroTitleAccent" value="${pageSettings.heroTitleAccent}" required>
          </label>

          ${groups
            .map((group) => {
              const destination = destinations.find((item) => item.id === group.regionId);
              return `
                <label>
                  <span>${destination?.title || "未分類"}｜${group.standardName || group.summary} 起價文字</span>
                  <input name="groupPrice:${group.id}" value="${pageSettings.groupPrices?.[group.id] || ""}" placeholder="${getLowestPrice(group)}">
                </label>
              `;
            })
            .join("")}

          <button class="admin-submit" type="submit">儲存首頁與起價</button>
          <p class="admin-status" id="settings-status" role="status"></p>
        </form>
      </section>

      <section class="admin-panel">
        <form class="admin-form" id="departure-form">
          <label>
            <span>團型</span>
            <select name="groupId" required>
              ${groupOptions}
            </select>
          </label>

          <label>
            <span>航空公司模板</span>
            <select name="airline" required>
              <option value="BR">長榮航空</option>
              <option value="CI">中華航空</option>
              <option value="JX">星宇航空</option>
              <option value="OTHER">精選航班</option>
            </select>
          </label>

          <label>
            <span>團號</span>
            <input name="code" placeholder="例如 26EE809CIB" required>
          </label>

          <label>
            <span>出發日期</span>
            <input name="date" placeholder="例如 2026/08/09" required>
          </label>

          <label>
            <span>價格</span>
            <input name="price" placeholder="例如 NT$104,900" required>
          </label>

          <label>
            <span>優惠文字</span>
            <input name="offer" value="早鳥折 3,000，數量有限" required>
          </label>

          <label class="admin-form__full">
            <span>行程連結</span>
            <input name="url" placeholder="貼上 Lion Travel 行程網址" required>
          </label>

          <button class="admin-submit" type="submit">新增出發日期</button>
          <p class="admin-status" id="admin-status" role="status"></p>
        </form>
      </section>

      <section class="admin-panel">
        <div class="admin-panel__top">
          <h2>目前團體資料</h2>
          <button class="admin-secondary" type="button" id="reset-local-data">清除本機測試資料</button>
        </div>
        <div class="admin-list">
          ${groups
            .map(
              (group) => `
                <article class="admin-group">
                  <h3>${group.title}</h3>
                  <p>${group.departures.length} 個出發日期</p>
                  <ul>
                    ${group.departures
                      .map((departure) => {
                        const brand = getAirlineBrand(departure.airline || departure.code);
                        return `<li>${departure.date}｜${departure.code}｜${brand.name}｜${departure.price}</li>`;
                      })
                      .join("")}
                  </ul>
                </article>
              `,
            )
            .join("")}
        </div>
      </section>
    </main>
  `;
}

function bindAdminPage() {
  document.getElementById("back-to-site")?.addEventListener("click", () => {
    window.location.hash = "";
    mountCategories();
  });

  document.getElementById("reset-local-data")?.addEventListener("click", () => {
    resetStoredGroups();
  });

  document.getElementById("settings-form")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const status = document.getElementById("settings-status");
    const form = new FormData(event.currentTarget);
    const nextSettings = {
      heroTitleMain: form.get("heroTitleMain").trim(),
      heroTitleAccent: form.get("heroTitleAccent").trim(),
      groupPrices: Object.fromEntries(
        groups.map((group) => [
          group.id,
          String(form.get(`groupPrice:${group.id}`) || "").trim(),
        ]),
      ),
    };

    try {
      if (status) status.textContent = "儲存中...";

      if (SITE_CONFIG.googleSheetApiUrl) {
        await saveRemoteSettings(nextSettings);
        await loadRemoteDepartures();
      } else {
        applyPageSettings(nextSettings);
      }

      mountAdmin();
    } catch (error) {
      if (status) status.textContent = `儲存失敗：${error.message}`;
    }
  });

  document.getElementById("departure-form")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const status = document.getElementById("admin-status");
    const form = new FormData(event.currentTarget);
    const group = groups.find((item) => item.id === form.get("groupId"));
    if (!group) return;

    const departure = {
      groupId: group.id,
      airline: form.get("airline"),
      code: form.get("code").trim(),
      date: form.get("date").trim(),
      offer: form.get("offer").trim(),
      price: form.get("price").trim(),
      url: form.get("url").trim(),
    };

    try {
      if (status) status.textContent = "儲存中...";

      if (SITE_CONFIG.googleSheetApiUrl) {
        await saveRemoteDeparture(departure);
        await loadRemoteDepartures();
      } else {
        group.departures.push({
          airline: departure.airline,
          code: departure.code,
          date: departure.date,
          offer: departure.offer,
          price: departure.price,
          url: departure.url,
        });
        saveStoredGroups();
      }

      mountAdmin();
    } catch (error) {
      if (status) status.textContent = `儲存失敗：${error.message}`;
    }
  });
}

function mountAdmin() {
  const app = document.getElementById("app");
  app.className = "app-shell admin-app";
  app.innerHTML = renderAdminPage();
  bindAdminPage();
}

function mountRegion(destinationId) {
  const destination = destinations.find((item) => item.id === destinationId);
  const app = document.getElementById("app");
  app.className = `app-shell ${destination.pageClass}`;
  app.innerHTML = renderRegionPage(destination);

  const backButton = document.getElementById("back-to-categories");
  if (backButton) {
    backButton.addEventListener("click", () => {
      mountCategories();
      trackEvent("back_to_categories", { destination_id: destination.id });
    });
  }

  bindRegionCardInteractions();
  bindDepartureClicks();
  bindDestinationButtons();
}

function mountCategories() {
  const app = document.getElementById("app");
  app.className = "app-shell";
  app.innerHTML = renderCategoryPage();
  bindDestinationButtons();
}

function canOpenAdmin() {
  return ["localhost", "127.0.0.1", ""].includes(window.location.hostname);
}

function routeApp() {
  if (window.location.hash === "#admin" && canOpenAdmin()) {
    mountAdmin();
    return;
  }

  if (window.location.hash === "#admin") {
    window.location.hash = "";
  }

  mountCategories();
}

async function bootstrapApp() {
  loadStoredGroups();
  setupAnalytics();
  routeApp();
  window.addEventListener("hashchange", routeApp);

  const didLoadRemote = await loadRemoteDepartures();
  if (didLoadRemote) {
    routeApp();
  }
}

bootstrapApp();
