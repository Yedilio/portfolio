$(function () {

    // fixed toolbar
    let toolbar = $("#toolbar");
    let intro = $("#mainPage");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    checkScroll(scrollPos, introH);

    $(window).on("scroll resize", function() {
        scrollPos = $(this).scrollTop();
        introH = intro.innerHeight();

        checkScroll(scrollPos, introH);
    });

    function checkScroll(scrollPos, introH) {
        if( scrollPos > introH ) {
            toolbar.addClass("fixed");
        } else {
            toolbar.removeClass("fixed");
        }
    }

    // Smooth scroll
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        $("html, body").animate({
            scrollTop: elementOffset - 30
        }, 700);
    })
});
