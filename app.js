const SITE_CONFIG = {
  gaMeasurementId: "",
};

const groups = [
  {
    id: "king-lake-summer-10d",
    title: "春遊特選奧捷國王湖(夏)10日",
    summary:
      "十天暢遊奧捷，賞絕美湖景與童話小鎮，感受維也納浪漫風華。",
    heroImage: "./assets/king-lake-summer-10d.png",
    mood: "即將滿團",
    moodClass: "mood-badge--urgent",
    features: [
      {
        title: "國王湖遊船",
        detail: "搭乘遊船漫遊高山湖泊，欣賞清澈絕美湖景。",
      },
      {
        title: "哈修塔特",
        detail: "探訪奧地利最美小鎮，飽覽如詩如畫的風光。",
      },
      {
        title: "童話庫倫洛夫",
        detail: "漫步捷克遺產小鎮，感受中世紀的浪漫風情。",
      },
      {
        title: "維也納雙宮",
        detail: "遊覽熊布朗宮與美景宮，見證昔日帝國輝煌。",
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
    title: "888特選奧捷真善美10日",
    summary:
      "十天暢遊奧捷，探訪哈修塔特與庫倫洛夫，體驗布拉格遊船美食。",
    heroImage: "./assets/truth-good-beauty-10d.png",
    mood: "熱門檔期",
    moodClass: "mood-badge--hot",
    features: [
      {
        title: "哈修塔特與鹽湖",
        detail: "探訪真善美拍攝地，飽覽絕美湖光山色。",
      },
      {
        title: "童話庫倫洛夫",
        detail: "走入世界遺產小鎮，感受中古世紀風情。",
      },
      {
        title: "薩爾茲堡纜車",
        detail: "搭乘城堡山纜車，居高臨下俯瞰城市美景。",
      },
      {
        title: "布拉格遊船百匯",
        detail: "乘船漫遊伏爾塔瓦河，悠閒享用特色美食。",
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

function setupAnalytics() {
  if (!SITE_CONFIG.gaMeasurementId) {
    return;
  }

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
  if (typeof window.gtag !== "function") {
    return;
  }
  window.gtag("event", name, params);
}

function getAirlineBrand(code) {
  if (code.includes("JX")) {
    return { theme: "theme-jx", name: "星宇航空" };
  }
  if (code.includes("BR")) {
    return { theme: "theme-br", name: "長榮航空" };
  }
  if (code.includes("CI")) {
    return { theme: "theme-ci", name: "中華航空" };
  }
  return { theme: "theme-other", name: "精選航班" };
}

function renderDeparture(groupId, option, index, selectedIndex) {
  const brand = getAirlineBrand(option.code);
  return `
    <div class="departure ${brand.theme} ${selectedIndex === index ? "is-selected" : ""}" data-group="${groupId}" data-index="${index}" tabindex="0" role="button" aria-label="${option.date} ${option.code}">
      <div class="departure__grid">
        <div class="departure__cell departure__cell--primary">
          <p class="departure__date">${option.date}</p>
          <p class="departure__code">團號 ${option.code}</p>
          <span class="airline-badge">${brand.name}</span>
        </div>
        <div class="departure__cell">
          <span class="offer-badge">限時優惠</span>
          <p class="offer-text">${option.offer}</p>
        </div>
        <div class="departure__cell">
          <div class="price-box">
            <p class="price-box__label">直售價</p>
            <p class="price-box__value">${option.price}</p>
          </div>
        </div>
        <div class="departure__cell departure__cell--cta">
          <a class="cta-link" href="${option.url}" target="_blank" rel="noreferrer" data-open-url="${option.url}" data-open-code="${option.code}">查看行程</a>
        </div>
      </div>
    </div>
  `;
}

function renderCard(group) {
  return `
    <article class="promo-card" data-card="${group.id}" tabindex="0">
      <div class="promo-card__media">
        <img class="promo-card__image" src="${group.heroImage}" alt="${group.title}">
        <div class="promo-card__shade"></div>
        <span class="mood-badge ${group.moodClass}">${group.mood}</span>
      </div>
      <div class="promo-card__body">
        <h2 class="promo-card__title">${group.title}</h2>
        <p class="promo-card__summary">${group.summary}</p>
        <div class="promo-card__expand">
          <div class="promo-card__expand-inner">
            <div class="feature-grid">
              ${group.features
                .map(
                  (feature) => `
                    <section class="feature">
                      <h3 class="feature__title">${feature.title}</h3>
                      <p class="feature__detail">${feature.detail}</p>
                    </section>
                  `,
                )
                .join("")}
            </div>
            <section class="departure-section">
              <p class="departure-section__title">出發日期與優惠</p>
              <div class="departure-list" data-list="${group.id}">
                ${group.departures
                  .map((option, index) => renderDeparture(group.id, option, index, 0))
                  .join("")}
              </div>
            </section>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderDepartures(groupId, selectedIndex) {
  const group = groups.find((item) => item.id === groupId);
  const list = document.querySelector(`[data-list="${groupId}"]`);
  list.innerHTML = group.departures
    .map((option, optionIndex) =>
      renderDeparture(groupId, option, optionIndex, selectedIndex),
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

function bindCardInteractions() {
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

function renderPage() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <section class="welcome" id="welcome">
      <img class="welcome__image" src="./assets/king-lake-summer-10d.png" alt="奧捷風景">
      <div class="welcome__veil"></div>
      <div class="welcome__content">
        <p class="eyebrow">Boarding Soon</p>
        <h1 class="welcome__title">
          情緒一定要有出口
          <span class="welcome__title-accent">所以我在登機口</span>
        </h1>
        <p class="welcome__copy">
          這裡
          <span class="welcome__copy-accent">只放奧捷最值得推的團型</span>
        </p>
        <button class="welcome__cta" id="enter-site">前往登機口</button>
      </div>
    </section>

    <main class="page hidden" id="main-page">
      <div class="shell">
        <header class="headline">
          <p class="headline__label">To：合作夥伴與VIP</p>
          <h1 class="headline__title">
            航班告急！
            <span class="headline__accent">最後保留席釋出</span>
          </h1>
        </header>
        <section class="cards">
          ${groups.map(renderCard).join("")}
        </section>
      </div>
    </main>
  `;

  const welcome = document.getElementById("welcome");
  const mainPage = document.getElementById("main-page");
  const enterButton = document.getElementById("enter-site");

  enterButton.addEventListener("click", () => {
    welcome.classList.add("hidden");
    mainPage.classList.remove("hidden");
    window.scrollTo(0, 0);
    trackEvent("enter_gate", {
      section: "welcome",
    });
  });

  bindCardInteractions();
  bindDepartureClicks();
}

setupAnalytics();
renderPage();
