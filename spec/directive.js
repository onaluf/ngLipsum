/* global describe, beforeEach, module, inject, it, expect  */
describe('ngBindLipsum', function () {
    'use strict';
    
    beforeEach(module('ngLipsum'));

    describe('directive', function () {

        it('should fallback sliently to the provided string when the motif is not recognized', inject(function($rootScope, $compile) {
            var element = angular.element('<div ng-bind-lipsum="foobar"></div>');
            $compile(element)($rootScope);
		    $rootScope.$digest();
            
            expect(element.html()).toBe('foobar');
        }));
        
        it('should return the right number of words', inject(function($rootScope, $compile) {
            var element = angular.element('<div ng-bind-lipsum="4w"></div>');
            $compile(element)($rootScope);
		    $rootScope.$digest();
            
            expect(element.html().split(' ').length).toBe(4);
        }));
        
        it('should return the right number of paragraphs', inject(function($rootScope, $compile) {
            var element = angular.element('<div ng-bind-lipsum="4p"></div>');
            $compile(element)($rootScope);
		    $rootScope.$digest();
            
            expect(element[0].querySelectorAll('p').length).toBe(4);
        }));
    });
});