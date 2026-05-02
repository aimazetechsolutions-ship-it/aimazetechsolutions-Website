const fallbackContent = {
  site: {
    title: "AimAze Tech Solutions | Odoo ERP Implementation & Tech Solutions",
    description:
      "AimAze Tech Solutions helps businesses implement Odoo ERP, customize workflows, integrate systems, and build professional software, applications, Salesforce cloud solutions, IT management systems, and websites.",
    domain: "https://aimazetechsolutions.com",
    logo: "assets/aimaze-logo-transparent.png",
    ogImage: "assets/aimaze-coverpage.png",
    email: "hello@aimazetechsolutions.com",
    footerText: "AimAze Tech Solutions LLC. All rights reserved.",
  },
  topStrip: {
    text: "Free Odoo ERP consultation for growing businesses",
    linkText: "Request analysis",
    linkHref: "#contact",
  },
  navigation: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Odoo ERP", href: "#odoo" },
    { label: "Industries", href: "#industries" },
    { label: "FAQ", href: "#faq" },
  ],
  hero: {
    eyebrow: "Odoo ERP, software and IT solutions",
    title: "Accelerate growth with practical ERP implementation.",
    copy:
      "AimAze Tech Solutions helps you replace scattered tools, manual reporting, and disconnected processes with clean, scalable systems built around the way your business actually works.",
    points: ["Odoo ERP implementation", "Custom modules", "Integrations and support"],
    primaryButton: { label: "Talk to Us", href: "#contact" },
    secondaryButton: { label: "View Services", href: "#services" },
    image: "assets/odoo-erp-solution-post.png",
    imageAlt: "Odoo ERP solutions by AimAze Tech Solutions",
    cardTitle: "ERP that fits your process",
    cardText: "CRM, HR, finance, sales, inventory, training and support",
  },
  about: {
    eyebrow: "About AimAze",
    title: "Your technology partner for business operations.",
    paragraphs: [
      "AimAze Tech Solutions LLC delivers ERP implementation, business applications, website development, Salesforce cloud work, and IT management solutions for teams that need better control over daily operations.",
      "We focus on clear requirements, practical configuration, thoughtful customization, and long-term support so your software keeps improving with your business.",
    ],
  },
  problems: {
    eyebrow: "Operational challenges",
    title: "Is your business outgrowing its current software?",
    copy:
      "Growth becomes harder when teams rely on spreadsheets, disconnected tools, and manual follow-ups. The right ERP setup gives every team one reliable view of the business.",
    items: [
      { number: "01", title: "Disconnected data", text: "Sales, inventory, accounting, and operations do not always agree." },
      { number: "02", title: "Manual effort", text: "Your team spends too much time entering data and preparing reports." },
      { number: "03", title: "Limited visibility", text: "Management decisions become slower when live performance is unclear." },
      { number: "04", title: "Process gaps", text: "Approvals, handovers, and customer updates depend on people chasing people." },
    ],
  },
  platform: {
    eyebrow: "One unified platform",
    title: "Odoo ERP for the systems your business runs on.",
    copy:
      "Odoo brings core business functions into one modular platform. AimAze helps you plan the right modules, configure the system, customize what matters, and train your team for adoption.",
    bullets: [
      "No heavy licensing barrier with open-source flexibility",
      "CRM, HR, finance, sales, inventory, projects and more",
      "Custom modules tailored to your business workflows",
      "Integrations with existing systems and reporting needs",
      "Ongoing support, training and process optimization",
    ],
    guideEyebrow: "One expert partner",
    guideTitle: "The AimAze delivery model",
    guideItems: [
      { title: "Implementation", text: "Setup, configuration and rollout" },
      { title: "Customization", text: "Modules, workflows and dashboards" },
      { title: "Training", text: "User guidance and adoption support" },
      { title: "Support", text: "Maintenance and continuous improvement" },
    ],
  },
  stats: [
    { value: "6", label: "Core technology services" },
    { value: "ERP", label: "Implementation-first delivery" },
    { value: "360", label: "Process, data and support mindset" },
    { value: "1", label: "Partner for your digital operations" },
  ],
  services: {
    eyebrow: "Our services",
    title: "Business technology solutions under one roof.",
    copy: "From ERP to websites, we build systems that are useful, maintainable, and aligned with the way your team works.",
    items: [
      { short: "ERP", title: "Odoo ERP Implementation", text: "Module planning, setup, workflows, access roles, reporting, migration and rollout." },
      { short: "DEV", title: "Software Development", text: "Custom web systems, APIs, portals, automation tools and internal platforms." },
      { short: "APP", title: "Application Development", text: "Business applications that help teams capture, process and act on information." },
      { short: "SF", title: "Salesforce Cloud Development", text: "Salesforce customization, automation, data models, reports and integrations." },
      { short: "IT", title: "IT Management Solutions", text: "Operational support, documentation, monitoring structure and system administration." },
      { short: "WEB", title: "Website Development", text: "Professional company websites, landing pages, campaigns and lead-generation pages." },
    ],
  },
  industries: {
    eyebrow: "Industries",
    title: "Built for businesses that need control and visibility.",
    items: ["Trading and distribution", "Retail operations", "Professional services", "Inventory-led businesses", "Sales teams", "Finance and HR teams"],
  },
  process: {
    eyebrow: "Implementation process",
    title: "From business process analysis to post-go-live support.",
    items: [
      { title: "Discover", text: "Review current tools, workflows, departments, reports, approvals and pain points." },
      { title: "Design", text: "Map modules, roles, data structure, automations, integrations and rollout priorities." },
      { title: "Deploy", text: "Configure, customize, test, migrate data, train users and prepare for go-live." },
      { title: "Improve", text: "Support users, refine dashboards, optimize workflows and add capabilities over time." },
    ],
  },
  faq: {
    eyebrow: "Questions answered",
    title: "Odoo ERP and implementation FAQ.",
    items: [
      { question: "What does AimAze do?", answer: "AimAze Tech Solutions delivers Odoo ERP implementation, custom software, application development, Salesforce cloud development, IT management solutions and website development." },
      { question: "Can Odoo be customized for my business?", answer: "Yes. Odoo can be configured with standard modules and extended with custom modules, reports, integrations and workflow changes where your process needs something specific." },
      { question: "Do you provide training and support?", answer: "Yes. Training and support are part of the delivery approach so your team can use the system confidently after implementation." },
      { question: "Can AimAze build my company website too?", answer: "Yes. AimAze also builds professional websites and landing pages for businesses that need a clean online presence and lead-generation flow." },
    ],
  },
  contact: {
    eyebrow: "Request a free business process analysis",
    title: "Ready to scale without operational chaos?",
    copy: "Share what you want to improve and AimAze will help you identify the right ERP, software, website or IT solution path.",
    formButton: "Send Inquiry",
  },
};

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function hostFromUrl(url) {
  try {
    return new URL(url).host;
  } catch {
    return url;
  }
}

