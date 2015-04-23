/* global describe, it, expect, beforeEach, module, inject */
'use strict';

define(['angular-mocks', 'tree/directives/tree'], function () {
    describe('Tree directive', function () {
        var $compile;
        var $rootScope;

        beforeEach(module('tree'));

        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));

        it('replaces the element with a list', function () {
            var element = $compile('<tree></tree>')($rootScope);
            $rootScope.$digest();
            expect(element.html()).toContain('<ul class="tree-list-unstyled ng-scope">');
        });

        it('isolates the scope', function () {
            var element = $compile('<tree></tree>')($rootScope);
            $rootScope.$digest();
            expect(element.hasClass('ng-scope')).toBe(true);
        });

        it('renders the provided nodes', function () {
            $rootScope.nodes = [{ label: 'First' }, { label: 'Second' }];
            var element = $compile('<tree nodes="nodes"></tree>')($rootScope);
            $rootScope.$digest();
            expect(element.find('li').length).toBe(2);
            expect(element.find('li').eq(0).text().trim()).toBe('First');
            expect(element.find('li').eq(1).text().trim()).toBe('Second');
        });

        it('renders the children of each node', function () {
            $rootScope.nodes = [
                {
                    label: 'First',
                    children: [
                        {
                            label: 'First child',
                            children: [
                                { label: 'A' },
                                { label: 'B' },
                                { label: 'C' }
                            ]
                        },
                        {
                            label: 'Second child'
                        }
                    ]
                },
                {
                    label: 'Second'
                }
            ];
            var element = $compile('<tree nodes="nodes"></tree>')($rootScope);
            $rootScope.$digest();
            expect(element.find('li').length).toBe(7);
            expect(element.find('ul').length).toBe(3);
            expect(element.find('li').eq(2).text().trim()).toBe('A');
        });
    });
});
