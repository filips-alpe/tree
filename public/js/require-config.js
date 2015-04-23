'use strict';

require.config({
    baseUrl: '/',
    shim: {
        angular: {
            exports: 'angular'
        }
    },
    priority: ['angular'],
    paths: {
        text:      'lib/requirejs-text/text',
        domReady:  'lib/domReady/domReady',
        angular:   'lib/angular/angular',
        bootstrap: 'lib/bootstrap/dist/js/bootstrap',
        app:       'js/app'
    }
});

require(['angular', 'app', 'domReady!'], function (angular) {
    angular.bootstrap(document, ['app']);
});
