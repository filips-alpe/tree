'use strict';

define(['tree/uuid'], function (uuid) {
    var getRandomLabel = function () {
        var names = ['Celine', 'Joeann', 'Jalisa', 'Towanda', 'Dillon', 'Erich', 'Alethia', 'Fabian', 'Rubin'];
        var lastNames = ['Valadez', 'Sledge', 'Forsyth', 'Barney', 'Beasley', 'Schilling', 'Rains', 'Crockett'];

        return [
            names[Math.floor(Math.random() * names.length)],
            lastNames[Math.floor(Math.random() * lastNames.length)]
        ].join(' ');
    };
    var generateTree = function (maxDepth, childrenPerLevel, currentDepth) {
        currentDepth = currentDepth ? currentDepth + 1 : 1;
        var children = [];
        if (maxDepth > currentDepth) {
            for (var i = childrenPerLevel; i >= 0; i--) {
                children.push(generateTree(maxDepth, childrenPerLevel, currentDepth));
            }
        }

        return {
            id:       uuid.next(),
            label:    getRandomLabel(),
            children: children
        };
    };

    var flattenNode = function (node, parent) {
        return {
            id: node.id,
            label: node.label,
            parent: null === parent ? null : parent.id
        };
    };

    var flattenTree = function (tree, parent, result) {
        parent = parent || null;
        result = result || [];
        tree.forEach(function (node) {
            result.push(flattenNode(node, parent));
            flattenTree(node.children, node, result);
        });

        return result;
    };

    return {
        structured: function () {
            return [
                generateTree(3, 2),
                generateTree(2, 3),
                generateTree(1, 2)
            ];
        },
        flat: function () {
            return flattenTree([
                generateTree(2, 3),
                generateTree(3, 2),
                generateTree(1, 2)
            ]);
        }
    };
});
