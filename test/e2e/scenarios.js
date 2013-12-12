'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */


describe('My Visa  App', function() {

  describe('avac list view', function() {

    beforeEach(function() {
      browser().navigateTo('../../app/index.html');
    });


    it('should filter the avac list as user types into the search box', function() {
      expect(repeater('.avacs li').count()).toBe(3);

      input('query').enter('bj');
      expect(repeater('.avacs li').count()).toBe(1);

      input('query').enter('sh');
      expect(repeater('.avacs li').count()).toBe(3);
    });
    
    
    it('should display the current filter value within an element with id "status"',
    function() {
  expect(element('#status').text()).toMatch(/Current filter: \s*$/);
 
  input('query').enter('bj');
 
  expect(element('#status').text()).toMatch(/Current filter: bj\s*$/);
 
  //alternative version of the last assertion that tests just the value of the binding
  using('#status').expect(binding('query')).toBe('bj');
});


     it('should be possible to control phone order via the drop down select box',
        function() {
      //let's narrow the dataset to make the test assertions shorter
      input('query').enter('sh');
 
      expect(repeater('.avacs li', 'avac List').column('avac.name')).
          toEqual(["北京AVAC","上海AVAC","广州AVAC"]);
      select('orderProp').option('Alphabetical');
      expect(repeater('.avacs li', 'avac List').column('avac.name')).
          toEqual(["上海AVAC","北京AVAC","广州AVAC"]);
    });
    
    
    it('should render avac specific links', function() {
      input('query').enter('bj');
      element('.avacs li a').click();
      expect(browser().location().url()).toBe('/avacs/1');
    });
  });
});