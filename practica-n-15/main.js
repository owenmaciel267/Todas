// $(document).ready(function () {
//     var lbltext = document.getElementById('lblPlanta').innerHTML;
//     alert(lbltext);

// });


const swiper = new Swiper('.swiper-1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 100000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
    },


    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
});


// Slider-2
var swiperr = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
                delay: 3000,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
                
            },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // Para que vayan cambiando la visualizacion de las cards
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        520:{
            slidesPerView:2,
        },
        950:{
            slidesPerView: 3,
        },
    },

});




