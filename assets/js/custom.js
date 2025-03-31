$(document).ready(function () {

    $(".all-p-humber").click(function () {
        $(this).toggleClass("open");
    });
    $(".mobile-menu-icon").click(function () {
        $('.ft-header-nav-content > ul').slideToggle();
    });

})

// var mySwiper = new Swiper('.kf-hero-right-slider', {
//     loop: true,
//     speed: 1000,
//     autoplay: {
//         delay: 3000
//     },
//     centeredSlides: true,
//     effect: 'coverflow',
//     grabCursor: true,
//     centeredSlides: true,
//     slidesPerView: 'auto',
//     coverflowEffect: {
//         rotate: 0,
//         stretch: 80,
//         depth: 200,
//         modifier: 1,
//         slideShadows: false,
//     },
// });



// var mySwiper2 = new Swiper('.wonderland-left-slider', {
//     centeredSlides: true,
//     slidesPerView: 1,
//     // Navigation arrows
//     navigation: {
//         nextEl: '.swiper-next',
//         prevEl: '.swiper-prev',
//     },
//     pagination: {
//         el: '.kf-wonderland-pagination',  // Target the pagination element
//         clickable: true,           // Make pagination bullets clickable
//     },

// })


var mySwiper = new Swiper('.ft-unserve-slider-content', {
    loop: true,
    speed: 1000,
    // autoplay: {
    //     delay: 3000
    // },
    slidesPerView: 1,
    spaceBetween: 15,
    // Responsive breakpoints
    breakpoints: {

        576: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        992: {
            slidesPerView: 3
        },

        1200: {
            slidesPerView: 4,
        },

        1500: {
            slidesPerView: 4,

        }
    },
    slidesPerView: 1, 

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
    },

    pagination: {
        el: '.ft-swiper-pagination',  // Target the pagination element
        clickable: true,           // Make pagination bullets clickable
    },

})




