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
    var vm = this;

    vm.records = [];
    vm.totalCount = 0;

    // Create a function to set the records as it is a repetitive process
    function processResponse(response) {
      if(response.status === 200 && response.data) {
        var tempNum = 0;
        vm.user = {};
        response.data.map(function(value) {
          tempNum += parseInt(value.count);
        });
        vm.totalCount = tempNum;
        vm.records = response.data;
      }
    }
    counterService.getAllCounters().then(processResponse);

    vm.addCounter = function(name) {
      counterService.addCounter(name).then(processResponse);
      };

    vm.incCounter = function(userId) {
      counterService.incCounter(userId).then(processResponse);
    };

    vm.decCounter = function(userId) {
      counterService.decCounter(userId).then(processResponse);
    };

    vm.delCounter = function(userId) {
      counterService.delCounter(userId).then(processResponse);
    };

  }]);
