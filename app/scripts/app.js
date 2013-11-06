'use strict';

angular.module('movieMapApp', ['ngRoute', 'ui.router', 'leaflet-directive', 'angularSpinner', 'ngSanitize', 'geolocation', 'restangular'])
  .config(['$routeProvider', '$locationProvider', '$httpProvider', '$stateProvider', '$urlRouterProvider', function ($routeProvider, $locationProvider, $httpProvider, $stateProvider, $urlRouterProvider) {
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $stateProvider
      .state('main', {
        templateUrl: "views/main.html",
        controller: 'MainCtrl',
        url: "/app"
      })
      .state('main.map', {
        templateUrl: "views/main.map.html",
        controller: 'MapCtrl',
        url: "/map/:lat/:lng/:name"
      })
      .state('main.map.movies', {
        templateUrl: "views/main.map.movies.html",
        controller: 'MoviesCtrl',
        url: "/:id"
      });

    $urlRouterProvider
      .when("/", "/app")
      .otherwise("/app");

    $locationProvider.html5Mode(true);
  }]).
  run(function($rootScope) {
    $rootScope.spinnerOpts = {
      lines: 13, // The number of lines to draw
      length: 20, // The length of each line
      width: 10, // The line thickness
      radius: 30, // The radius of the inner circle
      corners: 1, // Corner roundness (0..1)
      rotate: 0, // The rotation offset
      direction: 1, // 1: clockwise, -1: counterclockwise
      color: '#000', // #rgb or #rrggbb or array of colors
      speed: 1, // Rounds per second
      trail: 60, // Afterglow percentage
      shadow: false, // Whether to render a shadow
      hwaccel: false, // Whether to use hardware acceleration
      className: 'spinner', // The CSS class to assign to the spinner
      zIndex: 2e9, // The z-index (defaults to 2000000000)
      top: 'auto', // Top position relative to parent in px
      left: 'auto' // Left position relative to parent in px
    };
  });
