const presaleRequests = [
  {
    id: "aurora-cars",
    client: "Aurora Cars",
    title: "Тендер на launch-видео новой линейки",
    format: "Видео / digital campaign",
    status: "В работе",
    outcome: "Ждём решение",
    deadlineISO: "2026-06-28",
    deadline: "28 июня",
    calendarEvents: [
      { dateISO: "2026-06-26", type: "call", label: "Созвон по финальной рамке и бюджету" },
      { dateISO: "2026-06-27", type: "delivery", label: "Отправка презентации и сметы клиенту" },
      { dateISO: "2026-06-28", type: "tender", label: "Дедлайн тендерного предложения" }
    ],
    summary:
      "Клиент прислал бриф и референсы. Идёт сборка презентации, сметы и продакшн-подхода.",
    owner: "Лиза + продюсер",
    tenderStage: "Подготовка предложения",
    reason: "Решение клиента ожидается после второго раунда презентаций.",
    request:
      "Клиенту нужен запусковый ролик и серия адаптаций. Важно показать технологичность и премиальный визуальный язык.",
    productionTranslation:
      "Нужен mixed-media подход: live action + CG-пакет, быстрый расчёт по нескольким сценариям продакшна.",
    stages: [
      { name: "Разбор брифа", deadline: "24 июня", owner: "Лиза", state: "Завершено" },
      { name: "Смета и тайминг", deadline: "25 июня", owner: "Продюсер", state: "В работе" },
      { name: "Презентация и креатив", deadline: "27 июня", owner: "Креативный директор", state: "В работе" }
    ],
    assets: [
      { name: "Бриф клиента", type: "PDF", note: "Основа входящих вводных" },
      { name: "Коммерческое предложение", type: "Google Slides", note: "Финальная подача в сборке" },
      { name: "Черновая смета", type: "XLSX", note: "Три сценария бюджета" }
    ]
  },
  {
    id: "nova-beauty",
    client: "Nova Beauty",
    title: "Серия product-видео для новой линейки",
    format: "Product / social",
    status: "Ожидает отработки",
    outcome: "Не начато",
    deadlineISO: "2026-06-30",
    deadline: "30 июня",
    calendarEvents: [
      { dateISO: "2026-06-24", type: "call", label: "Уточняющий созвон по SKU и deliverables" },
      { dateISO: "2026-06-29", type: "delivery", label: "Отправка предварительного scope" },
      { dateISO: "2026-06-30", type: "tender", label: "Сдача черновика КП" }
    ],
    summary:
      "Нужно уточнить объём deliverables и получить финальные SKU, чтобы перевести бриф в понятный объём работ.",
    owner: "Продюсер + арт-директор",
    tenderStage: "Переработка брифа",
    reason: "Не хватает части исходных материалов от клиента.",
    request:
      "Нужен пакет из роликов и коротких нарезок под соцсети, с акцентом на texture shots и beauty language.",
    productionTranslation:
      "Надо разбить проект на модули: hero-ролик, SKU-адаптации, отдельный сет CG-вставок и постановочных кадров.",
    stages: [
      { name: "Сбор уточнений", deadline: "24 июня", owner: "Продюсер", state: "Ожидает клиента" },
      { name: "Предварительный scope", deadline: "26 июня", owner: "Арт-директор", state: "Ожидает отработки" },
      { name: "Черновик КП", deadline: "30 июня", owner: "Лиза", state: "Запланировано" }
    ],
    assets: [
      { name: "Папка материалов", type: "Drive", note: "Ждём финальную загрузку" },
      { name: "Референсы клиента", type: "Figma", note: "Собраны moodframes и pacing" }
    ]
  },
  {
    id: "orbit-bank",
    client: "Orbit Bank",
    title: "Рекламная кампания для HR-бренда",
    format: "Employer brand / campaign",
    status: "Завершено",
    outcome: "Победили",
    deadlineISO: "2026-06-18",
    deadline: "Завершено",
    calendarEvents: [
      { dateISO: "2026-06-16", type: "delivery", label: "Отправка финальной презентации" },
      { dateISO: "2026-06-17", type: "call", label: "Защитный созвон с клиентом" },
      { dateISO: "2026-06-18", type: "tender", label: "Финальное решение по тендеру" }
    ],
    summary:
      "Команда прошла тендерный этап. Клиент подтвердил запуск в полном объёме после защиты стратегии.",
    owner: "Лиза + режиссёр",
    tenderStage: "Исход тендера",
    reason: "Сработал сильный продакшн-подход и понятная защита этапов реализации.",
    request:
      "Клиент искал живую и убедительную кампанию про культуру команды и карьерные сценарии внутри компании.",
    productionTranslation:
      "Собрали стратегию на пересечении documentary tone, casting real employees и модульного продакшна.",
    stages: [
      { name: "Стратегия и treatment", deadline: "Завершено", owner: "Режиссёр", state: "Готово" },
      { name: "Смета и календарь", deadline: "Завершено", owner: "Продюсер", state: "Готово" },
      { name: "Защита предложения", deadline: "Завершено", owner: "Лиза", state: "Готово" }
    ],
    assets: [
      { name: "Финальная презентация", type: "PDF", note: "Защищённая версия" },
      { name: "Смета", type: "XLSX", note: "Утверждённый бюджет" },
      { name: "Продакшн-подход", type: "Doc", note: "Подписанный scope" }
    ]
  },
  {
    id: "velo-tech",
    client: "Velo Tech",
    title: "Эксплейнер для продукта B2B",
    format: "Explainer / tech",
    status: "Завершено",
    outcome: "Проиграли",
    deadlineISO: "2026-06-15",
    deadline: "Завершено",
    calendarEvents: [
      { dateISO: "2026-06-13", type: "delivery", label: "Отправка сметы и treatment" },
      { dateISO: "2026-06-14", type: "call", label: "Финальный созвон по предложению" },
      { dateISO: "2026-06-15", type: "tender", label: "Окончание тендерного этапа" }
    ],
    summary:
      "Коммерческое предложение завершено, но клиент выбрал подрядчика с более низким бюджетом и внутренним продакшн-ресурсом.",
    owner: "Продюсер",
    tenderStage: "Исход тендера",
    reason: "Проиграли по цене и по предпочтению клиента к более короткому production cycle.",
    request:
      "Нужно было объяснить сложный продукт для enterprise-аудитории через простую и убедительную визуальную схему.",
    productionTranslation:
      "Предлагали съёмочный день, 3D-инфографику и modular edit под разные sales-сценарии.",
    stages: [
      { name: "Бриф и расшифровка", deadline: "Завершено", owner: "Лиза", state: "Готово" },
      { name: "Смета", deadline: "Завершено", owner: "Продюсер", state: "Готово" },
      { name: "Финальный созвон", deadline: "Завершено", owner: "Лиза", state: "Готово" }
    ],
    assets: [
      { name: "Запись защиты", type: "Video", note: "Архив встречи" },
      { name: "Post-mortem", type: "Doc", note: "Причины проигрыша" }
    ]
  }
];

