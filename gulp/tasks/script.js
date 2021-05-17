const gulp = require('gulp');
const webpack = require('webpack-stream');

module.exports = function script() {
    return gulp
        .src('src/js/main.js')
        .pipe(
            webpack({
                mode: process.env.NODE_ENV,
                entry: {
                    main: './src/js/main.js',
                },
                output: {
                    filename: '[name].min.js',
                },
                module: {
                    rules: [
                        {
                            test: /\.m?js$/,
                            exclude: /(node_modules|bower_components)/,
                            use: {
                                loader: 'babel-loader',
                                options: {
                                    presets: ['@babel/preset-env'],
                                },
                            },
                        },
                    ],
                },
            })
        )
        .pipe(gulp.dest('build/js'));
};
