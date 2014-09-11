'use strict';
angular.module('http.other', [])

/**
 * Service used to access all other links.
 */
  .factory('httpOtherLinks', function($http) {

    /**
     * Get the other links json for modules used in this application
     *
     * @returns {promise} A promise that when resolved to the object with link data.
     */
    var getOtherLinks = function() {
      return $http({
        method: 'GET',
        url: 'data/otherLinks.json'
      })
        .then(function(res) {
          return res.data;
        });
    };

    return {
      getOtherLinks: getOtherLinks
    };
  });