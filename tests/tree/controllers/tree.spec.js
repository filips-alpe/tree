/* global describe, it, expect, beforeEach, module, inject, spyOn */
'use strict';

define(['angular-mocks', 'tree/controllers/tree'], function () {
    describe('Tree controller', function () {
        var $controller;

        beforeEach(module('tree'));

        beforeEach(inject(function (_$controller_) {
            $controller = _$controller_;
        }));

        it('is able to add a new child to a node', function () {
            var controller = $controller('TreeController');
            var node = { label: 'Foo' };

            spyOn(window, 'prompt').and.returnValue('new node');

            controller.addChild(node);

            expect(node.children.length).toBe(1);
            expect(node.children[0].label).toBe('new node');
        });

        it('is able to remove a node from an array', function () {
            var controller = $controller('TreeController');
            var nodes = [
                { label: 'Foo' },
                { label: 'Bar' }
            ];

            controller.remove(nodes, nodes[0]);

            expect(nodes.length).toBe(1);
            expect(nodes[0].label).toBe('Bar');
        });

        it('is able to change the label of a node', function () {
            var controller = $controller('TreeController');
            var node = { label: 'Foo' };

            spyOn(window, 'prompt').and.returnValue('Bar');

            controller.edit(node);

            expect(node.label).toBe('Bar');
        });
    });
});
