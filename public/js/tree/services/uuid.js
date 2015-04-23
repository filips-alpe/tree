'use strict';

define(function () {
    var currentId = 0;

    return {
        next: function () {
            return ++currentId;
        }
    };
});
