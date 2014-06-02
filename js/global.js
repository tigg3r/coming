﻿// Background image
$.backstretch("images/background/1.jpg");


// Preloader
$( window ).load(function() {
    $("#status").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
});


// Dropdown hover
$(document).ready(function () {
    $(".dropdown-panel-handle ul").fadeTo(0, 0);
    $(".dropdown-panel-handle").hover(
      function () {
          $(".dropdown-panel-handle ul").stop(true).fadeTo("normal", 1);
      },
      function () {
          $(".dropdown-panel-handle ul").fadeTo("normal", 0);
      }
    );
});


// Countdown
(function ($) {
    $('#countdown_dashboard').countDown({
        targetDate: {
            'day': 20,
            'month': 5,
            'year': 2014,
            'hour': 0,
            'min': 0,
            'sec': 0
        },
        omitWeeks: true
    });

})(jQuery);


// Show/hide page content on click
$(document).ready(function () {
    $("#content-area").each(function () {
        $(this).find("section:lt(1)").show()
    })
})

$('.tab-container a').click(function () {
    var index = $('.tab-container a').index(this);
    $('#content-area').children().hide().eq(index).fadeIn();
    $('.tab-container').children().removeClass('active');
    $(this).addClass('active');
});


// Slider
$(document).ready(function () {
    $("#owl-slider").owlCarousel({
        navigation: true,
        pagination: true,
        items: 3,
        navigationText: false
    });
});



