'use strict';

require.config({
    baseUrl: '/',
    shim: {
        angular: {
            exports: 'angular'
        },
        'angular-mocks': {
            deps: ['angular']
        },
        'ui-bootstrap': {
            deps: ['angular']
        }
    },
    priority: ['angular'],
    paths: {
        text:                         'lib/requirejs-text/text',
        domReady:                     'lib/domReady/domReady',
        angular:                      'lib/angular/angular',
        bootstrap:                    'lib/bootstrap/dist/js/bootstrap',
        app:                          'js/app',
        tpl:                          'templates',
        'angular-mocks':              'lib/angular-mocks/angular-mocks',
        tree:                         'js/tree/tree',
        'tree/dependencies':          'js/tree/dependencies',
        'tree/directives/tree':       'js/tree/directives/tree',
        'tree/controllers/tree':      'js/tree/controllers/tree',
        'tree/controllers/tree-data': 'js/tree/controllers/tree-data',
        'tree/fixtures':              'js/tree/fixtures/fixtures',
        'ui-bootstrap':               'lib/angular-bootstrap/ui-bootstrap-tpls'
    }
});

require(['angular', 'app', 'domReady!'], function (angular) {
    angular.bootstrap(document, ['app']);
});
