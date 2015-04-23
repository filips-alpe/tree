/* global describe, it, expect, beforeEach, module, inject */
'use strict';

define(['angular-mocks', 'tree/directives/tree-iterative'], function () {
    describe('Iterative tree directive', function () {
        var $compile;
        var $rootScope;

        beforeEach(module('tree'));

        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));

        it('replaces the element with a list', function () {
            var element = $compile('<tree-iterative></tree-iterative>')($rootScope);
            $rootScope.$digest();
            expect(element.html()).toContain('<ul class="tree-list-unstyled">');
        });

        it('isolates the scope', function () {
            var element = $compile('<tree-iterative></tree-iterative>')($rootScope);
            $rootScope.$digest();
            expect(element.hasClass('ng-scope')).toBe(true);
        });

        it('renders the provided nodes', function () {
            $rootScope.nodes = [{ label: 'First' }, { label: 'Second' }];
            var element = $compile('<tree-iterative nodes="nodes"></tree-iterative>')($rootScope);
            $rootScope.$digest();
            expect(element.find('li').length).toBe(2);
            expect(element.find('li').eq(0).text().trim()).toBe('First');
            expect(element.find('li').eq(1).text().trim()).toBe('Second');
        });

        it('renders the children of each node', function () {
            $rootScope.nodes = [
                {
                    id: 1,
                    label: 'First'
                },
                {
                    id: 2,
                    label: 'Second',
                    parent: 1
                },
                {
                    id: 3,
                    label: 'Third',
                    parent: 2
                },
                {
                    id: 4,
                    label: 'Fourth',
                    parent: 2
                },
                {
                    id: 5,
                    label: 'Fifth',
                    parent: 1
                }
            ];
            var element = $compile('<tree-iterative nodes="nodes"></tree-iterative>')($rootScope);
            $rootScope.$digest();
            expect(element.find('li').length).toBe(5);
            expect(element.find('.tree-level-0').length).toBe(1);
            expect(element.find('.tree-level-1').length).toBe(2);
            expect(element.find('.tree-level-2').length).toBe(2);
            expect(element.find('li').eq(2).text().trim()).toBe('Third');
        });
    });
});
