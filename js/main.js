$(document).ready(function() {
    var owl = $('.owl-carousel').owlCarousel({
        items: 1,
        nav: false
    })


    $('.reviews-prev').click(function() {
        owl.trigger('prev.owl.carousel');
    });

    $('.reviews-next').click(function() {
        owl.trigger('next.owl.carousel');
    });


    // open menu

    openCloseMenu();

    // number of slides

    numberOfslides();
});


function openCloseMenu() {
    $('#menu-toggle').click(function() {
        $('.mobile-menu').addClass('active');
    });
    $('.close-menu').click(function() {
        $('.mobile-menu').removeClass('active');
    });
}



$('.owl-carousel').on('initialized.owl.carousel', function(e) {
    owl_carousel_page_numbers(e);
});


function numberOfslides() {

    $('.owl-carousel').on('changed.owl.carousel', function(e) {

        if (!e.namespace || e.property.name != 'position') return;

        var items_per_page = e.page.size;

        if (items_per_page > 1) {

            var min_item_index = e.item.index,
                max_item_index = min_item_index + items_per_page,
                display_text = (min_item_index + 1) + '-' + max_item_index;

        } else {

            var display_text = (e.item.index + 1);

        }

        $('.reviews-counter').find('span').text(display_text);
        $('.reviews-counter').find('sup').text('/' + e.item.count);


    });

}


function owl_carousel_page_numbers(e){

    //if (!e.namespace || e.property.name != 'position') return;
    //console.log('work');
    var items_per_page = e.page.size;

    if (items_per_page > 1){

        var min_item_index  = e.item.index,
            max_item_index  = min_item_index + items_per_page,
            display_text    = (min_item_index+1) + '-' + max_item_index;

    } else {

        var display_text = (e.item.index+1);

    }   

    $('.reviews-counter').find('span').text(display_text);
    $('.reviews-counter').find('sup').text('/' + e.item.count);
    /*$('#info').text( display_text + '/' + e.item.count);*/

}




// custom input number


jQuery('<div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div>').insertAfter('.quantity input');
jQuery('.quantity').each(function() {
    var spinner = jQuery(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

    btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
            var newVal = oldValue;
        } else {
            var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
    });

    btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
            var newVal = oldValue;
        } else {
            var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
    });

});
