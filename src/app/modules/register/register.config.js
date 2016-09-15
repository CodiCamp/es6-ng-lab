/**
 * here we are stringifying the html
 * in order for this to happen we use browserify and stringify module
 */
import template from './register.html';

/**
 * needed for minification and reference purposes
 */
config.$inject = ['$stateProvider'];

/**
 * es6 export of function
 */
export default config;

function config($stateProvider) {
    $stateProvider
        .state('register', {
            url: "/register",
            template: template,
            controller: 'RegisterController',
            controllerAs: 'viewModel',
            params: {
                requireLogin: false
            }
        });
}