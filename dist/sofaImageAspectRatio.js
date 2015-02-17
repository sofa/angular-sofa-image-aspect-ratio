/**
 * angular-sofa-image-aspect-ratio - v0.1.0 - Tue Feb 17 2015 12:00:22 GMT+0100 (CET)
 * http://www.sofa.io
 *
 * Copyright (c) 2014 CouchCommerce GmbH (http://www.couchcommerce.com / http://www.sofa.io) and other contributors
 * THIS SOFTWARE CONTAINS COMPONENTS OF THE SOFA.IO COUCHCOMMERCE SDK (WWW.SOFA.IO)
 * IT IS PROVIDED UNDER THE LICENSE TERMS OF THE ATTACHED LICENSE.TXT.
 */
;(function (angular) {
angular.module('sofa.imageAspectRatio', [
        'sofa.deviceService',
        'sofa.rootScopeDecorator'
    ])

    .directive('sofaImageAspectRatio', ["$window", "$rootScope", "deviceService", function ($window, $rootScope, deviceService) {

        'use strict';
        
        $window.addEventListener('orientationchange', function () {
            $rootScope.$emit('sofaImageAspectRatio.orientationChange');
        }, false);

        return {
            restrict: 'A',
            link: function ($scope, $element) {
                var el = $element[0];

                var setStyles = function () {
                    if (deviceService.isInPortraitMode()) {
                        el.style.maxWidth  = '100%';
                        el.style.maxHeight = 'none';
                    } else {
                        el.style.maxWidth  = 'none';
                        el.style.maxHeight = '100%';
                    }
                };

                setStyles();

                $scope.$onRootScope('sofaImageAspectRatio.orientationChange', setStyles);
            }
        };
    }]);
}(angular));
