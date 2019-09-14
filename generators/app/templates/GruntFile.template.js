module.exports = function (grunt) {
    const applicationFiles = ['./app/**/*.js', './tests/**/*.js'];
    const testFiles = ['./tests/**/*.js'].concat(applicationFiles);

    grunt.loadNpmTasks('grunt-mocha-istanbul');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-exec');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            test: ['./coverage'],
        },
        eslint: {
            target: applicationFiles
        },
        mocha_istanbul: {
            coverage: {
                src: testFiles,
            },
        },
        exec: {
            run: 'node index.js'
        },
    });

    grunt.registerTask('default', ['clean:test', 'eslint', 'mocha_istanbul']);
    grunt.registerTask('run', ['eslint', 'exec:run']);
    grunt.registerTask('full', ['clean:test', 'eslint', 'mocha_istanbul', 'exec:run']);
    grunt.registerTask('clear', ['clean:test']);
}