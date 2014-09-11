'use strict';

/**
 * @ngdoc overview
 * @name angularYeomanApp
 * @description
 * # angularYeomanApp
 *
 * Main module of the application.
 */
angular
  .module('angularYeomanApp', [
    'ngAnimate',
    'ngCookies',
    'ngSanitize',
    'ui.router',
    'ui.bootstrap',
    'angularMoment',
    'angular-lodash',
    'templates.app',
    'angularYeomanApp.links',
    'angularYeomanApp.main',
    'yeomanAngularApp.http'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /main
    $urlRouterProvider.otherwise('/main');
    //
    // Now set up the states
    $stateProvider
      .state('main', {
        url: '/main',
        controller: 'MainCtrl',
        templateUrl: 'main/main.tpl.html'
      })
      .state('links', {
        url: '/links',
        resolve: {
          links: function(httpLinks) {
            return httpLinks.getLinks();
          },
          otherLinks: function(httpOtherLinks) {
            return httpOtherLinks.getOtherLinks();
          }
        },
        controller: 'LinksCtrl',
        templateUrl: 'links/links.tpl.html'
      });
  })
  .run(function($rootScope, $state) {
    // Makes for easily determining what state is being shown
    $rootScope.state = $state;
  });
