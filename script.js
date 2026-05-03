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
        const name = formData.get("name") || "";
        const email = formData.get("email") || "";
        const phone = formData.get("phone") || "";
        const service = formData.get("service") || "";
        const message = formData.get("message") || "";
        const subject = encodeURIComponent(`Website inquiry from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone/WhatsApp: ${phone}\nService: ${service}\n\nMessage:\n${message}`);
        window.location.href = `mailto:${window.AIMAZE_CONTACT_EMAIL || "info@aimazetechsolutions.com"}?subject=${subject}&body=${body}`;

        if (status) {
          status.textContent = "Your email app is opening. You can send the inquiry from there.";
          status.classList.add("is-success");
        }
      } catch {
        if (status) {
          status.textContent = "Please email us directly at info@aimazetechsolutions.com.";
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


function addFloatingWhatsapp() {
  const number = String(window.AIMAZE_WHATSAPP_NUMBER || "YOUR_WHATSAPP_NUMBER").replace(/\D/g, "");
  const href = number ? `https://wa.me/${number}?text=${encodeURIComponent("Hello AimAze Tech Solutions, I want to discuss ERP / technology services.")}` : "contact.html";
  if (document.querySelector(".whatsapp-float")) return;
  const link = document.createElement("a");
  link.className = "whatsapp-float";
  link.href = href;
  link.target = number ? "_blank" : "_self";
  link.rel = "noopener";
  link.setAttribute("aria-label", "Chat with AimAze Tech Solutions on WhatsApp");
  link.innerHTML = `<span>WhatsApp</span><strong>Free Consultation</strong>`;
  document.body.appendChild(link);
}

document.addEventListener("aimaze:rendered", addFloatingWhatsapp);
