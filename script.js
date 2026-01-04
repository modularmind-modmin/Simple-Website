const button = document.getElementById("button");

const SHOW_AFTER = 200;   // px scrolled before button can appear
const HIDE_DELAY = 2400; // ms before auto-hide

let lastScrollY = window.scrollY;
let hideTimeout = null;

function showButton() {
  button.classList.add("is-visible");

  clearTimeout(hideTimeout);
  hideTimeout = setTimeout(hideButton, HIDE_DELAY);
}

function hideButton() {
  button.classList.remove("is-visible");
}

function handleScroll() {
  const currentScrollY = window.scrollY;

  if (currentScrollY > SHOW_AFTER) {
    if (currentScrollY < lastScrollY) {
      showButton(); // scrolling up
    }
  } else {
    hideButton(); // near top
  }

  lastScrollY = currentScrollY;
}

window.addEventListener("scroll", handleScroll, { passive: true });

button.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
