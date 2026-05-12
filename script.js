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
