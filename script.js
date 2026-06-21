// Hamburger menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

if (hamburger && navLinks) {
hamburger.addEventListener("click", () => {
hamburger.classList.toggle("active");
navLinks.classList.toggle("active");
});
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const targetId = link.getAttribute("href");

    if (!targetId || targetId === "#") return;

    const target = document.querySelector(targetId);
    if (!target) return;

    e.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    // close mobile menu
    if (hamburger && navLinks) {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
    }
  });
});

// FAQ accordion
document.querySelectorAll(".faq-question").forEach(button => {
button.addEventListener("click", () => {
const faqItem = button.closest(".faq-item");

```
if (!faqItem) return;

document.querySelectorAll(".faq-item.active").forEach(item => {
  if (item !== faqItem) {
    item.classList.remove("active");
  }
});

faqItem.classList.toggle("active");
```

});
});

// Booking form logic
document.addEventListener("DOMContentLoaded", () => {
const typeSelect = document.getElementById("type");
const placeGroup = document.getElementById("place-group");
const placeInput = document.getElementById("place");

if (typeSelect && placeGroup && placeInput) {
function updateTeachingMode() {
if (typeSelect.value === "lahi") {
placeGroup.style.display = "flex";
placeInput.required = true;
} else {
placeGroup.style.display = "none";
placeInput.required = false;
placeInput.value = "";
}
}

```
typeSelect.addEventListener("change", updateTeachingMode);

updateTeachingMode();
```

}
});