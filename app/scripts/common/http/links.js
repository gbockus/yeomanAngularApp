'use strict';
angular.module('http.links', [])

/**
 * Service used to access all links.
 */
  .factory('httpLinks', function($http) {

    /**
     * Get the links json for modules used in this application
     *
     * @returns {promise} A promise that when resolved to the object with link data.
     */
    var getLinks = function() {
      return $http({
        method: 'GET',
        url: 'data/links.json'
      })
        .then(function(res) {
          return res.data;
        });
    };

    return {
      getLinks: getLinks
    };
  });