/NavBar/ 

addEventListener('DOMContentLoaded', () => {
    const btn_menu = document.querySelector('.btn_menu')
    if (btn_menu) {
        btn_menu.addEventListener('click', () => {
            const nav_menu = document.querySelector('.nav_menu')
            nav_menu.classList.toggle('show')
        })
    }
})

const navigationHeight = document.querySelector(".navbar")
  .offsetHeight;

document.documentElement.style.setProperty(
  "--scroll-padding",
  navigationHeight + "px"
);