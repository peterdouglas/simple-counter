'use strict';

/**
 * @ngdoc function
 * @name testApp.services:CounterService
 * @description
 * # MainCtrl
 * Counter service  of the frontendTestApp
 */
angular.module('testApp.services', [])
  .factory('CounterService', ['$http', function ($http) {
    function successResponse(response) {
      return {
        status: response.status,
        data: response.data
      };
    }

    function errorResponse() {
      throw errorResponse.status + " : " + errorResponse.data;

    }

    return {

      addCounter: function(name) {
        return $http.post('http://localhost:3000/api/v1/counter/', {title:name}).
          then(successResponse, errorResponse);
      },
      getAllCounters: function() {
        return $http.get('http://localhost:3000/api/v1/counters/').
          then(successResponse, errorResponse);
      },
      incCounter: function(userId) {
        return $http.post('http://localhost:3000/api/v1/counter/inc', {id:userId}).
          then(successResponse, errorResponse);
      },
      decCounter: function(userId) {
        return $http.post('http://localhost:3000/api/v1/counter/dec', {id: userId}).
          then(successResponse, errorResponse);
      },
      delCounter: function(userId) {
        console.log(userId);
        return $http.delete('http://localhost:3000/api/v1/counter/?id=' + userId).
          then(successResponse, errorResponse);
      }

  };
  }]);
