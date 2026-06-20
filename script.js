// Reset scroll to top on page load/refresh
window.history.scrollRestoration = 'manual';
window.addEventListener('load', () => {
  window.scrollTo(0, 0);
});

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
}

// Smooth scroll navigation with configurable offsets
document.querySelectorAll("a[href^='#']").forEach(link => {
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

    // Close hamburger menu on mobile when a link is clicked
    if (hamburger && navLinks) {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    }
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