'use strict';

define(['lodash', 'tree', 'tree/uuid'], function (_, tree, uuid) {
    tree.controller('TreeController', function () {
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
        };

        this.edit = function (node) {
            node.label = window.prompt('Label?', node.label);
        };

        this.remove = function (nodes, node) {
            nodes.splice(nodes.indexOf(node), 1);

            nodes.forEach(_.bind(function (item) {
                if (item.parent === node.id) {
                    this.remove(nodes, node);
                }
            }, this));
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
