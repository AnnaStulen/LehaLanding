const openButton = document.querySelector("[data-open-lightbox]");
const closeButton = document.querySelector("[data-close-lightbox]");
const lightbox = document.querySelector(".lightbox");

function openLightbox() {
  if (!lightbox) return;
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
  closeButton?.focus();
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.hidden = true;
  document.body.style.overflow = "";
  openButton?.focus();
}

openButton?.addEventListener("click", openLightbox);
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
