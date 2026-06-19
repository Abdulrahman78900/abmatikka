// Reset scroll to top on page load/refresh
window.history.scrollRestoration = 'manual';
window.addEventListener('load', () => {
  window.scrollTo(0, 0);
});

// Smooth scroll navigation with configurable offsets
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href");

    if (!targetId.startsWith("#")) return;

    e.preventDefault();

    const target = document.querySelector(targetId);
    if (!target) return;

    // Get offset from data attribute, default to 90px
    const customOffset = parseInt(link.getAttribute("data-offset")) || 90;

    const top = target.getBoundingClientRect().top + window.pageYOffset - customOffset;

    window.scrollTo({
      top,
      behavior: "smooth"
    });

    link.classList.add("clicked");
    setTimeout(() => link.classList.remove("clicked"), 200);
  });
});

// FAQ toggle functionality
document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", (e) => {
    const faqItem = button.closest(".faq-item");
    if (!faqItem) return;

    const isActive = faqItem.classList.contains("active");
    
    // Close all other FAQ items
    document.querySelectorAll(".faq-item.active").forEach(item => {
      if (item !== faqItem) {
        item.classList.remove("active");
      }
    });
    
    // Toggle current FAQ item
    faqItem.classList.toggle("active");
  });
});

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});