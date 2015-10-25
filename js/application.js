var budasApp = angular.module('budasApp', ['ngRoute']);
countryApp.config(function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'index.part.html',
      }).
      when('/team', {
        templateUrl: 'teams.part.html',
      }).
      otherwise({
        redirectTo: '/'
      });
  });
// The nice scroller
$(function() {
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
});
