'use strict';

describe('Service: ControllerService', function () {

  // load the service's module
  beforeEach(module('frontendTestApp'));

  var service,
    retData,
    $httpBackend;

  retData = {
    status: 200,
    data: [{id: 1, title: "Peter", count: 0}]
  };

    // Initialize the service and mock the backend
  beforeEach(inject(function (CounterService, _$httpBackend_) {
    service = CounterService;
    $httpBackend = _$httpBackend_;

  }));

  it('should invoke addCounter service with correct parameters', function () {
    $httpBackend.expectPOST('/api/v1/counter/', {title: "Peter"}).respond(200, retData);
    service.addCounter("Peter");

    $httpBackend.flush();

  });

  it('should invoke incCounter service with correct parameters', function () {
    $httpBackend.expectPOST('/api/v1/counter/inc', {id: "asdw"}).respond(200, retData);
    service.incCounter("asdw");

    $httpBackend.flush();

  });

  it('should invoke decCounter service with correct parameters', function () {
    $httpBackend.expectPOST('/api/v1/counter/dec', {id: "asdw"}).respond(200, retData);
    service.decCounter("asdw");

    $httpBackend.flush();

  });

  it('should invoke delCounter service with correct parameters', function () {
    $httpBackend.expectDELETE('/api/v1/counter/?id=asdw').respond(200, retData);
    service.delCounter("asdw");

    $httpBackend.flush();

  });
});