const elements = {
  requestList: document.querySelector("#requestList"),
  requestTemplate: document.querySelector("#requestItemTemplate"),
  searchInput: document.querySelector("#searchInput"),
  statusFilter: document.querySelector("#statusFilter"),
  outcomeFilter: document.querySelector("#outcomeFilter"),
  themeToggle: document.querySelector("#themeToggle"),
  themeToggleLabel: document.querySelector(".theme-toggle__label"),
  calendarMonthLabel: document.querySelector("#calendarMonthLabel"),
  calendarGrid: document.querySelector("#calendarGrid"),
  agendaDateLabel: document.querySelector("#agendaDateLabel"),
  agendaTenderList: document.querySelector("#agendaTenderList"),
  agendaDeliveryList: document.querySelector("#agendaDeliveryList"),
  agendaCallList: document.querySelector("#agendaCallList"),
  detailPanel: document.querySelector("#detailPanel"),
  detailEmpty: document.querySelector("#detailEmpty"),
  activeCount: document.querySelector('[data-stat="activeCount"]'),
  waitingCount: document.querySelector('[data-stat="waitingCount"]'),
  winRate: document.querySelector('[data-stat="winRate"]'),
  visibleCount: document.querySelector('[data-stat="visibleCount"]')
};

let selectedId = presaleRequests[0]?.id ?? null;
const themeStorageKey = "presaler-theme";
const calendarLocale = "ru-RU";
let selectedCalendarDateISO = null;

