$(document).ready(function() {
    $(".draggable").draggable();
    $('.draggable').each(function(i,el){
    var this_w = $(this).width();
    var this_h = $(this).height();
    var win_w = $(window).width();
    var win_h = $(window).height();
    var w = win_w - this_w;
    var h = win_h - this_h;
    var tLeft = Math.floor(Math.random()*w), tTop  = Math.floor(Math.random()*h);
    $(el).css({position:'absolute', left: tLeft, top: tTop}); });
});
