// enable smooth scrolling to section on page when clicked on link

$(document).ready(function() {
 $('a').on('click', function(e) {

    e.preventDefault();

    var scrollTo = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(scrollTo).offset().top - $('nav').outerHeight()
    }, 800);
});


// counter animation

$('.cijfer').each(function() {
  var $this = $(this),
  countTo = $this.attr('data-count');

  $({ countNum: $this.text()}).animate({
    countNum: countTo
},

{
    duration: 4000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
  },
  complete: function() {
      $this.text(this.countNum);
  }

});  

});



});




