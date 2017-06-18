/**
 * Created by Alex on 18.06.2017.
 */

module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            my_target: {
                files: {
                    'build/js/app/flight-booking.min.js': ['build/js/app/flight-booking.js']
                }
            }
        },
        concat: {
             vendor: {
                     src: ['node_modules/angular/angular.js','node_modules/@uirouter/angularjs/release/angular-ui-router.js'],
                     dest: 'build/js/app/vendor.js'
             },
             app: {
                    src: ['app/**/*.module.js', 'app/modules/routes/router.js', 'app/**/*.controller.js','app/**/*.component.js'],
                    dest: 'build/js/app/flight-booking.js'
            }
        },
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
            options: {
                globals: {
                    jQuery: true
                }
            }
        },
        watch: {
           // hint: {
           //      files: ['app/**/*.js'],
           //      tasks: ['jshint']
           //  },
            con: {
                files: ['app/**/*.js'],
                tasks: ['concat']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');


    grunt.registerTask('default', ['jshint']);
    grunt.registerTask('build', ['concat','uglify']);


};
