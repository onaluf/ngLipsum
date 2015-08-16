/* global describe, beforeEach, module, inject, it, expect  */
describe('ngLipsum', function () {
    'use strict';
    
    var ngLipsum, $scope;
    beforeEach(module('ngLipsum'));
    beforeEach(inject(function (_ngLipsum_) {
        ngLipsum = _ngLipsum_;
    }));
    beforeEach(inject(function ($rootScope) {
        $scope = $rootScope;
    }));

    describe('get', function () {

        it('should fallback sliently to the provided string when the motif is not recognized', function () {
            expect(ngLipsum.get('foobar')).toBe('foobar');
        });
        
        it('should return the right number of words', function () {
            expect(ngLipsum.get('4w').split(' ').length).toBe(4);
        });
        
        it('should generate captialized words', function () {
            var word = ngLipsum.get('1W');
            var firstChar = word.charAt(0);
            
            expect(firstChar.toUpperCase()).toBe(firstChar);
        });
        
        it('should generate sentences begingin with a capital letter and ending with a dot', function () {
            var sentence = ngLipsum.get('1s');
            var firstChar = sentence.charAt(0);
            var lastChar = sentence.charAt(sentence.length - 1);
            
            expect(firstChar.toUpperCase()).toBe(firstChar);
            expect(lastChar).toBe('.');
        });
        
        it('should generate an array with the right values', function () {
            var generated = ngLipsum.get(['1w', 5]);
            
            expect(generated.length).toBe(5);
        });
        
        it('should generate a litteral object with the right values', function () {
            var obj = {
                a: 'wrong',
                b: '1w',
                c: {
                    d: '2w'
                }
            };
            
            var generated = ngLipsum.get(obj);
            
            expect(generated.a).toBe('wrong');
            expect(generated.b).not.toBe('1w');
            expect(generated.c.d).not.toBe('2w');
            expect(generated.c.d.split(' ').length).toBe(2);
        });
        
        it('should generate object literal when inside arrays', function () {
            var generated = ngLipsum.get([{a: '2w'}, 5]);
            
            expect(generated.length).toBe(5);
            expect(generated[4].a.split(' ').length).toBe(2);
        });
        
        it('should generate arrays when object literal', function () {
            var generated = ngLipsum.get({a: ['2w', 5]});
            
            expect(generated.a).not.toBe(undefined);
            expect(generated.a.length).toBe(5);
        });
    });
    
    describe('getPromise', function () {
        
        it('should allways succeed by default', function() {
            var success;
            var text;
            ngLipsum.getPromise('foobar').then(function (reponse) {
                success = true;
                text = reponse;
            }, function (reponse) {
                success = false;
                text = reponse;
            });
            $scope.$digest();
            
            expect(success).toBe(true);
            expect(text).toBe('foobar');
        });
        
        it('should allways succeed when asked to', function() {
            var success;
            var text;
            ngLipsum.getPromise('foobar', 0).then(function (reponse) {
                success = true;
                text = reponse;
            }, function (reponse) {
                success = false;
                text = reponse;
            });
            $scope.$digest();
            
            expect(success).toBe(true);
            expect(text).toBe('foobar');
        });
        
        it('should allways fail when asked to', function() {
            var success;
            var text;
            ngLipsum.getPromise('foobar', 1).then(function (reponse) {
                success = true;
                text = reponse;
            }, function (reponse) {
                success = false;
                text = reponse;
            });
            $scope.$digest();
            
            expect(success).toBe(false);
            expect(text).toBe('Random Failure!');
        });
    });
});