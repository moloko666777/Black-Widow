new Swiper('.shop__slider',{
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 20,
    speed: 400,
    pagination: {
        // el: '.swiper-pagination-1',
        // type: 'bullets',
    },
    navigation: {
        nextEl: '.slider-button-next',
        prevEl: '.slider-button-prev',
    },
    breakpoints: {
        320: {
            spaceBetween: 10,
            slidesPerView: 1.5,
            slidesPerGroup: 1,
        },
        430: {
            spaceBetween: .9,
            slidesPerView: 1.5,
            slidesPerGroup: 1,
        },
        768: {
            spaceBetween: 19,
            slidesPerView: 3,
            slidesPerGroup: 1,
        },
        1024: {
            spaceBetween: 20,
            slidesPerView: 3,
            slidesPerGroup: 1,
        }
    }
});


new Swiper('.social__slider',{
    slidesPerView: 6,
    slidesPerGroup: 1,
    spaceBetween: 20,
    speed: 400,
    pagination: {
        // el: '.swiper-pagination-1',
        // type: 'bullets',
    },
    navigation: {
        nextEl: '.slider-button-next',
        prevEl: '.slider-button-prev',
    },
    breakpoints: {
        320: {
            spaceBetween: 10,
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
        430: {
            spaceBetween: 10,
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
        768: {
            spaceBetween: 17,
            slidesPerView: 4,
            slidesPerGroup: 1,
        },
        1024: {
            spaceBetween: 20,
            slidesPerView: 6,
            slidesPerGroup: 1,
        }
    }
});

new Swiper('.news__slider',{
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 20,
    speed: 400,
    pagination: {
        // el: '.swiper-pagination-1',
        // type: 'bullets',
    },
    navigation: {
        nextEl: '.slider-button-next',
        prevEl: '.slider-button-prev',
    },
    breakpoints: {
        320: {
            spaceBetween: 10,
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        430: {
            spaceBetween: 10,
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        768: {
            spaceBetween: 20,
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
        1024: {
            spaceBetween: 30,
            slidesPerView: 3,
            slidesPerGroup: 1,
        }
    }
});

new Swiper('.blog__slider',{
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 20,
    speed: 400,
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            spaceBetween: 10,
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        430: {
            spaceBetween: 10,
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        768: {
            spaceBetween: 19,
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
        1024: {
            spaceBetween: 20,
            slidesPerView: 3,
            slidesPerGroup: 1,
        }
    }
});
