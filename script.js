var typed = new Typed(".typing", {
  strings: ["Programmer", "Game Developer", "Scripter"],
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

for (let i = 0; i < totalNavList; i++) {
  const li = navList[i];
  const a = li.querySelector("a");
  
  ['click', 'touchend'].forEach(eventType => {
    li.addEventListener(eventType, function (e) {
      e.preventDefault();
      e.stopPropagation();
      
      // إزالة الفئة النشطة من جميع الروابط
      navList.forEach(item => item.querySelector("a").classList.remove("active"));
      
      // إضافة الفئة النشطة للرابط الحالي
      a.classList.add("active");
      
      // إخفاء جميع الأقسام
      allSection.forEach(section => section.classList.remove("active"));
      
      // عرض القسم المستهدف
      const target = a.getAttribute("href").split("#")[1];
      const targetSection = document.querySelector("#" + target);
      if (targetSection) {
        targetSection.classList.add("active");
        console.log("تم تنشيط القسم:", target); // للتأكد من أن الكود يصل إلى هنا
      } else {
        console.error("لم يتم العثور على القسم المستهدف:", target);
      }
      
      // إغلاق القائمة الجانبية على الأجهزة الصغيرة
      if (window.innerWidth < 1200) {
        asideSectionTogglerBtn();
      }
    });
  });
}

function showSection(element) {
  //Loop for removing active class
  for (let k = 0; k < totalSection; k++) {
    allSection[k].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

//For Hire me section
document.querySelector(".hire-me").addEventListener("click", function () {
  showSection(this);
  updateNav(this);
});

function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}

//For Nav Toggler Button
const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
}
