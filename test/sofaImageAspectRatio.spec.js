'use strict';

describe('sofa.imageAspectRatio', function () {

    var element, $compile, $rootScope, Event = window.Event;

    beforeEach(module('sofa.imageAspectRatio'));

    beforeEach(inject(function (_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('should fire the orientation change event', function (done) {
        $rootScope.$on('sofaImageAspectRatio.orientationChange', function() {
            done();
        });
        element = $compile('<div sofa-image-aspect-ratio></div>')($rootScope);
        $rootScope.$digest();

        window.dispatchEvent(new Event('orientationchange'));
    });

    it('should apply the landscape styles', function () {
        element = $compile('<div sofa-image-aspect-ratio></div>')($rootScope);
        $rootScope.$digest();
        
        expect(element.css('max-height')).toEqual('100%');
        expect(element.css('max-width')).toEqual('none');
    });

    it('should apply the portrait styles', function () {
        window.innerHeight = 380;
        window.innerWidth = 240;
        element = $compile('<div sofa-image-aspect-ratio></div>')($rootScope);
        $rootScope.$digest();
        
        expect(element.css('max-height')).toEqual('none');
        expect(element.css('max-width')).toEqual('100%');
    });


    it('should apply the styles on orientation change', function () {
        element = $compile('<div sofa-image-aspect-ratio></div>')($rootScope);
        $rootScope.$digest();

        window.innerHeight = 380;
        window.innerWidth = 240;

        window.dispatchEvent(new Event('orientationchange'));
        
        expect(element.css('max-height')).toEqual('none');
        expect(element.css('max-width')).toEqual('100%');
    });
});
