'use strict';

require.config({
    baseUrl: '/',
    shim: {
        angular: {
            deps: ['jquery'],
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
        text:                             'lib/requirejs-text/text',
        domReady:                         'lib/domReady/domReady',
        jquery:                           'lib/jquery/dist/jquery',
        angular:                          'lib/angular/angular',
        bootstrap:                        'lib/bootstrap/dist/js/bootstrap',
        app:                              'js/app',
        tpl:                              'templates',
        'angular-mocks':                  'lib/angular-mocks/angular-mocks',
        tree:                             'js/tree/tree',
        'tree/dependencies':              'js/tree/dependencies',
        'tree/directives/tree':           'js/tree/directives/tree',
        'tree/directives/tree-iterative': 'js/tree/directives/tree-iterative',
        'tree/controllers/tree':          'js/tree/controllers/tree',
        'tree/controllers/tree-data':     'js/tree/controllers/tree-data',
        'tree/uuid':                      'js/tree/services/uuid',
        'tree/fixtures':                  'js/tree/fixtures/fixtures',
        'ui-bootstrap':                   'lib/angular-bootstrap/ui-bootstrap-tpls',
        lodash:                           'lib/lodash/lodash'
    }
});

require(['angular', 'app', 'domReady!'], function (angular) {
    angular.bootstrap(document, ['app']);
});
