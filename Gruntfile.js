module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		/*Sass task*/
		sass: {
			dev: {
				options: {
					style: 'expanded',
					sourcemap: 'none'
				},
				files: {
					'_/css/style-expanded.css' : '_/components/sass/style.scss'
				}
			},
			dist: {
				options: {
					style: 'compressed',
					sourcemap: 'none'
				},
				files: {
					'_/css/style.css' : '_/components/sass/style.scss'
				}
			}
		},

		/* Watch task */
		watch: {
			options: { livereload: true },
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			},
			html: {
				files: ['*.html']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['watch']);
}