// Reset scroll to top on page load/refresh, or scroll to anchor if present
window.history.scrollRestoration = 'manual';
window.addEventListener('load', () => {
  const hash = window.location.hash;
  
  if (hash) {
    // If there's an anchor, scroll to it
    const target = document.querySelector(hash);
    if (target) {
      const customOffset = parseInt(target.closest('[data-offset]')?.getAttribute('data-offset')) || 90;
      const top = target.getBoundingClientRect().top + window.pageYOffset - customOffset;
      setTimeout(() => {
        window.scrollTo({
          top,
          behavior: 'smooth'
        });
      }, 100);
    }
    
    // Remove the hash from the URL
    window.history.replaceState(null, null, window.location.pathname);
  } else {
    // Otherwise, scroll to top
    window.scrollTo(0, 0);
  }
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
    
    // If target doesn't exist on this page, redirect to index.html with anchor
    if (!target) {
      window.location.href = "index.html" + targetId;
      return;
    }

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

document.addEventListener("DOMContentLoaded", () => {

  const typeSelect = document.getElementById("type");
  const cityGroup = document.getElementById("city-group");
  const cityInput = document.getElementById("city");

  const paymentSelect = document.getElementById("payment_method");
  const billingGroup = document.getElementById("billing-group");
  const billingInput = document.getElementById("billing_details");

  function updateTeachingMode() {
    if (typeSelect.value === "lahi") {
      cityGroup.style.display = "flex";
      cityInput.required = true;
    } else {
      cityGroup.style.display = "none";
      cityInput.required = false;
      cityInput.value = "";
    }
  }

  function updatePaymentMethod() {
    if (paymentSelect.value === "invoice") {
      billingGroup.style.display = "flex";
      billingInput.required = true;
    } else {
      billingGroup.style.display = "none";
      billingInput.required = false;
      billingInput.value = "";
    }
  }

  typeSelect.addEventListener("change", updateTeachingMode);
  paymentSelect.addEventListener("change", updatePaymentMethod);

  updateTeachingMode();
  updatePaymentMethod();

});
