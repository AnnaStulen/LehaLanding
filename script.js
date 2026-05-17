const openButtons = document.querySelectorAll("[data-open-lightbox]");
const closeButton = document.querySelector("[data-close-lightbox]");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector("[data-lightbox-image]");
let lastLightboxTrigger = null;

function openLightbox(trigger) {
  if (!lightbox) return;
  lastLightboxTrigger = trigger;
  if (lightboxImage && trigger?.dataset.lightboxSrc) {
    lightboxImage.src = trigger.dataset.lightboxSrc;
    lightboxImage.alt = trigger.dataset.lightboxAlt || "";
  }
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
  closeButton?.focus();
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.hidden = true;
  document.body.style.overflow = "";
  lastLightboxTrigger?.focus();
}

openButtons.forEach((button) => {
  button.addEventListener("click", () => openLightbox(button));
});
closeButton?.addEventListener("click", closeLightbox);

lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox && !lightbox.hidden) {
    closeLightbox();
  }
});

const chartFrame = document.querySelector(".regime-chart-frame");
const zoneTriggers = document.querySelectorAll("[data-zone]");

zoneTriggers.forEach((trigger) => {
  const activateZone = () => {
    chartFrame?.setAttribute("data-zone-active", trigger.dataset.zone);
    trigger.classList.add("is-active");
  };

  const clearZone = () => {
    chartFrame?.removeAttribute("data-zone-active");
    trigger.classList.remove("is-active");
  };

  trigger.addEventListener("mouseenter", activateZone);
  trigger.addEventListener("mouseleave", clearZone);
});

const practiceLayout = document.querySelector(".practice-story-layout");
const practiceIndexItems = document.querySelectorAll(".practice-story-index span");
const practiceParticles = document.querySelectorAll(".practice-module-particle");
const practiceDots = document.querySelectorAll(".practice-chapter-dot");

function syncPracticeParticleRoutes() {
  if (!practiceLayout || !practiceParticles.length || !practiceDots.length) return;

  const layoutRect = practiceLayout.getBoundingClientRect();

  practiceParticles.forEach((particle, index) => {
    const indexItem = practiceIndexItems[index];
    const dot = practiceDots[index];
    if (!indexItem || !dot) return;

    const indexRect = indexItem.getBoundingClientRect();
    const dotRect = dot.getBoundingClientRect();
    const startX = indexRect.right - layoutRect.left - 46;
    const startY = indexRect.top - layoutRect.top + indexRect.height / 2 - 7;
    const dotCenterX = dotRect.left - layoutRect.left + dotRect.width / 2;
    const dotCenterY = dotRect.top - layoutRect.top + dotRect.height / 2 - 7;

    particle.style.setProperty("--sx", `${Math.round(startX)}px`);
    particle.style.setProperty("--sy", `${Math.round(startY)}px`);
    particle.style.setProperty("--mx", `${Math.round(dotCenterX - 1)}px`);
    particle.style.setProperty("--my", `${Math.round(dotCenterY)}px`);
    particle.style.setProperty("--ex", `${Math.round(dotCenterX + 5)}px`);
    particle.style.setProperty("--ey", `${Math.round(dotCenterY)}px`);
  });
}

syncPracticeParticleRoutes();
window.addEventListener("load", syncPracticeParticleRoutes);
window.addEventListener("resize", syncPracticeParticleRoutes);

const calendarRoot = document.querySelector("[data-course-calendar]");

