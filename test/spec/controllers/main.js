'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('frontendTestApp'));

  var MainCtrl,
    counterServMock,
    retData,
    scope;

  counterServMock = {
    getAllCounters: function() {},
    addCounter: function() {},
    incCounter: function() {},
    decCounter: function() {},
    delCounter: function() {}
  };

  retData = {
    status: 200,
    data: []
  };

    // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    spyOn(counterServMock, 'getAllCounters').and.returnValue(retData);
    spyOn(counterServMock, 'addCounter').and.returnValue(retData);
    spyOn(counterServMock, 'incCounter').and.returnValue(retData);
    spyOn(counterServMock, 'decCounter').and.returnValue(retData);
    spyOn(counterServMock, 'delCounter').and.returnValue(retData);

    MainCtrl = $controller('MainCtrl', {
      CounterService: counterServMock,
      $scope: scope

    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MainCtrl.awesomeThings.length).toBe(3);
  });
});
