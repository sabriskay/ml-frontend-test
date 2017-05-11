
module.exports = function (grunt) {

    require("load-grunt-tasks")(grunt);
    grunt.initConfig({
        pkg: grunt.file.readJSON('./package.json'),
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: './',
                    src: ['main.css'],
                    dest: './dist',
                    ext: '.min.css'
                }]
            }
        },
        concat: {
            options: {
                stripBanners: true,
                banner:  '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            app: {
                src: [
                    './src/shared/scripts/chico.js', './src/carousel.js'
                ],
                dest: './dist/output.min.js'
            }
        },
        uglify: {
            target: {
                files: {
                    './dist/output.min.js': ['./dist/output.min.js']
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    './index.html': './src/template/widget.html'
                }
            }
        }
    });

    grunt.registerTask("default", ['cssmin', 'concat:app', 'uglify:target', 'htmlmin:dist']);
};