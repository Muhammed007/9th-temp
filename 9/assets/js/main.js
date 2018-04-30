$(document).ready(function(){  //first-tab
$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
});
$('.count').each(function () { //animate numbers
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

});


//loading-screen
$(window).on('load',function(){ 
   $("body").css("overflow","auto");
   $(".loading-overlay").fadeOut();
 });