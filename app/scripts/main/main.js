'use strict';

/**
 * @ngdoc function
 * @name angularYeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the main.tpl.html template
 */
angular.module('angularYeomanApp.main', [])
  .controller('MainCtrl', function ($scope) {

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.tooltips = {
      angular: 'Angular',
      boilerPlate: 'HTML5 Boilerplate',
      uiBootstrap: 'UI bootstrap',
      karma: 'Karma',
      lodash: 'angular-lodash',
      moment: 'angular-moment'
    };

    $scope.momentMessage = {
      time: new Date()
    };

    $scope.radioModel = 'Middle';
  });
