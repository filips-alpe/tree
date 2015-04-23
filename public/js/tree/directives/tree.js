'use strict';

define(['tree', 'text!tpl/tree/tree.html', 'tree/controllers/tree'], function (tree, template) {
    tree.directive('tree', function ($compile) {
        return {
            template: template,
            scope: {
                nodes: '='
            },
            compile: function (element) {
                var content = element.contents().remove();
                var compiledContent;
                return {
                    post: function (scope, element) {
                        if (!compiledContent) {
                            compiledContent = $compile(content);
                        }

                        compiledContent(scope, function (clone) {
                            element.append(clone);
                        });
                    }
                };
            },
            controller: 'TreeController',
            controllerAs: 'treeCrtl'
        };
    });
});
