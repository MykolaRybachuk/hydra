$(document).ready(function (){
    let headerC = $("#header-cont");
    let heroH = $("#hero").innerHeight();
    let scrollOffset = $(window).scrollTop();


    checkScroll(scrollOffset);
    $('.burger').click(function (event){
        $('.burger, .burger-menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    /* Fixed header */
    $(window).on("scroll", function () {
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);

    });

    function checkScroll(scrollOffset) {
        if( scrollOffset >= 2) {
            headerC.addClass("scroll");
        } else {
            headerC.removeClass("scroll");
        }
    }

    /* Smooth scroll */

    $("[data-scroll]").on("click", function (event){
        event.preventDefault();
        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top-150;
        $('.burger, .burger-menu').toggleClass('active');
        $('body').toggleClass('lock');
        $("html, body").animate({
            scrollTop: elementOffset
        }, 500);
    });
});