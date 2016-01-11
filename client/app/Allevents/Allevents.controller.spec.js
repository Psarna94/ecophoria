'use strict';

describe('Controller: AlleventsCtrl', function () {

  // load the controller's module
  beforeEach(module('ecophoriaApp'));

  var AlleventsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AlleventsCtrl = $controller('AlleventsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
