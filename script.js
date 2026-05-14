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
  const calendarMonths = [
    {
      label: "Июнь",
      title: "Июнь 2026",
      year: 2026,
      month: 5,
    },
    {
      label: "Июль",
      title: "Июль 2026",
      year: 2026,
      month: 6,
    },
    {
      label: "Август",
      title: "Август 2026",
      year: 2026,
      month: 7,
    },
  ];

  const prevButton = calendarRoot.querySelector("[data-calendar-prev]");
  const nextButton = calendarRoot.querySelector("[data-calendar-next]");
  const titleNode = calendarRoot.querySelector("[data-calendar-title]");
  const controlTitleNode = calendarRoot.querySelector("[data-calendar-control-title]");
  const counterNode = calendarRoot.querySelector("[data-calendar-counter]");
  const daysNode = calendarRoot.querySelector("[data-calendar-days]");
  let activeMonthIndex = 0;

  function createCalendarDay(dayNumber, monthTitle) {
    const isPractice = dayNumber % 2 === 1;
    const day = document.createElement("div");
    day.className = `calendar-day${isPractice ? " is-practice" : ""}`;
    day.setAttribute("role", "gridcell");
    day.setAttribute("aria-label", `${dayNumber} ${monthTitle}${isPractice ? ", практика" : ""}`);

    const number = document.createElement("span");
    number.className = "calendar-day-number";
    number.textContent = String(dayNumber).padStart(2, "0");
    day.append(number);

    if (isPractice) {
      day.tabIndex = 0;
      const label = document.createElement("span");
      label.className = "calendar-day-label";
      label.textContent = "Практика";
      day.append(label);
    }

    return day;
  }

  function renderCalendar(monthIndex) {
    const month = calendarMonths[monthIndex];
    const firstDay = new Date(month.year, month.month, 1);
    const daysInMonth = new Date(month.year, month.month + 1, 0).getDate();
    const startOffset = (firstDay.getDay() + 6) % 7;
    const practiceCount = Math.ceil(daysInMonth / 2);

    if (titleNode) titleNode.textContent = month.title;
    if (controlTitleNode) controlTitleNode.textContent = month.title;
    if (counterNode) {
      counterNode.textContent = `${practiceCount} practice nodes`;
    }

    if (prevButton) prevButton.disabled = monthIndex === 0;
    if (nextButton) nextButton.disabled = monthIndex === calendarMonths.length - 1;

    if (!daysNode) return;
    daysNode.innerHTML = "";
    daysNode.setAttribute("role", "grid");
    daysNode.setAttribute("aria-label", `Календарь практики: ${month.title}`);

    for (let index = 0; index < startOffset; index += 1) {
      const emptyDay = document.createElement("div");
      emptyDay.className = "calendar-day is-empty";
      emptyDay.setAttribute("aria-hidden", "true");
      daysNode.append(emptyDay);
    }

    for (let day = 1; day <= daysInMonth; day += 1) {
      daysNode.append(createCalendarDay(day, month.title));
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
