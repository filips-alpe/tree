'use strict';

define(['lodash', 'tree', 'tree/fixtures'], function (_, tree, fixtures) {
    tree.controller('TreeDataController', function ($scope, localStorageService, $rootScope) {
        this.structuredData = localStorageService.get('structured') || fixtures.structured();
        this.flatData = localStorageService.get('flat') || fixtures.flat();

        $rootScope.$on('tree-data-changed', _.bind(function () {
            localStorageService.set('structured', this.structuredData);
            localStorageService.set('flat', this.flatData);
        }, this));

        this.resetData = function () {
            localStorageService.clearAll();
            window.location.reload(true);
        };
    });
});
