module.exports = function(grunt) {
    
    grunt.initConfig({
      less: {
        development: {
          files: {
            "css/style.css": "less/style.less"  
          }
        }
      },
      
      uglify: {
        build: {
          src: 'js/script.js',    
          dest: 'js/script.min.js'  
        }
      }
    });
  
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    grunt.registerTask('default', ['less', 'uglify']);
  };
  