module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      js: {
        src: ['js/*.js'],
        dest: 'js/<%= pkg.name %>-min.js'
      }
    },

    cssmin: {
      css: {
        src: ['css/*.css'],
        dest: 'css/<%= pkg.name %>-min.css'
      }
    },
   
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'qunit']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
 
  grunt.registerTask('test', ['jshint', 'qunit']);

  grunt.registerTask('default', ['uglify']);

};