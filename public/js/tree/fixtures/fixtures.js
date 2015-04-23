'use strict';

define(function () {
    var currentId = 0;
    var getId = function () {
        return ++currentId;
    };

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
            for (var i = childrenPerLevel; i > 0; i--) {
                children.push(generateTree(maxDepth, childrenPerLevel, currentDepth));
            }
        }

        return {
            id:       getId(),
            label:    getRandomLabel(),
            children: children
        };
    };

    var flattenNode = function (node, parent) {
        return {
            id: node.id,
            label: node.label,
            parent: null === parent ? null : parent.id,
            root: null === parent
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
        'structured': [
            generateTree(3, 2),
            generateTree(2, 3),
            generateTree(1, 2)
        ],
        'flat': flattenTree([
            generateTree(3, 2),
            generateTree(2, 3),
            generateTree(1, 2)
        ])
    };
});
