/*========== Tabs Section ===========*/

const tabsLink = document.querySelectorAll(".tabs_link");
const contents = document.querySelectorAll(".course_details_curriculum_content");

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




//Animation on Scroll initializing
AOS.init();






/*========== Header Section ===========*/
const navBer = document.querySelector("#navber");
const navMenu = document.querySelector("#nav-menu");
const menuBtn = document.querySelector("#menubtn");
const closeBtn = document.querySelector("#closebtn");
const dropMenu = document.querySelector("#dropMenu");
const dropDown = document.querySelector("#dropDown");
const dropMenu1 = document.querySelector("#dropMenu1");
const dropDown1 = document.querySelector("#dropDown1");
const dropMenu2 = document.querySelector("#dropMenu2");
const dropDown2 = document.querySelector("#dropDown2");

dropMenu.onclick = ()=>{
    dropDown.classList.toggle("active");
    dropMenu.classList.toggle("active");
}

dropMenu1.onclick = ()=>{
    dropDown1.classList.toggle("active");
    dropMenu1.classList.toggle("active");
}

dropMenu2.onclick = ()=>{
  dropDown2.classList.toggle("active");
  dropMenu2.classList.toggle("active");
}


menuBtn.onclick = ()=>{
    navMenu.classList.add("active");
    menuBtn.classList.add("hide");
}


closeBtn.onclick = ()=>{
    navMenu.classList.remove("active");
    menuBtn.classList.remove("hide");
}








/*========== Header Scroll Section ===========*/
const headerNavber = document.querySelector(".headerNavber");



window.onscroll = function () {
  if(document.documentElement.scrollTop > 20){
     headerNavber.classList.add("active");
  }else{
     headerNavber.classList.remove("active");
  }
}



  /*==========Counter Scrolling Section js===========*/

  const workSection = document.querySelector(".counter_row");
  const workObserver = new IntersectionObserver((entries, observer) => {
    const [entry] = entries;

    if(entry.isIntersecting == false) return;










  /*==========Counter Section js===========*/

  const counterNum = document.querySelectorAll(".count");

  const speed = 100;

  counterNum.forEach((curElem) => {
     const updateNumber = () => {
      const targetNumber = parseInt(curElem.dataset.number);

      const initialNum = parseInt(curElem.innerText);

      const incrementNumber = Math.trunc(targetNumber / speed);

      if(initialNum < targetNumber){
        curElem.innerText = `${initialNum + incrementNumber}+`;

        setTimeout(updateNumber, 10);
      }
     };

     updateNumber();
  });

  observer.unobserve(workSection);

  },
   {
    root: null,
    threshold: 0,
  });


  workObserver.observe(workSection);





/*========== Video Section ===========*/

function toggle(){
  var blur = document.querySelector("#blur");
  blur.classList.toggle("active");

  var popup = document.querySelector(".popup");
  popup.classList.toggle("active");

  var iframeVideo = document.querySelector(".off_play");
  iframeVideo.pause();
  iframeVideo.currentTime = 0;
}







/*========== Client Section ===========*/

var swiper = new Swiper(".client_container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,
    autoplay: {
      delay: 1,
      disableOnInteraction: true,
  },
  speed: 3000,
    // navigation: {
    //   nextEl: ".fa-chevron-right",
    //   prevEl: ".fa-chevron-left",
    // },
    
    breakpoints: {
      350: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 24,
      },
    },
  });



  
/*========== Review Section ===========*/

var swiper = new Swiper(".review_container", {
  spaceBetween: 24,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
},
pagination: {
  el: ".swiper-pagination",
  dynamicBullets: true,
},
  // navigation: {
  //   nextEl: ".fa-chevron-right",
  //   prevEl: ".fa-chevron-left",
  // },
  
  breakpoints: {
    350: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    700: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
  },
});




  