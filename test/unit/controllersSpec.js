'use strict';

/* jasmine specs for controllers go here */

describe('ACAC controllers', function() {
 
    describe('VisaHelperCtrl', function(){
         var scope, ctrl, $httpBackend;
         
     beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('files/avac.json').
          respond([{name: '北京AVAC'}, {name: '上海AVAC'}]);

      scope = $rootScope.$new();
      ctrl = $controller('VisaHelperCtrl', {$scope: scope});
    }));


    it('should create "avacs" model with 3 phones fetched from xhr', function() {
      expect(scope.avacs).toBeUndefined();
      $httpBackend.flush();

      expect(scope.avacs).toEqual([{name: '北京AVAC'},
                                   {name: '上海AVAC'}]);
    });


    it('should set the default value of orderProp model', function() {
      expect(scope.orderProp).toBe('postcode');
    });
  });
});

      