function setMeta(content) {
  const site = content.site || {};
  document.title = site.title || "AimAze Tech Solutions";
  document.querySelector('meta[name="description"]')?.setAttribute("content", site.description || "");
  document.querySelector('meta[property="og:title"]')?.setAttribute("content", site.title || "");
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", site.description || "");
  document.querySelector('meta[property="og:url"]')?.setAttribute("content", site.domain || "");
  document.querySelector('meta[property="og:image"]')?.setAttribute("content", site.ogImage || "");
  document.querySelector('link[rel="icon"]')?.setAttribute("href", site.logo || "assets/aimaze-logo-transparent.png");
}

function renderSite(content) {
  const site = content.site || {};
  const topStrip = content.topStrip || {};
  const hero = content.hero || {};
  const about = content.about || {};
  const problems = content.problems || {};
  const platform = content.platform || {};
  const services = content.services || {};
  const industries = content.industries || {};
  const process = content.process || {};
  const faq = content.faq || {};
  const contact = content.contact || {};
  const serviceItems = services.items || [];

  window.AIMAZE_CONTACT_EMAIL = site.email || "hello@aimazetechsolutions.com";

  document.getElementById("site-root").innerHTML = `
    <div class="top-strip">
      <p>${escapeHtml(topStrip.text)}</p>
      <a href="${escapeHtml(topStrip.linkHref || "#contact")}">${escapeHtml(topStrip.linkText)}</a>
    </div>

    <header class="site-header" data-header>
      <a class="brand" href="#home" aria-label="AimAze Tech Solutions home">
        <img src="${escapeHtml(site.logo)}" alt="AimAze Tech Solutions logo" />
      </a>
      <button class="nav-toggle" type="button" aria-label="Open navigation" data-nav-toggle>
        <span></span><span></span><span></span>
      </button>
      <nav class="site-nav" data-nav>
        ${(content.navigation || [])
          .map((item) => `<a href="${escapeHtml(item.href)}">${escapeHtml(item.label)}</a>`)
          .join("")}
        <a class="nav-cta" href="#contact">Contact Us</a>
      </nav>
    </header>

    <main>
      <section class="hero" id="home">
        <div class="hero-shape hero-shape-one"></div>
        <div class="hero-shape hero-shape-two"></div>
        <div class="hero-inner">
          <div class="hero-content">
            <p class="eyebrow">${escapeHtml(hero.eyebrow)}</p>
            <h1>${escapeHtml(hero.title)}</h1>
            <p class="hero-copy">${escapeHtml(hero.copy)}</p>
            <div class="hero-points" aria-label="Key strengths">
              ${(hero.points || []).map((point) => `<span>${escapeHtml(point)}</span>`).join("")}
            </div>
            <div class="hero-actions">
              <a class="button button-primary" href="${escapeHtml(hero.primaryButton?.href || "#contact")}">${escapeHtml(hero.primaryButton?.label)}</a>
              <a class="button button-secondary" href="${escapeHtml(hero.secondaryButton?.href || "#services")}">${escapeHtml(hero.secondaryButton?.label)}</a>
            </div>
          </div>
          <div class="hero-card" aria-label="AimAze ERP capabilities">
            <img src="${escapeHtml(hero.image)}" alt="${escapeHtml(hero.imageAlt)}" />
            <div class="hero-card-panel">
              <strong>${escapeHtml(hero.cardTitle)}</strong>
              <span>${escapeHtml(hero.cardText)}</span>
            </div>
          </div>
        </div>
      </section>

      <section class="about-section" id="about">
        <div class="section-heading align-left">
          <p class="eyebrow">${escapeHtml(about.eyebrow)}</p>
          <h2>${escapeHtml(about.title)}</h2>
        </div>
        <div class="about-copy">
          ${(about.paragraphs || []).map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
        </div>
      </section>

      <section class="section problem-section">
        <div class="section-heading">
          <p class="eyebrow">${escapeHtml(problems.eyebrow)}</p>
          <h2>${escapeHtml(problems.title)}</h2>
          <p>${escapeHtml(problems.copy)}</p>
        </div>
        <div class="problem-grid">
          ${(problems.items || [])
            .map(
              (problem) => `
                <article>
                  <span>${escapeHtml(problem.number)}</span>
                  <h3>${escapeHtml(problem.title)}</h3>
                  <p>${escapeHtml(problem.text)}</p>
                </article>`
            )
            .join("")}
        </div>
      </section>

      <section class="platform-section" id="odoo">
        <div class="platform-copy">
          <p class="eyebrow">${escapeHtml(platform.eyebrow)}</p>
          <h2>${escapeHtml(platform.title)}</h2>
          <p>${escapeHtml(platform.copy)}</p>
          <ul class="check-list">
            ${(platform.bullets || []).map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}
          </ul>
        </div>
        <div class="guide-panel">
          <p class="eyebrow">${escapeHtml(platform.guideEyebrow)}</p>
          <h3>${escapeHtml(platform.guideTitle)}</h3>
          <div class="guide-grid">
            ${(platform.guideItems || [])
              .map(
                (item) => `
                  <div>
                    <strong>${escapeHtml(item.title)}</strong>
                    <span>${escapeHtml(item.text)}</span>
                  </div>`
              )
              .join("")}
          </div>
        </div>
      </section>

      <section class="stats-section" aria-label="AimAze service highlights">
        ${(content.stats || [])
          .map(
            (stat) => `
              <div>
                <strong>${escapeHtml(stat.value)}</strong>
                <span>${escapeHtml(stat.label)}</span>
              </div>`
          )
          .join("")}
      </section>

      <section class="section services-section" id="services">
        <div class="section-heading">
          <p class="eyebrow">${escapeHtml(services.eyebrow)}</p>
          <h2>${escapeHtml(services.title)}</h2>
          <p>${escapeHtml(services.copy)}</p>
        </div>
        <div class="service-grid">
          ${serviceItems
            .map(
              (service) => `
                <article class="service-card">
                  <span class="service-icon">${escapeHtml(service.short)}</span>
                  <h3>${escapeHtml(service.title)}</h3>
                  <p>${escapeHtml(service.text)}</p>
                </article>`
            )
            .join("")}
        </div>
      </section>

      <section class="section industries-section" id="industries">
        <div class="section-heading">
          <p class="eyebrow">${escapeHtml(industries.eyebrow)}</p>
          <h2>${escapeHtml(industries.title)}</h2>
        </div>
        <div class="industry-grid">
          ${(industries.items || []).map((industry) => `<span>${escapeHtml(industry)}</span>`).join("")}
        </div>
      </section>

      <section class="section process-section">
        <div class="section-heading align-left">
          <p class="eyebrow">${escapeHtml(process.eyebrow)}</p>
          <h2>${escapeHtml(process.title)}</h2>
        </div>
        <div class="timeline">
          ${(process.items || [])
            .map(
              (step) => `
                <article>
                  <span>${escapeHtml(step.title)}</span>
                  <p>${escapeHtml(step.text)}</p>
                </article>`
            )
            .join("")}
        </div>
      </section>

      <section class="section faq-section" id="faq">
        <div class="section-heading">
          <p class="eyebrow">${escapeHtml(faq.eyebrow)}</p>
          <h2>${escapeHtml(faq.title)}</h2>
        </div>
        <div class="faq-list">
          ${(faq.items || [])
            .map(
              (item, index) => `
                <details ${index === 0 ? "open" : ""}>
                  <summary>${escapeHtml(item.question)}</summary>
                  <p>${escapeHtml(item.answer)}</p>
                </details>`
            )
            .join("")}
        </div>
      </section>

      <section class="contact-section" id="contact">
        <div class="contact-card">
          <p class="eyebrow">${escapeHtml(contact.eyebrow)}</p>
          <h2>${escapeHtml(contact.title)}</h2>
          <p>${escapeHtml(contact.copy)}</p>
          <div class="contact-links">
            <a href="mailto:${escapeHtml(site.email)}">${escapeHtml(site.email)}</a>
            <a href="${escapeHtml(site.domain)}">${escapeHtml(hostFromUrl(site.domain))}</a>
          </div>
        </div>
        <form class="contact-form" data-contact-form>
          <label><span>Name</span><input type="text" name="name" autocomplete="name" required /></label>
          <label><span>Email</span><input type="email" name="email" autocomplete="email" required /></label>
          <label>
            <span>Service needed</span>
            <select name="service" required>
              <option value="">Select a service</option>
              ${serviceItems.map((service) => `<option>${escapeHtml(service.title)}</option>`).join("")}
            </select>
          </label>
          <label><span>Message</span><textarea name="message" rows="5" required></textarea></label>
          <button class="button button-primary" type="submit">${escapeHtml(contact.formButton || "Send Inquiry")}</button>
        </form>
      </section>
    </main>

    <footer class="site-footer">
      <img src="${escapeHtml(site.logo)}" alt="AimAze Tech Solutions logo" />
      <p>© <span data-year></span> ${escapeHtml(site.footerText)}</p>
    </footer>
  `;

  document.dispatchEvent(new Event("aimaze:rendered"));
}

async function loadContent() {
  try {
    const response = await fetch("content.json", { cache: "no-store" });
    if (!response.ok) {
      throw new Error("Could not load content.json");
    }
    return await response.json();
  } catch {
    return fallbackContent;
  }
}

loadContent().then((content) => {
  setMeta(content);
  renderSite(content);
});
