/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const nav = document.querySelector(".nav-links");
const navContainer = document.querySelector(".nav-container");

// Create mobile menu button
const menuButton = document.createElement("button");

menuButton.classList.add("menu-button");
menuButton.innerHTML = "☰";
menuButton.setAttribute("aria-label", "Open navigation menu");

navContainer.appendChild(menuButton);

// Toggle mobile menu
menuButton.addEventListener("click", () => {
  nav.classList.toggle("active");

  if (nav.classList.contains("active")) {
    menuButton.innerHTML = "✕";
    menuButton.setAttribute("aria-label", "Close navigation menu");
  } else {
    menuButton.innerHTML = "☰";
    menuButton.setAttribute("aria-label", "Open navigation menu");
  }
});

// Close menu after clicking a navigation link
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    menuButton.innerHTML = "☰";
    menuButton.setAttribute("aria-label", "Open navigation menu");
  });
});

/* =====================================================
   SCROLL REVEAL ANIMATION
===================================================== */

const revealElements = document.querySelectorAll(
  ".section-title, .interest-card, .timeline-item, .research-card, .experience-item, .participation-card, .skill, .contact-container",
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
});

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
  },
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});

/* =====================================================
   SCROLL PROGRESS
===================================================== */

const progressBar = document.querySelector(".scroll-progress");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;

  const documentHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrollPercentage = (scrollTop / documentHeight) * 100;

  progressBar.style.width = scrollPercentage + "%";
});

/* =====================================================
   NAVBAR SCROLL EFFECT
===================================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
