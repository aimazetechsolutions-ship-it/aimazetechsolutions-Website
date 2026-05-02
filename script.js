function initAimazeInteractions() {
  const navToggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-nav]");
  const header = document.querySelector("[data-header]");
  const year = document.querySelector("[data-year]");
  const contactForm = document.querySelector("[data-contact-form]");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    });

    nav.addEventListener("click", (event) => {
      if (event.target.matches("a")) {
        nav.classList.remove("is-open");
        navToggle.setAttribute("aria-label", "Open navigation");
      }
    });
  }

  if (header) {
    const updateHeaderShadow = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    };

    updateHeaderShadow();
    window.addEventListener("scroll", updateHeaderShadow, { passive: true });
  }

  if (contactForm) {
    contactForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      const formData = new FormData(contactForm);
      const status = contactForm.querySelector("[data-form-status]");
      const button = contactForm.querySelector("button[type='submit']");

      if (status) {
        status.textContent = "Sending your inquiry...";
        status.className = "form-status";
      }

      if (button) {
        button.disabled = true;
      }

      try {
        await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString(),
        });

        contactForm.reset();
        if (status) {
          status.textContent = "Thank you. Your inquiry has been sent successfully.";
          status.classList.add("is-success");
        }
      } catch {
        if (status) {
          status.textContent = "Something went wrong. Please email us directly if this keeps happening.";
          status.classList.add("is-error");
        }
      } finally {
        if (button) {
          button.disabled = false;
        }
      }
    });
  }

  const revealItems = document.querySelectorAll(".reveal");
  const staggerItems = document.querySelectorAll(
    ".service-card, .problem-grid article, .media-card, .testimonial-card, .case-card, .blog-card, .timeline article, .faq-list details"
  );

  staggerItems.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index % 6, 5) * 70}ms`;
  });

  if ("IntersectionObserver" in window && revealItems.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }
}

if (document.querySelector("[data-header]")) {
  initAimazeInteractions();
} else {
  document.addEventListener("aimaze:rendered", initAimazeInteractions);
}
