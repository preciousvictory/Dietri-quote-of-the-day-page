const hamburger= document.querySelector(".hamburger");
const navMenu= document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})


document.querySelectorAll(".nav-item").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
}))

// on click scroll for suggest section
const rightBtn = document.querySelector('#slide');
const leftBtn = document.querySelector('#slide_');

rightBtn.addEventListener("click", function(event) {
  const conent = document.querySelector('#container');
  conent.scrollLeft += 300;
  event.preventDefault();
});

leftBtn.addEventListener("click", function(event) {
  const conent = document.querySelector('#container');
  conent.scrollLeft -= 300;
  event.preventDefault();
});
