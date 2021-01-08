// ABOUT.HTML:

const navbars = document.querySelector(".header__navbars");
const navbarsIcon = document.querySelector("#navbarsIcon");

const toggleNavbar = function toggleResponsiveNavbarWhenClicking() {
  navbars.classList.toggle("navbars-visible")
  if (navbars.classList.contains("navbars-visible")) {
    navbarsIcon.src = "./assets/close-24px.svg"
  } else {
    navbarsIcon.src = "./assets/menu-24px.svg"
  }
  
};

navbars.addEventListener("click", toggleNavbar);


// FAQ.HTML:

const collbuttons = document.querySelectorAll(".faq__collbutton")

const toggleCollapsible = function toggleCollapsibleElementsWhenCLicking(event) {
  const answer = event.target.nextElementSibling;
  event.target.classList.toggle("faq__collbutton-open");
  event.target.querySelector("img").classList.toggle("rotate180")
  answer.classList.toggle("faq__answer-visible");
 }
 
collbuttons.forEach(collbutton => {
  collbutton.addEventListener("click", toggleCollapsible)
})