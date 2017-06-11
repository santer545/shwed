$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        items: 1,
        nav: true

    })


    // open menu

    openCloseMenu();
});


function openCloseMenu() {
    $('#menu-toggle').click(function () {
        $('.mobile-menu').addClass('active');
    });
    $('.close-menu').click(function () {
        $('.mobile-menu').removeClass('active');
    });
}
