// Mobile menu toggle
const menuToggleBtn = document.querySelector("[data-mobile-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");

if (menuToggleBtn && mobileMenu) {
  menuToggleBtn.addEventListener("click", () => {
    const isHidden = mobileMenu.classList.contains("hidden");
    mobileMenu.classList.toggle("hidden", !isHidden);
  });
  mobileMenu.querySelectorAll("a[href^='#']").forEach(function (link) {
    link.addEventListener("click", function () {
      mobileMenu.classList.add("hidden");
    });
  });
}

// Modals: open/close, backdrop click, Escape, body scroll lock
(function () {
  const openButtons = document.querySelectorAll("[data-modal-open]");
  const closeButtons = document.querySelectorAll("[data-modal-close]");
  const modals = document.querySelectorAll("[data-modal]");

  function openModal(id) {
    const modal = document.getElementById("modal-" + id);
    if (!modal) return;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function closeAllModals() {
    modals.forEach(function (m) {
      closeModal(m);
    });
  }

  openButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const id = btn.getAttribute("data-modal-open");
      if (id) openModal(id);
      if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.add("hidden");
      }
    });
  });

  closeButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const modal = btn.closest("[data-modal]");
      closeModal(modal);
    });
  });

  modals.forEach(function (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === modal || e.target.classList.contains("modal-backdrop")) {
        closeModal(modal);
      }
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeAllModals();
  });
})();

// Client logos: click to open URL in new tab or show client name in modal
(function () {
  document.addEventListener("click", function (e) {
    const link = e.target.closest(".client-logo-item");
    if (!link) return;
    const url = link.getAttribute("data-client-url") || link.getAttribute("href");
    if (url && url !== "#" && (url.startsWith("http") || url.startsWith("//"))) {
      e.preventDefault();
      window.open(url, "_blank", "noopener,noreferrer");
      return;
    }
    const name = link.getAttribute("data-client-name");
    if (!name) return;
    e.preventDefault();
    const nameEl = document.getElementById("client-detail-name");
    const modal = document.getElementById("modal-client-detail");
    if (nameEl && modal) {
      nameEl.textContent = name;
      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }
  });
})();

// Simple reveal on scroll
const revealElements = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window && revealElements.length) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-6");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  revealElements.forEach(el => {
    el.classList.add("opacity-0", "translate-y-6", "transition-all", "duration-700");
    observer.observe(el);
  });
}

// Clients Swiper carousel: build slides from CLIENTS_LOGO_LIST and init (infinite loop, arrows, dots)
(function () {
  var list = window.CLIENTS_LOGO_LIST;
  var wrapper = document.getElementById("clients-swiper-wrapper");
  if (!list || !list.length || !wrapper) return;

  var base = "assets/images/clients/";
  list.forEach(function (item) {
    var src = base + encodeURIComponent(item.file);
    var name = (item.name || "شريك استراتيجي").replace(/"/g, "&quot;");
    var slide = document.createElement("div");
    slide.className = "swiper-slide";
    slide.innerHTML =
      '<a href="#" class="client-logo-item flex items-center justify-center rounded-brand-lg border border-neutral-200/80 bg-white p-3 sm:p-4 md:p-5 h-20 sm:h-24 md:h-28 w-full max-w-[180px] mx-auto transition-all duration-300 hover:shadow-card hover:scale-105 hover:border-primary/30" data-client-name="' +
      name +
      '" title="' +
      name +
      '"><img src="' + src + '" alt="' + name + '" class="max-h-full w-auto object-contain" loading="lazy" /></a>';
    wrapper.appendChild(slide);
  });

  if (typeof Swiper === "undefined") return;
  new Swiper(".clients-swiper", {
    loop: true,
    speed: 500,
    grabCursor: true,
    rtl: true,
    spaceBetween: 16,
    slidesPerView: 2,
    breakpoints: {
      480: { slidesPerView: 2, spaceBetween: 20 },
      640: { slidesPerView: 3, spaceBetween: 24 },
      768: { slidesPerView: 4, spaceBetween: 24 },
      1024: { slidesPerView: 5, spaceBetween: 28 },
      1280: { slidesPerView: 6, spaceBetween: 32 }
    },
    navigation: {
      nextEl: ".clients-swiper-next",
      prevEl: ".clients-swiper-prev"
    },
    pagination: {
      el: ".clients-swiper-pagination",
      clickable: true
    }
  });
})();
