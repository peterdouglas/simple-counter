'use strict';

/**
 * @ngdoc function
 * @name testApp.controllers:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendTestApp
 */
angular.module('testApp.controllers', [])
  .controller('MainCtrl', ['CounterService', function (counterService) {

    this.addCounter = function() {
        counterService.addCounter();
      };

  }]);
