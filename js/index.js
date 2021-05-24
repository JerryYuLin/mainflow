let swiper = new Swiper('.swiper-container', {
    spaceBetween: 0,
    grabCursor: false,
    speed: 4000,
    grab:false,
    autoplay: {
        delay: 3000,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
});
let swiper2 = new Swiper('.swiper-container2', {
    spaceBetween: 0,
    speed: 3000,
    autoplay: {
        delay: 3000,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
});


let onLoad = () => {
    $('.pic-box').height($('.pic-box').width()*.8);
    $('.bg-left .bg').height($('.pic-box .pic').height());
    detectActive();
};
$(window).resize(() => {
    $('.pic-box').height($('.pic-box').width()*.8);
    $('.bg-left .bg').height($('.pic-box .pic').height());

    detectActive();
});

const offset = 500, nav = $('.top'), nav_float = $('.float-box'), bg01 = $('.bg01'), bg02 = $('.bg02'), bg03 = $('.bg03');
const detectActive = () => {
    let top = $(window).scrollTop();
    if(top < nav.height()){
        nav.addClass("active");
        nav_float.removeClass("active");
    }
    else {
        nav.removeClass("active");
        nav_float.addClass("active");
    }

    if(top > bg01.offset().top - offset && top < bg01.offset().top + bg01.height() + offset  ) {
        bg01.addClass("active");
    }
    if(top > bg02.offset().top - offset && top < bg02.offset().top + bg02.height() + offset  ) {
        bg02.addClass("active");
    }
    if(top > bg03.offset().top - offset && top < bg03.offset().top + bg03.height() + offset  ) {
        bg03.addClass("active");
    }
};

$(window).scroll(() => {
    detectActive();
});