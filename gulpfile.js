require('shared-sofa-component-tasks')(require('gulp'), {
    pkg: require('./package.json'),
    baseDir: __dirname,
    testDependencyFiles: [
        'node_modules/sofa-device-service/dist/sofaDeviceService.js',
        'node_modules/sofa-device-service/dist/sofaDeviceService.angular.js',
        'node_modules/angular-sofa-rootscope-decorator/dist/sofaRootscopeDecorator.js'
    ]
});
