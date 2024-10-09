var typed = new Typed(".typing", {
  strings: ["Programmer", "GameDv", "Scripter"],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});

// Aside
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;

function showSection(element) {
  const target = element.getAttribute("href").split("#")[1];
  for (let k = 0; k < totalSection; k++) {
    allSection[k].classList.remove("active");
  }
  document.querySelector("#" + target).classList.add("active");
}

function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}

function handleNavClick(e) {
  e.preventDefault();
  showSection(this);
  updateNav(this);
  if (window.innerWidth < 1200) {
    asideSectionTogglerBtn();
  }
}

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", handleNavClick);
  a.addEventListener("touchend", handleNavClick);
}

document.querySelector(".hire-me").addEventListener("click", function (e) {
  e.preventDefault();
  const target = this.getAttribute("href").split("#")[1];
  showSection(document.querySelector(`a[href="#${target}"]`));
  updateNav(this);
});

const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");

function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
}

navTogglerBtn.addEventListener("click", asideSectionTogglerBtn);
navTogglerBtn.addEventListener("touchend", asideSectionTogglerBtn);

// Ensure proper initialization on page load
window.addEventListener('load', function() {
  const hash = window.location.hash;
  if (hash) {
    const targetLink = document.querySelector(`a[href="${hash}"]`);
    if (targetLink) {
      showSection(targetLink);
      updateNav(targetLink);
    }
  }
});
