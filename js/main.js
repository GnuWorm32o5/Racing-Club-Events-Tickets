$(document).ready(function(){
// Sticky Nav
    $('#blog').waypoint(function(direction){
        if (direction == 'down') {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }
    });

});