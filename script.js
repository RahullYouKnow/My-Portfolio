const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

const mode = document.querySelector("#mode");
const modeIcon = document.querySelector("i");
const saveTheam = localStorage.getItem("pro-theam");
if (saveTheam === "dark") {
  document.body.classList.add("dark-mode");
  modeIcon.classList.add("ri-sun-line");
} else {
  modeIcon.classList.remove("ri-sun-line");
}

mode.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  if (!document.body.classList.contains("dark-mode")) {
    modeIcon.classList.remove("ri-sun-line");
    modeIcon.classList.add("ri-moon-line");
    localStorage.setItem("pro-theam", "ligh");
  } else {
    modeIcon.classList.remove("ri-moon-line");
    modeIcon.classList.add("ri-sun-line");
    localStorage.setItem("pro-theam", "dark");
  }
});
