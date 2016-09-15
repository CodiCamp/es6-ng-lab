module.exports = function(grunt) {

    var directories = {
        dev: "dev",
        dist: "dist",
        entryPoint: "src/app/modules/app.module.js"
    };

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        connect: {
            dev: {
                options: {
                    port: 8080,
                    hostname: "localhost",
                    base: directories.dev
                }
            },

            dist: {
                options: {
                    port: 8000,
                    hostname: "localhost",
                    base: directories.dist,
                    keepalive: true
                }
            }
        },

        browserify: {
            clientDev: {
                src: [directories.entryPoint],
                dest: directories.dev + '/app/modules/app.min.js',
                options: {
                    browserifyOptions: {
                        debug: true //source map is available at app.min.js, use  grunt-extract-sourcemap in case you want to extract it
                    },
                    transform: [
                        ["babelify", {
                            presets: ["es2015"]
                        }],
                        ["stringify", {
                            appliesTo: { includeExtensions: ['.html'] }
                        }]
                    ],
                    watch: true,
                    external: ['angular', 'angular-ui-router', 'ngStorage', 'ngNotify']
                },
            },

            vendorDev: {
                require: ['ng-notifications-bar'],
                options: {
                    alias: {
                        'angular': './bower_components/angular/angular.js',
                        'angular-ui-router': './bower_components/angular-ui-router/release/angular-ui-router.min.js',
                        'ngStorage': './bower_components/ngstorage/ngStorage.js',
                        'ngNotify': './bower_components/ng-notify/dist/ng-notify.min.js'
                    }
                },
                src: [],
                dest: directories.dev + '/app/modules/vendor.min.js'
            },

            clientDist: {
                src: [directories.entryPoint],
                dest: directories.dist + '/app/modules/app.min.js',
                options: {
                    browserifyOptions: {
                        debug: false
                    },
                    transform: [
                        ["babelify", {
                            presets: ["es2015"]
                        }],
                        ["stringify", {
                            appliesTo: { includeExtensions: ['.html'] }
                        }]
                    ],
                    watch: false,
                    keepAlive: false,
                    external: ['angular', 'angular-ui-router', 'ngStorage', 'ngNotify']

                },
            },

            vendorDist: {
                options: {
                    alias: {
                        'angular': './bower_components/angular/angular.min.js',
                        'angular-ui-router': './bower_components/angular-ui-router/release/angular-ui-router.min.js',
                        'ngStorage': './bower_components/ngstorage/ngStorage.min.js',
                        'ngNotify': './bower_components/ng-notify/dist/ng-notify.min.js'
                    }
                },
                src: [],
                dest: directories.dist + '/app/modules/vendor.min.js'
            }
        },

        watch: {
            html: {
                files: ['src/index.html'],
                tasks: ['copy:htmlDev']
            },

            less: {
                files: ['src/styles/*less'],
                tasks: ['less:dev']
            }
        },

        clean: {

            dev: {
                src: [directories.dev + '/**']
            },

            dist: {
                src: [directories.dist + '/**']
            }

        },

        less: {
            dev: {
                options: {
                    paths: ["src/styles"],
                    plugins: [
                        new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]}),
                    ],
                    compress: false,
                    sourceMap: true,
                    sourceMapFileInline: true
                },
                files: {
                    'dev/styles/main.css': 'src/styles/main.less'
                }
            },

            dist: {
                options: {
                    paths: ["src/styles"],
                    plugins: [
                        new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]}),
                    ],
                    compress: true,
                    sourceMap: false
                },
                files: {
                    'dist/styles/main.css': 'src/styles/main.less'
                }
            }
        },

        copy: {

            htmlDev: {
                files: [
                    {
                        expand: true,
                        cwd: 'src',
                        src: ["index.html"],
                        dest: directories.dev
                    }
                ]
            },

            faviconDev: {
                files: [
                    {
                        expand: true,
                        cwd: 'src',
                        src: ["favicon.ico"],
                        dest: directories.dev
                    }
                ]
            },

            mockDataDev: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/mock-data',
                        src: ["**"],
                        dest: directories.dev + '/mock-data'
                    }
                ]
            },

            htmlDist: {
                files: [
                    {
                        expand: true,
                        cwd: 'src',
                        src: ["index.html"],
                        dest: directories.dist
                    }
                ]
            },

            faviconDist: {
                files: [
                    {
                        expand: true,
                        cwd: 'src',
                        src: ["favicon.ico"],
                        dest: directories.dist
                    }
                ]
            },

            mockDataDist: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/mock-data',
                        src: ["**"],
                        dest: directories.dist + '/mock-data'
                    }
                ]
            },
        }

    });

    grunt.event.on('watch', function(action, filepath, target) {
        grunt.log.writeln(target + ': ' + filepath + ' has ' + action);

        // simple way to modify grunt params on event watch
        // grunt.config('copy.htmlDev.files[0].src', filepath);
    });

    grunt.registerTask("dev", [
        "clean:dev",
        "copy:htmlDev",
        "copy:faviconDev",
        "copy:mockDataDev",
        "less:dev",
        "connect:dev",
        "browserify:vendorDev",
        "browserify:clientDev",
        "watch"
    ]);

    grunt.registerTask("dist", [
        "clean:dist",
        "copy:htmlDist",
        "copy:faviconDist",
        "copy:mockDataDist",
        "less:dist",
        "browserify:vendorDist",
        "browserify:clientDist",
        "connect:dist"
    ]);
};
