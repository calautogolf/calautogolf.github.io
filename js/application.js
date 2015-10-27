
// The nice scroller
scroller = function scroller() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
      }
  });
}
$(document).ready(function(){
    scroller();
    $('.exercise').click(function(){
        $(this).find('.solution').slideToggle();
    });
})

//solution reveal