function uniqueValues(list, key) {
  return [...new Set(list.map((item) => item[key]))];
}

function populateFilters() {
  uniqueValues(presaleRequests, "status").forEach((status) => {
    elements.statusFilter.insertAdjacentHTML(
      "beforeend",
      `<option value="${status}">${status}</option>`
    );
  });

  uniqueValues(presaleRequests, "outcome").forEach((outcome) => {
    elements.outcomeFilter.insertAdjacentHTML(
      "beforeend",
      `<option value="${outcome}">${outcome}</option>`
    );
  });
}

function getFilteredRequests() {
  const search = elements.searchInput.value.trim().toLowerCase();
  const status = elements.statusFilter.value;
  const outcome = elements.outcomeFilter.value;

  return presaleRequests.filter((item) => {
    const matchesSearch =
      !search ||
      [item.client, item.title, item.format, item.summary].some((value) =>
        value.toLowerCase().includes(search)
      );
    const matchesStatus = status === "all" || item.status === status;
    const matchesOutcome = outcome === "all" || item.outcome === outcome;
    return matchesSearch && matchesStatus && matchesOutcome;
  });
}

function updateStats(filtered) {
  const activeCount = presaleRequests.filter((item) => item.status !== "Завершено").length;
  const waitingCount = presaleRequests.filter((item) => item.outcome === "Ждём решение").length;
  const completed = presaleRequests.filter((item) =>
    ["Победили", "Проиграли"].includes(item.outcome)
  );
  const wins = completed.filter((item) => item.outcome === "Победили").length;
  const winRate = completed.length ? Math.round((wins / completed.length) * 100) : 0;

  elements.activeCount.textContent = String(activeCount);
  elements.waitingCount.textContent = String(waitingCount);
  elements.winRate.textContent = `${winRate}%`;
  elements.visibleCount.textContent = `${filtered.length} записей`;
}

function formatCalendarMonth(date) {
  return new Intl.DateTimeFormat(calendarLocale, { month: "long", year: "numeric" }).format(date);
}

function formatAgendaMeta(item) {
  return `${item.client} · ${item.status}`;
}

function getCalendarEvents() {
  return presaleRequests.flatMap((item) =>
    (item.calendarEvents || []).map((event) => ({
      ...event,
      itemId: item.id,
      itemTitle: item.title,
      client: item.client,
      status: item.status,
      outcome: item.outcome,
      date: new Date(`${event.dateISO}T12:00:00`)
    }))
  );
}

function getDeadlineItems() {
  return getCalendarEvents()
    .filter((event) => event.type === "tender")
    .sort((a, b) => a.date - b.date);
}

function getEventsForDate(dateISO) {
  return getCalendarEvents().filter((event) => event.dateISO === dateISO);
}

function renderAgendaItems(target, events, emptyText, badgeLabel) {
  if (!events.length) {
    target.innerHTML = `<div class="agenda-empty">${emptyText}</div>`;
    return;
  }

  target.innerHTML = events
    .map(
      (event) => `
        <article class="agenda-item">
          <div class="agenda-item__body">
            <div class="agenda-item__title">${event.itemTitle}</div>
            <div class="agenda-item__meta">${event.label} · ${formatAgendaMeta(event)}</div>
          </div>
          <span class="badge badge--status agenda-item__type">${badgeLabel}</span>
        </article>
      `
    )
    .join("");
}

function renderAgenda(dateISO) {
  const events = getEventsForDate(dateISO);
  const selectedDate = new Date(`${dateISO}T12:00:00`);
  elements.agendaDateLabel.textContent = new Intl.DateTimeFormat(calendarLocale, {
    day: "numeric",
    month: "long"
  }).format(selectedDate);

  renderAgendaItems(
    elements.agendaTenderList,
    events.filter((event) => event.type === "tender"),
    "На эту дату нет финального тендерного дедлайна.",
    "тендер"
  );
  renderAgendaItems(
    elements.agendaDeliveryList,
    events.filter((event) => event.type === "delivery"),
    "На эту дату нет отправок материалов.",
    "материалы"
  );
  renderAgendaItems(
    elements.agendaCallList,
    events.filter((event) => event.type === "call"),
    "На эту дату нет созвонов по тендеру.",
    "созвон"
  );
}

