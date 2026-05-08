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
