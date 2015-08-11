angular.module('ngLipsum').directive('ngBindLipsum', function(ngLipsum) {
    'use strict';
    
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            attrs.$observe('ngBindLipsum', function(motif) {
                element.html(ngLipsum.get(motif));
            });
        }
    };
});