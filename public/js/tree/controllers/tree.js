'use strict';

define(['lodash', 'tree', 'tree/uuid'], function (_, tree, uuid) {
    tree.controller('TreeController', function ($rootScope) {
        this.addChild = function (nodes, node) {
            if (!_.isArray(nodes)) {
                node = nodes;
                node.children = node.children || [];
                node.children.push({label: window.prompt('Label?')});
            } else {
                var newNode = {
                    parent: node.id,
                    label: window.prompt('Label?'),
                    id: uuid.next()
                };
                nodes.splice(nodes.indexOf(node) + 1, 0, newNode);
            }
            $rootScope.$emit('tree-data-changed');
        };

        this.edit = function (node) {
            node.label = window.prompt('Label?', node.label);
            $rootScope.$emit('tree-data-changed');
        };

        this.remove = function (nodes, node, silent) {
            nodes.splice(nodes.indexOf(node), 1);

            nodes.forEach(_.bind(function (item) {
                if (node.id && item.parent === node.id) {
                    this.remove(nodes, node, true);
                }
            }, this));
            if (!silent) {
                $rootScope.$emit('tree-data-changed');
            }
        };

        this.getDepth = function (nodes, node) {
            var depth = 0;
            var parentId = node.parent;
            while (parentId) {
                var parent = _.findWhere(nodes, { id: parentId });
                parentId = parent ? parent.parent : null;
                depth++;
            }

            return depth;
        };
    });
});
