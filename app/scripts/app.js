'use strict';

angular.module('movieMapApp', ['ngRoute', 'ngStorage', 'ngAnimate', 'ui.router', 'leaflet-directive', 'angularSpinner', 'ngSanitize', 'geolocation', 'restangular'])
  .config(['$routeProvider', '$locationProvider', '$httpProvider', '$stateProvider', '$urlRouterProvider', function ($routeProvider, $locationProvider, $httpProvider, $stateProvider) {
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
        url: "^/map/:lat/:lng/:name"
      })
      .state('main.map.movies', {
        templateUrl: "views/main.map.movies.html",
        controller: 'MoviesCtrl',
        url: "/"
      })
      .state('samples', {
        templateUrl: "views/samples/samples.html",
        url: "/samples"
      })
      .state('samples.hitcounter', {
        templateUrl: "views/samples/samples.hitcounter.html",
        url: "/hitcounter"
      })
      .state('samples.xmlhr', {
        templateUrl: "views/samples/samples.xmlhr.html",
        url: "/xmlhr"
      });

    $locationProvider.html5Mode(true);
  }]);
