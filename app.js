// menu

const bar = document.querySelector('.mobile-bar');
const mainMenu = document.querySelector('.main-nav');
const links = document.querySelectorAll('.nav-link');

bar.addEventListener('click', () => {
    bar.classList.toggle('is-active');
    mainMenu.classList.toggle('show-nav');
})

links.forEach((links) => {
    links.addEventListener('click', () => {
        bar.classList.toggle('is-active');
        mainMenu.classList.toggle('show-nav');

        mainMenu.querySelector('.active').classList.remove('active');

        links.classList.add('active');
    })

})

// Login Area

const login = document.querySelector('.open-login');
const closeLogin = document.querySelector('.close-login');
const loginModal = document.querySelector('.modal-container');

login.addEventListener('click', () => loginModal.classList.add('open-login'));
closeLogin.addEventListener('click', () => loginModal.classList.remove('open-login'));
loginModal.addEventListener('click', e => e.target === loginModal ? loginModal.classList.remove('open-login') : false);






//  Initialize Swiper 
var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      clickable: true,
    },
  });




  // scroll top button



  const toTop = document.querySelector('.toTop');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 350) {
            toTop.classList.add('scroll-top');

        } 
        toTop.classList.remove('scroll-top');
    });
