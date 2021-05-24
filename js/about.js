let onLoad = () => {
    detectActive();
};
$(window).resize(() => {
    detectActive();
});

const offset = 500, nav = $('.top'), nav_float = $('.float-box'), intro01 = $('.intro01'), intro02 = $('.intro02');
const detectActive = () => {
    let top = $(window).scrollTop();
    if(top < nav.height()){
        nav.addClass("active");
        nav_float.removeClass("active");
        intro01.addClass("active");
    }
    else {
        nav.removeClass("active");
        nav_float.addClass("active");
    }
    if(top > intro01.offset().top - offset && top < intro01.offset().top + intro01.height() + offset  ) {
        intro01.addClass("active");
    }
    if(top > intro02.offset().top - offset && top < intro02.offset().top + intro02.height() + offset  ) {
        intro02.addClass("active");
    }
};

$(window).scroll(() => {
    detectActive();
});