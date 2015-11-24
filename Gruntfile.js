module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            js: ['library/js/min/*-min.js'],
            css: ['library/css/*.css*']
        },
        sass: {
            dist: {
                files: {
                    'library/css/style.css' : 'library/scss/style.scss'
                }
            }
        },
        watch: {
            css: {
                files: 'library/scss/**/*.scss',
                tasks: ['sass']
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'library/js/scripts.js',
                dest: 'library/js/min/scripts-min.js'
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'library/css',
                    src: 'style.css',
                    dest: 'library/css'
                }]
            }
        },
        autoprefixer: {
            options: {
                browsers: [
                    'Android 2.3',
                    'Android >= 4',
                    'Chrome >= 20',
                    'Firefox >= 24', // Firefox 24 is the latest ESR
                    'Explorer >= 8',
                    'iOS >= 6',
                    'Opera >= 12',
                    'Safari >= 6'
                ]
            },
            build: {
                expand: true,
                cwd: 'library/css',
                src: '*.css',
                dest: 'library/css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['clean', 'sass', 'autoprefixer', 'uglify', 'cssmin']);
};
