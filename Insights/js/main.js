$('site-content .tab').tab();

var speedButton = 800; //скорость появления и исчизновения кнопки Up
var speedScroll = 800; //скорость прокрутки страницы в начало

$(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('#up').fadeIn(speedButton);
        } else {
                $('#up').fadeOut(speedButton);
            }
    });
    $('#up').click(function() {
   
    $('body,html').animate({scrollTop:0},speedScroll);
   
    });
    
});