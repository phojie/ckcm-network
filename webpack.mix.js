let jie = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

jie.js('resources/assets/js/app.js', 'public/js')
//    .sass('resources/assets/sass/app.scss', 'public/css');
jie.stylus('resources/assets/stylus/app.styl', 'public/css', {
    use: [
        require('rupture')()
    ]
});

// jie.browserSync({
//     files: [
//         //    'app/**/*',
//         //    'public/**/*',
//         //    'resources/views/**/*',
//         //    'resources/lang/**/*',
//         //    'routes/**/*',
//         'rosources/assets/**/*'


//     ],
//     notify: {
//         styles: {
//             top: 'auto',
//             bottom: '0'
//         }
//     },
// })

jie.browserSync('spa.test');

