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
					'_/compiled/css/style-expanded.css' : '_/components/sass/style.scss'
				}
			},
			dist: {
				options: {
					style: 'compressed',
					sourcemap: 'none'
				},
				files: {
					'_/compiled/css/style.css' : '_/components/sass/style.scss'
				}
			}
		},

		/* Autoprefixer task */
		autoprefixer: {
			options: {
				browsers: ['last 2 versions']
			},
			multiple_files: {
				expand: true,
				flatten: true,
				src: '_/compiled/css/*.css',
				dest: '_css/'
			}
		},

		/* Watch task */
		watch: {
			options: { livereload: true },
			css: {
				files: '**/*.scss',
				tasks: ['sass', 'autoprefixer']
			},
			html: {
				files: ['*.html']
			}
		}
	});

	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['watch']);
}