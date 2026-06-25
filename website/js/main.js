/* =========================================================
   Corazana — main.js
   Toggle de idioma (ES/EN), menú móvil, fade-in al scroll,
   y simulación de envío de formulario de contacto.
   Sin dependencias externas.
   ========================================================= */

(function () {
  "use strict";

  /* ---------- Diccionario de textos ---------- */
  var i18n = {
    es: {
      "nav.mision": "Misión",
      "nav.servicios": "Servicios",
      "nav.alcance": "Alcance",
      "nav.impacto": "Impacto",
      "nav.contacto": "Contacto",
      "nav.cta": "Trabajemos juntas",

      "hero.title": "Software hecho por mujeres,<br />para toda América.",
      "hero.subtitle": "Equipos 100% liderados por mujeres entregando desarrollo de software de nivel enterprise, desde México hasta Argentina, de Canadá a Brasil.",
      "hero.ctaClient": "Cotiza tu proyecto",
      "hero.ctaTalent": "Únete al equipo",

      "mision.eyebrow": "Por qué Corazana",
      "mision.title": "Nuestra misión",
      "mision.lead": "Ser la red líder de desarrollo de software liderada por mujeres en América, entregando soluciones tecnológicas de calidad enterprise a empresas de todo el continente, mientras construimos el mayor pipeline de talento femenino en tecnología de la región.",

      "pillars.p1.title": "Sororidad y talento",
      "pillars.p1.text": "Red de desarrolladoras, diseñadoras y líderes tech de México a Argentina, de Canadá a Brasil.",
      "pillars.p2.title": "Excelencia técnica",
      "pillars.p2.text": "Entregas de nivel enterprise: web, mobile, cloud, datos e IA aplicada.",
      "pillars.p3.title": "Alcance panamericano",
      "pillars.p3.text": "Equipos distribuidos, cobertura de husos horarios de todo el continente, trabajo remoto-first.",
      "pillars.p4.title": "Impacto con propósito",
      "pillars.p4.text": "Un porcentaje de cada proyecto financia becas de programación para mujeres en la región.",

      "servicios.eyebrow": "Lo que hacemos",
      "servicios.title": "Servicios",
      "services.s1.title": "Desarrollo web &amp; mobile a medida",
      "services.s1.text": "Productos digitales a la medida de tu negocio, de extremo a extremo.",
      "services.s2.title": "Cloud, DevOps &amp; arquitectura",
      "services.s2.text": "Infraestructura escalable, segura y lista para crecer junto a tu producto.",
      "services.s3.title": "Producto digital (UX/UI)",
      "services.s3.text": "Investigación y diseño centrados en las personas que usarán tu producto.",
      "services.s4.title": "IA aplicada a negocio",
      "services.s4.text": "Automatización e inteligencia artificial con impacto real y medible.",
      "services.s5.title": "Consultoría &amp; equipos dedicados",
      "services.s5.text": "Staff augmentation con talento senior, listo para integrarse a tu equipo.",

      "alcance.eyebrow": "Equipos distribuidos",
      "alcance.title": "Alcance panamericano",
      "alcance.lead": "Cobertura de husos horarios de todo el continente, trabajo remoto-first. Donde estés, ahí estamos.",
      "regions.ca": "Canadá",
      "regions.us": "Estados Unidos",
      "regions.mx": "México",
      "regions.ca2": "Centroamérica",
      "regions.car": "Caribe",
      "regions.br": "Brasil",
      "regions.sa": "Sudamérica",

      "impacto.eyebrow": "Impacto con propósito",
      "impacto.title": "Becas para mujeres en tech",
      "impacto.text": "Un porcentaje de cada proyecto que desarrollamos financia becas de programación para mujeres en toda la región. Crecemos como negocio y, al mismo tiempo, ampliamos el pipeline de talento femenino en tecnología en América. No es solo discurso: es un compromiso medible, proyecto a proyecto.",
      "impacto.stat1": "Liderazgo femenino",
      "impacto.stat2": "Países de alcance",
      "impacto.stat3": "Compromiso con becas",

      "contacto.eyebrow": "Hablemos",
      "contacto.title": "Trabajemos juntas",
      "contacto.lead": "Contanos qué necesitás: ya seas una empresa buscando un partner de desarrollo, o una profesional tech buscando sumarte a la red.",

      "form.name": "Nombre",
      "form.email": "Email",
      "form.interest": "Tipo de interés",
      "form.interestClient": "Soy cliente",
      "form.interestTalent": "Soy talento",
      "form.message": "Mensaje",
      "form.submit": "Enviar mensaje",
      "form.success": "¡Gracias! Recibimos tu mensaje y te contactaremos pronto.",

      "footer.tagline": "Tecnología sin fronteras, liderada por mujeres.",
      "footer.rights": "Todos los derechos reservados."
    },

    en: {
      "nav.mision": "Mission",
      "nav.servicios": "Services",
      "nav.alcance": "Reach",
      "nav.impacto": "Impact",
      "nav.contacto": "Contact",
      "nav.cta": "Let's work together",

      "hero.title": "Software built by women.<br />For the whole Americas.",
      "hero.subtitle": "Teams 100% led by women delivering enterprise-grade software development, from Mexico to Argentina, from Canada to Brazil.",
      "hero.ctaClient": "Get a quote",
      "hero.ctaTalent": "Join the team",

      "mision.eyebrow": "Why Corazana",
      "mision.title": "Our mission",
      "mision.lead": "To be the leading network of women-led software development in the Americas, delivering enterprise-quality technology solutions to companies across the continent, while building the largest pipeline of female tech talent in the region.",

      "pillars.p1.title": "Sisterhood and talent",
      "pillars.p1.text": "A network of developers, designers, and tech leaders from Mexico to Argentina, from Canada to Brazil.",
      "pillars.p2.title": "Technical excellence",
      "pillars.p2.text": "Enterprise-grade delivery: web, mobile, cloud, data, and applied AI.",
      "pillars.p3.title": "Pan-American reach",
      "pillars.p3.text": "Distributed teams, time-zone coverage across the continent, remote-first work.",
      "pillars.p4.title": "Purpose-driven impact",
      "pillars.p4.text": "A percentage of every project funds coding scholarships for women across the region.",

      "servicios.eyebrow": "What we do",
      "servicios.title": "Services",
      "services.s1.title": "Custom web &amp; mobile development",
      "services.s1.text": "Digital products tailored to your business, end to end.",
      "services.s2.title": "Cloud, DevOps &amp; architecture",
      "services.s2.text": "Scalable, secure infrastructure ready to grow with your product.",
      "services.s3.title": "Digital product (UX/UI)",
      "services.s3.text": "Research and design centered on the people who'll use your product.",
      "services.s4.title": "Applied business AI",
      "services.s4.text": "Automation and artificial intelligence with real, measurable impact.",
      "services.s5.title": "Consulting &amp; dedicated teams",
      "services.s5.text": "Staff augmentation with senior talent, ready to join your team.",

      "alcance.eyebrow": "Distributed teams",
      "alcance.title": "Pan-American reach",
      "alcance.lead": "Time-zone coverage across the whole continent, remote-first work. Wherever you are, we're there.",
      "regions.ca": "Canada",
      "regions.us": "United States",
      "regions.mx": "Mexico",
      "regions.ca2": "Central America",
      "regions.car": "Caribbean",
      "regions.br": "Brazil",
      "regions.sa": "South America",

      "impacto.eyebrow": "Purpose-driven impact",
      "impacto.title": "Scholarships for women in tech",
      "impacto.text": "A percentage of every project we develop funds coding scholarships for women across the region. We grow as a business while expanding the pipeline of female tech talent in the Americas. It's not just talk — it's a measurable commitment, project by project.",
      "impacto.stat1": "Women-led leadership",
      "impacto.stat2": "Countries reached",
      "impacto.stat3": "Commitment to scholarships",

      "contacto.eyebrow": "Let's talk",
      "contacto.title": "Let's work together",
      "contacto.lead": "Tell us what you need: whether you're a company looking for a development partner, or a tech professional looking to join the network.",

      "form.name": "Name",
      "form.email": "Email",
      "form.interest": "Type of interest",
      "form.interestClient": "I'm a client",
      "form.interestTalent": "I'm talent",
      "form.message": "Message",
      "form.submit": "Send message",
      "form.success": "Thank you! We received your message and will be in touch soon.",

      "footer.tagline": "Technology without borders, led by women.",
      "footer.rights": "All rights reserved."
    }
  };

  var currentLang = "es";

  function applyLang(lang) {
    currentLang = lang;
    document.documentElement.setAttribute("lang", lang === "en" ? "en" : "es");

    var dict = i18n[lang] || i18n.es;
    var nodes = document.querySelectorAll("[data-i18n]");
    nodes.forEach(function (node) {
      var key = node.getAttribute("data-i18n");
      if (dict[key] !== undefined) {
        node.innerHTML = dict[key];
      }
    });

    var langOptions = document.querySelectorAll(".lang-option");
    langOptions.forEach(function (opt) {
      opt.classList.toggle("lang-active", opt.getAttribute("data-lang") === lang);
    });
  }

  /* ---------- Toggle de idioma ---------- */
  function initLangToggle() {
    var toggle = document.getElementById("lang-toggle");
    if (!toggle) return;

    toggle.addEventListener("click", function () {
      var nextLang = currentLang === "es" ? "en" : "es";
      applyLang(nextLang);
    });
  }

  /* ---------- Menú móvil ---------- */
  function initMobileNav() {
    var burger = document.getElementById("nav-burger");
    var nav = document.getElementById("main-nav");
    if (!burger || !nav) return;

    burger.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Fade-in al hacer scroll ---------- */
  function initScrollFade() {
    var elements = document.querySelectorAll(".fade-in");
    if (!("IntersectionObserver" in window) || elements.length === 0) {
      elements.forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ---------- Formulario de contacto (sin backend) ---------- */
  function initContactForm() {
    var form = document.getElementById("contact-form");
    var successMsg = document.getElementById("form-success");
    if (!form || !successMsg) return;

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      // No hay backend real: mostramos confirmación en pantalla.
      // Alternativa simple: descomentar para abrir el cliente de correo.
      // var name = form.name.value;
      // var email = form.email.value;
      // var interest = form.interest.value;
      // var message = form.message.value;
      // window.location.href = "mailto:hola@corazana.dev?subject=Contacto%20" + encodeURIComponent(interest) + "&body=" + encodeURIComponent("Nombre: " + name + "\nEmail: " + email + "\n\n" + message);

      successMsg.hidden = false;
      form.reset();
      successMsg.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  }

  /* ---------- Año dinámico en footer ---------- */
  function initYear() {
    var yearEl = document.getElementById("year");
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  }

  /* ---------- Init ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    applyLang("es");
    initLangToggle();
    initMobileNav();
    initScrollFade();
    initContactForm();
    initYear();
  });
})();
