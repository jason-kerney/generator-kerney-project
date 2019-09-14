module.exports = function (grunt) {
    const applicationFiles = ['./app/**/*.js', './tests/**/*.js'];
    const testFiles = ['./tests/**/*.js'].concat(applicationFiles);

    grunt.loadNpmTasks('grunt-mocha-istanbul');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-exec');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
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

    grunt.registerTask('default', ['eslint', 'mocha_istanbul']);
    grunt.registerTask('run', ['eslint', 'exec:run']);
    grunt.registerTask('full', ['eslint', 'mocha_istanbul', 'exec:run']);
}