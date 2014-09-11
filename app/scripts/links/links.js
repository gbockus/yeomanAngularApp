'use strict';

/**
 * @ngdoc function
 * @name angularYeomanApp.controller:LinksCtrl
 * @description
 * # LinksCtrl
 * Controller of the links.tpl.html template
 */
angular.module('angularYeomanApp.links', [])
  .controller('LinksCtrl', function ($scope, links, otherLinks) {
    $scope.links = links;
    $scope.otherLinks= otherLinks;
  });

