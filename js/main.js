$(document).ready(function(){
    $('.hamburger-menu').click(function(event){
        event.stopPropagation();
        if ($('main').hasClass('active')) {
            $('main').removeClass('active');
        } else {
            $('main').addClass('active');
        }
    });
});

$(`#blog`).waypoint(function(direction){
    if (direction == 'down') {
        $(`header`).addClass('sticky');
    } else {
        $(`header`).removeClass('sticky');
    }
});