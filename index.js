// index.js
console.log("Website is running!");

// You can also manipulate Calendly widget dynamically if needed:
document.addEventListener("DOMContentLoaded", () => {
  const widget = document.querySelector(".calendly-inline-widget");
  if (widget) {
    console.log("Calendly widget loaded:", widget.dataset.url);
  }
});
