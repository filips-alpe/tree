'use strict';

define(['tree', 'tree/fixtures'], function (tree, fixtures) {
    tree.controller('TreeDataController', function () {
        this.structuredData = fixtures.structured;
        this.flatData = fixtures.flat;
    });
});
