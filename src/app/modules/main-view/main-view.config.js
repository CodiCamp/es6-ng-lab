/**
 * here we are stringifying the html
 * in order for this to happen we use browserify and stringify module
 */
import template from './main-view.html';

/**
 * needed for minification and reference purposes
 */
config.$inject = ['$stateProvider'];

/**
 * es6 export of function, which
 */
export default config;

function config($stateProvider) {
    $stateProvider
        .state('mainView', {
            url: "/main",
            template: template,
            abstract: true
        });
}

// explained:
//     .state('mainView', {
//         abstract: true,
// With abstract set to true, that means this state can not be explicitly activated.
// It can only be implicitly activated by activating one of its children.