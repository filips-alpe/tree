'use strict';

define(['angular', 'ui-bootstrap', 'angular-localstorage'], function (angular) {
    var module = angular.module('tree', ['ui.bootstrap', 'LocalStorageModule']);

    module.config(function (localStorageServiceProvider) {
        localStorageServiceProvider.setPrefix('tree');
    });

    return module;
});
