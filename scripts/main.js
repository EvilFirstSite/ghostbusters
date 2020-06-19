$(document).ready(function() {
    const mMenuBtn = $(".m-menu-btn");
    const mMenu = $(".m-menu");
    const tab = $(".tab");
    mMenuBtn.on('click', function() {
        mMenu.toggleClass('active');
        $("body").toggleClass("no-scroll");
    });

    tab.on("click", function() {
        tab.removeClass("active");
        $(this).toggleClass("active");
        let active = $(this).attr("data-target");
        $(this).attr('data-target');
        $(".tabs-content").removeClass("visible");
        $(active).toggleClass("visible");
    });

    var mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 4,
        spaceBetween: 10,
        loop: true,
        breakpoints: {
            992: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 2,
            },
            320: {
                slidesPerView: 1,
                slidesOffsetAfter: 50,
                navigation: {
                    nextEl: ".btn-next",
                },
            },
        },
    })
});
