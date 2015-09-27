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
    data: [{id: 1, title: "Peter", count: 0}]
  };

    // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $q) {
    scope = $rootScope.$new();

    var def = $q.defer();

    def.resolve(retData);

    spyOn(counterServMock, 'getAllCounters').and.returnValue(def.promise);
    spyOn(counterServMock, 'addCounter').and.returnValue(def.promise);
    spyOn(counterServMock, 'incCounter').and.returnValue(def.promise);
    spyOn(counterServMock, 'decCounter').and.returnValue(def.promise);
    spyOn(counterServMock, 'delCounter').and.returnValue(def.promise);

    MainCtrl = $controller('MainCtrl', {
      CounterService: counterServMock,
      $scope: scope

    });
    scope.$digest();
  }));

  it('should call getAllCounters on load and populate array', function () {
    // ensure that the page load has trigger the first db call and populated the data
    expect(counterServMock.getAllCounters).toHaveBeenCalled();
    expect(scope.records).toEqual([{id: 1, title: "Peter", count: 0}]);

    // ensure that none of the other services have been called
    expect(counterServMock.addCounter).not.toHaveBeenCalled();
    expect(counterServMock.incCounter).not.toHaveBeenCalled();
    expect(counterServMock.decCounter).not.toHaveBeenCalled();
    expect(counterServMock.delCounter).not.toHaveBeenCalled();
  });

  it('should call addCounter service and populate array with returned data when correct details are passed through', function () {
    // Call the addCounter service with a new name
    scope.addCounter("Peter");
    scope.$digest();

    // page load should still have called the initial data
    expect(counterServMock.getAllCounters).toHaveBeenCalled();
    expect(counterServMock.addCounter).toHaveBeenCalledWith("Peter");
    expect(scope.records).toEqual([{id: 1, title: "Peter", count: 0}]);


    expect(counterServMock.incCounter).not.toHaveBeenCalled();
    expect(counterServMock.decCounter).not.toHaveBeenCalled();
    expect(counterServMock.delCounter).not.toHaveBeenCalled();
  });

  it('should call incCounter service and populate array with returned data when correct details are passed through', function () {
    // Call the incCounter service with the id
    scope.incCounter("asdw");
    scope.$digest();

    // page load should still have called the initial data
    expect(counterServMock.getAllCounters).toHaveBeenCalled();
    expect(counterServMock.incCounter).toHaveBeenCalledWith("asdw");
    expect(scope.records).toEqual([{id: 1, title: "Peter", count: 0}]);


    expect(counterServMock.addCounter).not.toHaveBeenCalled();
    expect(counterServMock.decCounter).not.toHaveBeenCalled();
    expect(counterServMock.delCounter).not.toHaveBeenCalled();
  });

  it('should call decCounter service and populate array with returned data when correct details are passed through', function () {
    // Call the decCounter service with the id
    scope.decCounter("asdw");
    scope.$digest();

    // page load should still have called the initial data
    expect(counterServMock.getAllCounters).toHaveBeenCalled();
    expect(counterServMock.decCounter).toHaveBeenCalledWith("asdw");
    expect(scope.records).toEqual([{id: 1, title: "Peter", count: 0}]);


    expect(counterServMock.addCounter).not.toHaveBeenCalled();
    expect(counterServMock.incCounter).not.toHaveBeenCalled();
    expect(counterServMock.delCounter).not.toHaveBeenCalled();
  });

  it('should call delCounter service and populate array with returned data when correct details are passed through', function () {
    // Call the incCounter service with the id
    scope.delCounter("asdw");
    scope.$digest();

    // page load should still have called the initial data
    expect(counterServMock.getAllCounters).toHaveBeenCalled();
    expect(counterServMock.delCounter).toHaveBeenCalledWith("asdw");
    expect(scope.records).toEqual([{id: 1, title: "Peter", count: 0}]);


    expect(counterServMock.addCounter).not.toHaveBeenCalled();
    expect(counterServMock.decCounter).not.toHaveBeenCalled();
    expect(counterServMock.incCounter).not.toHaveBeenCalled();
  });


});
