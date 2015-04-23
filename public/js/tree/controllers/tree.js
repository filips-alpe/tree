'use strict';

define(['tree'], function (tree) {
    tree.controller('TreeController', function () {
        this.addChild = function (node) {
            node.children = node.children || [];
            node.children.push({label: window.prompt('Label?')});
        };

        this.edit = function (node) {
            node.label = window.prompt('Label?');
        };

        this.remove = function (nodes, node) {
            nodes.splice(nodes.indexOf(node), 1);
        };
    });
});
