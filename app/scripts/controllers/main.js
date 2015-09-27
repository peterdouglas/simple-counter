'use strict';

/**
 * @ngdoc function
 * @name testApp.controllers:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendTestApp
 */
angular.module('testApp.controllers', [])
  .controller('MainCtrl', ['CounterService', '$scope', function (counterService, $scope) {
    $scope.records = [];
    $scope.totalCount = 0;
    $scope.user = {};

    // Create a function to set the records as it is a repetitive process
    function processResponse(response) {
      if(response.status === 200 && response.data) {
        var tempNum = 0;
        $scope.user = {};
        response.data.map(function(value) {
          tempNum += parseInt(value.count);
        });
        $scope.totalCount = tempNum;
        $scope.records = response.data;
      }
    }
    counterService.getAllCounters().then(processResponse);

    $scope.addCounter = function(name) {
      counterService.addCounter(name).then(processResponse);
      };

    $scope.incCounter = function(userId) {
      counterService.incCounter(userId).then(processResponse);
    };

    $scope.decCounter = function(userId) {
      counterService.decCounter(userId).then(processResponse);
    };

    $scope.delCounter = function(userId) {
      counterService.delCounter(userId).then(processResponse);
    };

  }]);
