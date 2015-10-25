var budasApp = angular.module('budasApp', ['ngRoute']);
countryApp.config(function($routeProvider) {
    $routeProvider.
      when('/', {
        template: '<ul><li ng-repeat="country in countries">{{country.name}}</li><ul>',
        controller: 'IndexCtrl'
      }).
      when('/:countryName', {
        template: '<h1>TODO create country detail view</h1>',
        controller: 'TeamsCtrl'
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
