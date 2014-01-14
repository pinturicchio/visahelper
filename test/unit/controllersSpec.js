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
  
  
  
  
   describe('AvacDetailCtrl', function(){
    var scope, $httpBackend, ctrl;
 
    beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('files/beijing.json').respond({regions:["北京","黑龙江","吉林","辽宁","天津","山东","河北","内蒙古","山西","河南","宁夏","陕西","四川","重庆","甘肃","青海","新疆","西藏"]});
 
      $routeParams.avacPinyin = 'shanghai';
      scope = $rootScope.$new();
      ctrl = $controller('AvacDetailCtrl', {$scope: scope});
    }));
 
 
    it('should fetch phone detail', function() {
      expect(scope.phone).toBeUndefined();
      $httpBackend.flush();
 
      expect(scope.phone).toEqual({name:'phone xyz'});
    });
  });
  
  
});

      