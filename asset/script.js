
/*========== Header Section ===========*/
const navBer = document.querySelector("#navber");
const navMenu = document.querySelector("#nav-menu");
const menuBtn = document.querySelector("#menubtn");
const closeBtn = document.querySelector("#closebtn");
const navdropMenu = document.querySelector("#navdropMenu");


document.querySelectorAll("#dropMenu").forEach((menu) => {
  menu.addEventListener("click", (e) => {
    const dropdown = e.target.closest("li").querySelector(".dropDown");
    dropdown.classList.toggle("active");
  });
});




menuBtn.onclick = ()=>{
    navMenu.classList.add("active");
    menuBtn.classList.add("hide");
}


closeBtn.onclick = ()=>{
    navMenu.classList.remove("active");
    menuBtn.classList.remove("hide");
}



/*========== Header Scroll Section ===========*/
/**
 * header sticky & back to top
 */

const header = document.querySelector(".headerNavber");
// const backTopBtn = document.querySelector(".nav_list a");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    // backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    // backTopBtn.classList.remove("active");
  }
});




// Animation on Scroll initializing
// AOS.init();





/*========== Tabs Section ===========*/

const tabsLink = document.querySelectorAll(".project_tabs_link");
const contents = document.querySelectorAll(".project_container");

tabsLink.forEach((buttons, contentbox) =>{
  buttons.addEventListener("click", () =>{
      tabsLink.forEach(buttons =>{
           buttons.classList.remove("active");
        });
        buttons.classList.add("active");

        contents.forEach(contents =>{
          contents.classList.remove("active");
        });
        contents[contentbox].classList.add("active");
    })
})













/*========== Hero Section ===========*/

var swiper = new Swiper(".hero_slider_container", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
  },
  // grabCursor: true,
//   autoplay: {
//     delay: 1,
//     disableOnInteraction: true,
// },
// speed: 3000,
pagination: {
  el: ".swiper-pagination",
  dynamicBullets: true,
  clickable: true,
},
  
  breakpoints: {
    350: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    1200: {
      slidesPerView: 1,
      spaceBetween:0,
    },
  },
});






/*========== Products Section ===========*/

var swiper = new Swiper(".product_container", {
  spaceBetween: 24,
    loop: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
  },
  // grabCursor: true,
//   autoplay: {
//     delay: 1,
//     disableOnInteraction: true,
// },
// speed: 3000,
  navigation: {
    nextEl: ".fa-angle-right",
    prevEl: ".fa-angle-left",
  },
  
  breakpoints: {
    350: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});














  







