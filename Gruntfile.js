/* jshint node:true */
'use strict';

module.exports = function (grunt) {
    require('time-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: [
                'Gruntfile.js',
                'public/**/*.js',
                '!public/lib/**/*.js'
            ],
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            }
        },
        jscs: {
            all: [
                'Gruntfile.js',
                'public/**/*.js',
                '!public/lib/**/*.js'
            ],
            options: {
                config: '.jscsrc',
                reporter: require('jscs-stylish').path
            }
        },
        recess: {
            all: [
                'public/css/*'
            ]
        },
        jasmine: {
            test: {
                src: 'public/lib/requirejs/require.js',
                options: {
                    specs: 'tests/*.js',
                    template: require('grunt-template-jasmine-requirejs'),
                    templateOptions: {
                        requireConfigFile: 'public/js/require-config.js',
                        requireConfig: {
                            baseUrl: 'public'
                        }
                    }
                }
            }
        },
        less: {
            all: {
                files: {
                    'build/main.css': 'public/css/main.less'
                }
            }
        },
        watch: {
            stylesheets: {
                files: ['**/*.less'],
                tasks: ['recess', 'less'],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jscs');
    grunt.loadNpmTasks('grunt-recess');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('test', ['jasmine']);
    grunt.registerTask('codestyle', ['jshint', 'jscs', 'recess']);
    grunt.registerTask('default', ['codestyle', 'test', 'less']);
};
