'use strict';

define(['tree', 'text!tpl/tree/tree-iterative.html', 'tree/controllers/tree'], function (tree, template) {
    tree.directive('treeIterative', function () {
        return {
            template: template,
            scope: {
                nodes: '='
            },
            controller: 'TreeController',
            controllerAs: 'treeCtrl'
        };
    });
});