if (calendarRoot) {
  const formatKey = [
    { type: "education", label: "Уроки" },
    { type: "action", label: "Планирование и задачи на неделю" },
    { type: "practice", label: "Отработка плана" },
    { type: "review", label: "Разбор результатов" },
    { type: "assessment", label: "Контрольные оценки" },
  ];

  const calendarMonths = [
    {
      label: "Июнь",
      title: "Июнь 2026",
      moduleIndex: "MODULE 01",
      moduleTitle: "BASE MODUL I",
      focus: "Define your marketing goal for the month, such as growing your email list by 10% or booking three new clients.",
      rhythm: "1 — New Year’s Day / 5-8 — New Year Sale",
      formatNote: "BASE MODUL I",
      year: 2026,
      month: 5,
      education: [
        { day: 1, topic: "EDUCATION SOFT", detail: "ПРОГРАММНЫЙ КОМПЛЕКС ИСПОЛНЕНИЯ АНАЛИТИКИ И КОНТРОЛЯ РИСКОВ" },
        { day: 2, topic: "EDUCATION RESEARCH", detail: "МОДЕЛИ СТРУКТУРНОЙ ОЦЕНКИ ИНСТРУМЕНТОВ" },
        { day: 3, topic: "EDUCATION EXECUTION", detail: "БАЗОВЫЕ МЕТОДЫ MM ИСПОЛНЕНИЯ" },
        { day: 4, topic: "EDUCATION RESEARCH", detail: "РАСПРЕДЕЛЕНИЕ ЛИКВИДНОСТИ В РАМКАХ ИСПОЛНЕНИЯ И БАЗОВЫЕ РЕЖИМЫ ПАМПОВ" },
        { day: 5, topic: "EDUCATION STRATEGIES", detail: "FEAR & SPIKE CAPTURE" },
        { day: 6, topic: "EDUCATION RISK MANAGEMENT", detail: "УСТРОЙСТВО ТОРГОВОГО БИЗНЕСА ПО ПРИНЦИПУ ОБМЕНЫ РИСКОМ" },
      ],
      weeks: [
        { monday: 8, satType: "review", practiceType: "support" },
        { monday: 15, satType: "review", practiceType: "practice" },
        { monday: 22, satType: "assessment", practiceType: "practice" },
      ],
    },
    {
      label: "Июль",
      title: "Июль 2026",
      moduleIndex: "MODULE 02",
      moduleTitle: "ADVANCE MODUL II",
      focus: "Define your marketing goal for the month, such as growing your email list by 10% or booking three new clients.",
      rhythm: "1 — New Year’s Day / 5-8 — New Year Sale",
      formatNote: "ADVANCE MODUL II",
      year: 2026,
      month: 6,
      education: [
        { day: 1, topic: "EDUCATION RISK MANAGEMENT", detail: "ПРОФИЛЬ РИСКА" },
        { day: 2, topic: "EDUCATION RESEARCH", detail: "РАСШИРЕННАЯ КЛАССИФИКАЦИЯ ПАМП-РЕЖИМОВ" },
        { day: 3, topic: "EDUCATION EXECUTION", detail: "РАСШИРЕНИЕ ИНВЕНТАРЯ АЛГОРИТМИЧЕСКИХ СИСТЕМ УПРАВЛЕНИЯ РИСКАМИ В ПОЗЦИИ" },
        { day: 4, topic: "EDUCATION RESEARCH", detail: "РАСШИРЕНИЕ ИНВЕНТАРЯ МИКРОСТРУКТУРНЫХ МОДЕЛЕЙ 1 ГРУППА" },
        { day: 5, topic: "EDUCATION RESEARCH", detail: "РАСШИРЕНИЕ ИНВЕНТАРЯ МИКРОСТРУКТУРНЫХ МОДЕЛЕЙ 2 ГРУППА" },
        { day: 6, topic: "EDUCATION RESEARCH", detail: "РАСШИРЕНИЕ ИНВЕНТАРЯ МИКРОСТРУКТУРНЫХ МОДЕЛЕЙ 2 ГРУППА" },
      ],
      weeks: [
        { monday: 6, satType: "review", practiceType: "practice" },
        { monday: 13, satType: "assessment", practiceType: "practice" },
        { monday: 20, satType: "review", practiceType: "team" },
        { monday: 27, satType: "assessment", practiceType: "team" },
      ],
    },
    {
      label: "Август",
      title: "Август 2026",
      moduleIndex: "MODULE 03",
      moduleTitle: "SYSTEM TRMODUL III",
      focus: "Define your marketing goal for the month, such as growing your email list by 10% or booking three new clients.",
      rhythm: "FORMAT KEY",
      formatNote: "SYSTEM TRMODUL III",
      year: 2026,
      month: 7,
      education: [
        { day: 3, topic: "EDUCATION RISK MANAGEMENT", detail: "УПРАВЛЕНИЕ ШИРОКИМ ПУЛОМ СТРАТЕГИЙ / МУЛЬТИАККАУНТИНГ" },
        { day: 4, topic: "EDUCATION RESEARCH", detail: "РАСШИРЕННАЯ КЛАССИФИКАЦИЯ ПАМП-РЕЖИМОВ" },
        { day: 5, topic: "EDUCATION EXECUTION", detail: "РАСШИРЕНИЕ ИНВЕНТАРЯ АЛГОРИТМИЧЕСКИХ СИСТЕМ УПРАВЛЕНИЯ ПОЗИЦИЯМИ" },
        { day: 6, topic: "EDUCATION RESEARCH", detail: "РАСШИРЕНИЕ ИНВЕНТАРЯ СТРАТЕГИЙ" },
        { day: 7, topic: "EDUCATION RESEARCH", detail: "РАСШИРЕНИЕ ИНВЕНТАРЯ МИКРОСТРУКТУРНЫХ МОДЕЛЕЙ" },
        { day: 8, topic: "EDUCATION RESEARCH", detail: "ГОРИЗОНТАЛЬНОЕ МАСШТАБИРОВАНИЕ ТОРГОВОЙ ИНЕФРАСТРУКТУРЫ" },
      ],
      weeks: [
        { monday: 10, satType: "review", practiceType: "practice" },
        { monday: 17, satType: "assessment", practiceType: "practice" },
        { monday: 24, satType: "review", practiceType: "team" },
        { monday: 31, satType: "assessment", practiceType: "team" },
      ],
    },
  ];

  const prevButton = calendarRoot.querySelector("[data-calendar-prev]");
  const nextButton = calendarRoot.querySelector("[data-calendar-next]");
  const titleNode = calendarRoot.querySelector("[data-calendar-title]");
  const controlTitleNode = calendarRoot.querySelector("[data-calendar-control-title]");
  const counterNode = calendarRoot.querySelector("[data-calendar-counter]");
  const daysNode = calendarRoot.querySelector("[data-calendar-days]");
  const moduleIndexNode = calendarRoot.querySelector("[data-calendar-module-index]");
  const moduleTitleNode = calendarRoot.querySelector("[data-calendar-module-title]");
  const moduleCopyNode = calendarRoot.querySelector("[data-calendar-module-copy]");
  const moduleFocusNode = calendarRoot.querySelector("[data-calendar-module-focus]");
  const moduleRhythmNode = calendarRoot.querySelector("[data-calendar-module-rhythm]");
  const moduleResultNode = calendarRoot.querySelector("[data-calendar-module-result]");
  const formatNoteNode = calendarRoot.querySelector("[data-calendar-format-note]");
  const formatKeyNode = calendarRoot.querySelector("[data-calendar-format-key]");
  let activeMonthIndex = 0;

  function getPlannedNode(month, dayNumber) {
    const educationNode = month.education.find((item) => item.day === dayNumber);
    if (educationNode) {
      return { type: "education", ...educationNode };
    }

    for (const week of month.weeks) {
      const offset = dayNumber - week.monday;
      if (offset < 0 || offset > 5) continue;

      if (offset === 0) {
        return { type: "action", topic: "WEEKLY ACTION PLAN", detail: "" };
      }

      if (offset >= 1 && offset <= 4) {
        if (week.practiceType === "team") {
          return { type: "practice", topic: "PRACTICE TEAM TRADING", detail: "" };
        }

        if (week.practiceType === "support") {
          return { type: "practice", topic: "PRACTICE SUPPORT", detail: "" };
        }

        return { type: "practice", topic: "PRACTICE", detail: "" };
      }

      if (offset === 5 && week.satType === "assessment") {
        return { type: "assessment", topic: "MONTHLY ASSESSMENT", detail: "" };
      }

      if (offset === 5) {
        return { type: "review", topic: "PRACTICE REVIEW SESSION", detail: "СЕССИЯ РАЗБОРА ПРАКТИКИ" };
      }
    }

    return null;
  }

  function createCalendarDay(dayNumber, month) {
    const plannedNode = getPlannedNode(month, dayNumber);
    const day = document.createElement("div");
    day.className = `calendar-day${plannedNode ? " is-planned" : ""}`;
    if (plannedNode) {
      day.classList.add(`is-${plannedNode.type}`);
    }
    day.setAttribute("role", "gridcell");
    day.setAttribute(
      "aria-label",
      `${dayNumber} ${month.title}${plannedNode ? `, ${plannedNode.topic}: ${plannedNode.detail}` : ""}`,
    );

    const number = document.createElement("span");
    number.className = "calendar-day-number";
    number.textContent = String(dayNumber).padStart(2, "0");
    day.append(number);

    if (plannedNode) {
      day.tabIndex = 0;
      const type = document.createElement("span");
      type.className = "calendar-day-type";
      type.textContent = plannedNode.topic;
      day.append(type);

      const label = document.createElement("span");
      label.className = "calendar-day-label";
      if (plannedNode.detail) {
        label.textContent = plannedNode.detail;
        day.append(label);
      }
    }

    return day;
  }

  function renderModulePanel(month) {
    if (moduleIndexNode) moduleIndexNode.textContent = month.moduleIndex;
    if (moduleTitleNode) moduleTitleNode.textContent = month.moduleTitle;
    if (moduleCopyNode) moduleCopyNode.textContent = month.moduleCopy || "";
    if (moduleFocusNode) moduleFocusNode.textContent = month.focus;
    if (moduleRhythmNode) moduleRhythmNode.textContent = month.rhythm;
    if (moduleResultNode) moduleResultNode.textContent = month.result || "";
    if (formatNoteNode) formatNoteNode.textContent = month.formatNote;

    if (!formatKeyNode) return;
    formatKeyNode.innerHTML = "";
    formatKey.forEach((item) => {
      const row = document.createElement("div");
      row.className = `calendar-format-item is-${item.type}`;

      const dot = document.createElement("span");
      dot.className = "calendar-format-dot";
      dot.setAttribute("aria-hidden", "true");

      const copy = document.createElement("p");
      const label = document.createElement("strong");
      label.textContent = item.label;
      copy.append(label);

      row.append(dot, copy);
      formatKeyNode.append(row);
    });
  }

  function renderCalendar(monthIndex) {
    const month = calendarMonths[monthIndex];
    const firstDay = new Date(month.year, month.month, 1);
    const daysInMonth = new Date(month.year, month.month + 1, 0).getDate();
    const startOffset = (firstDay.getDay() + 6) % 7;
    let plannedCount = 0;

    if (titleNode) titleNode.textContent = month.title;
    if (controlTitleNode) controlTitleNode.textContent = month.title;
    renderModulePanel(month);

    if (prevButton) prevButton.disabled = monthIndex === 0;
    if (nextButton) nextButton.disabled = monthIndex === calendarMonths.length - 1;

    if (!daysNode) return;
    daysNode.innerHTML = "";
    daysNode.setAttribute("role", "grid");
    daysNode.setAttribute("aria-label", `Календарь модуля: ${month.title}`);

    for (let index = 0; index < startOffset; index += 1) {
      const emptyDay = document.createElement("div");
      emptyDay.className = "calendar-day is-empty";
      emptyDay.setAttribute("aria-hidden", "true");
      daysNode.append(emptyDay);
    }

    for (let day = 1; day <= daysInMonth; day += 1) {
      if (getPlannedNode(month, day)) plannedCount += 1;
      daysNode.append(createCalendarDay(day, month));
    }

    if (counterNode) {
      counterNode.textContent = `${plannedCount} training nodes`;
    }
  }

  function setActiveMonth(monthIndex) {
    activeMonthIndex = Math.max(0, Math.min(calendarMonths.length - 1, monthIndex));
    renderCalendar(activeMonthIndex);
  }

  prevButton?.addEventListener("click", () => setActiveMonth(activeMonthIndex - 1));
  nextButton?.addEventListener("click", () => setActiveMonth(activeMonthIndex + 1));

  renderCalendar(activeMonthIndex);
}