function renderCalendarWidget() {
  const deadlines = getDeadlineItems();
  const calendarEvents = getCalendarEvents().sort((a, b) => a.date - b.date);
  const now = calendarEvents[0]?.date || new Date();
  const monthDate = new Date(now.getFullYear(), now.getMonth(), 1);
  const year = monthDate.getFullYear();
  const month = monthDate.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const offset = (firstDay.getDay() + 6) % 7;
  const totalDays = lastDay.getDate();
  const prevMonthLastDay = new Date(year, month, 0).getDate();
  const eventDaySet = new Set(
    calendarEvents
      .filter((event) => event.date.getMonth() === month && event.date.getFullYear() === year)
      .map((event) => event.date.getDate())
  );
  const today = new Date();
  if (!selectedCalendarDateISO) {
    selectedCalendarDateISO =
      deadlines.find((event) => event.date.getMonth() === month && event.date.getFullYear() === year)?.dateISO ||
      calendarEvents[0]?.dateISO ||
      `${year}-${String(month + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
  }

  elements.calendarMonthLabel.textContent = formatCalendarMonth(monthDate);
  elements.calendarGrid.innerHTML = "";

  ["пн", "вт", "ср", "чт", "пт", "сб", "вс"].forEach((day) => {
    elements.calendarGrid.insertAdjacentHTML(
      "beforeend",
      `<div class="calendar-weekday">${day}</div>`
    );
  });

  for (let index = 0; index < 42; index += 1) {
    const dayNumber = index - offset + 1;
    let displayNumber = dayNumber;
    let isMuted = false;

    if (dayNumber <= 0) {
      displayNumber = prevMonthLastDay + dayNumber;
      isMuted = true;
    } else if (dayNumber > totalDays) {
      displayNumber = dayNumber - totalDays;
      isMuted = true;
    }

    const isCurrentMonth = !isMuted;
    const isToday =
      isCurrentMonth &&
      today.getFullYear() === year &&
      today.getMonth() === month &&
      today.getDate() === displayNumber;
    const dateISO = `${year}-${String(month + 1).padStart(2, "0")}-${String(displayNumber).padStart(2, "0")}`;
    const hasEvent = isCurrentMonth && eventDaySet.has(displayNumber);
    const isSelected = isCurrentMonth && selectedCalendarDateISO === dateISO;

    elements.calendarGrid.insertAdjacentHTML(
      "beforeend",
      `<button class="calendar-day${isMuted ? " is-muted" : ""}${hasEvent ? " has-deadline" : ""}${isToday ? " is-today" : ""}${isSelected ? " is-selected" : ""}" type="button"${isCurrentMonth ? ` data-date="${dateISO}"` : " disabled"}>${displayNumber}</button>`
    );
  }

  elements.calendarGrid.querySelectorAll("[data-date]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedCalendarDateISO = button.dataset.date;
      renderCalendarWidget();
    });
  });

  renderAgenda(selectedCalendarDateISO);
}

function formatThemeLabel(theme) {
  return theme === "dark" ? "Dark" : "Light";
}

function applyTheme(theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  elements.themeToggleLabel.textContent = formatThemeLabel(theme);
}

function initTheme() {
  const stored = localStorage.getItem(themeStorageKey);
  const preferredDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = stored || (preferredDark ? "dark" : "light");
  applyTheme(theme);
}

function toggleTheme() {
  const nextTheme = document.documentElement.classList.contains("dark") ? "light" : "dark";
  localStorage.setItem(themeStorageKey, nextTheme);
  applyTheme(nextTheme);
}

function createRequestItem(item) {
  const fragment = elements.requestTemplate.content.cloneNode(true);
  const button = fragment.querySelector(".request-item");

  fragment.querySelector(".request-item__client").textContent = item.client;
  fragment.querySelector(".request-item__title").textContent = item.title;
  fragment.querySelector(".request-item__format").textContent = item.format;
  fragment.querySelector(".request-item__owner").textContent = item.owner;
  fragment.querySelector(".request-item__deadline").textContent = `Дедлайн: ${item.deadline}`;
  fragment.querySelector(".request-item__stage").textContent = item.tenderStage;
  fragment.querySelector(".request-item__summary").textContent = item.summary;
  fragment.querySelector(".badge--status").textContent = item.status;
  fragment.querySelector(".badge--outcome").textContent = item.outcome;

  button.dataset.id = item.id;
  button.classList.toggle("is-active", item.id === selectedId);
  button.addEventListener("click", () => {
    selectedId = item.id;
    render();
  });

  return fragment;
}

function renderList(filtered) {
  elements.requestList.innerHTML = "";

  if (!filtered.length) {
    elements.requestList.innerHTML =
      '<div class="empty-state">По этим фильтрам ничего не найдено. Попробуй убрать часть ограничений.</div>';
    return;
  }

  filtered.forEach((item) => {
    elements.requestList.appendChild(createRequestItem(item));
  });
}

function renderDetail(item) {
  if (!item) {
    elements.detailEmpty.classList.remove("is-hidden");
    elements.detailPanel.classList.add("is-hidden");
    elements.detailPanel.innerHTML = "";
    return;
  }

  elements.detailEmpty.classList.add("is-hidden");
  elements.detailPanel.classList.remove("is-hidden");

  const stageMarkup = item.stages
    .map(
      (stage) => `
        <li class="stage-item">
          <div>
            <strong>${stage.name}</strong>
            <span>${stage.owner}</span>
          </div>
          <div>
            <strong>${stage.state}</strong>
            <span>${stage.deadline}</span>
          </div>
        </li>
      `
    )
    .join("");

  const assetMarkup = item.assets
    .map(
      (asset) => `
        <li class="asset-item">
          <div>
            <strong>${asset.name}</strong>
            <span>${asset.note}</span>
          </div>
          <div>
            <span class="result-chip">${asset.type}</span>
          </div>
        </li>
      `
    )
    .join("");

  elements.detailPanel.innerHTML = `
    <div class="detail-header">
      <div class="detail-header__top">
        <div>
          <p class="section-kicker">${item.client}</p>
          <h3>${item.title}</h3>
        </div>
        <span class="badge badge--status">${item.status}</span>
      </div>
      <div class="detail-meta">
        <div class="detail-meta__item">
          <span class="detail-meta__label">Текущий этап</span>
          <strong>${item.tenderStage}</strong>
        </div>
        <div class="detail-meta__item">
          <span class="detail-meta__label">Ответственный контур</span>
          <strong>${item.owner}</strong>
        </div>
        <div class="detail-meta__item">
          <span class="detail-meta__label">Исход</span>
          <strong>${item.outcome}</strong>
        </div>
      </div>
    </div>

    <div class="detail-columns">
      <section class="detail-block">
        <span class="detail-block__label">Клиентский запрос</span>
        <p>${item.request}</p>
      </section>
      <section class="detail-block">
        <span class="detail-block__label">Перевод на язык продакшна</span>
        <p>${item.productionTranslation}</p>
      </section>
    </div>

    <section class="detail-block">
      <span class="detail-block__label">Этапы подготовки предложения</span>
      <ul class="stage-list">${stageMarkup}</ul>
    </section>

    <section class="detail-block">
      <span class="detail-block__label">Материалы и результаты</span>
      <ul class="asset-list">${assetMarkup}</ul>
    </section>

    <section class="detail-block">
      <span class="detail-block__label">Причина / комментарий по исходу</span>
      <p>${item.reason}</p>
    </section>
  `;
}

function ensureValidSelection(filtered) {
  if (!filtered.some((item) => item.id === selectedId)) {
    selectedId = filtered[0]?.id ?? null;
  }
}

function render() {
  const filtered = getFilteredRequests();
  ensureValidSelection(filtered);
  renderList(filtered);
  updateStats(filtered);
  renderDetail(filtered.find((item) => item.id === selectedId));
}

function bindEvents() {
  [elements.searchInput, elements.statusFilter, elements.outcomeFilter].forEach((control) => {
    control.addEventListener("input", render);
    control.addEventListener("change", render);
  });

  elements.themeToggle.addEventListener("click", toggleTheme);
}

populateFilters();
initTheme();
bindEvents();
renderCalendarWidget();
render();
