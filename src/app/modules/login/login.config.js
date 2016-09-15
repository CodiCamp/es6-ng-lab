/**
 * here we are stringifying the html
 * in order for this to happen we use browserify and stringify module
 */
import template from './login.html';

/**
 * needed for minification and reference purposes
 */
config.$inject = ['$stateProvider'];

/**
 * es6 export of function
 */
export default config;

function config ($stateProvider) {
    $stateProvider
        .state('login', {
            url: "/login",
            template: template,
            controller: 'LoginController',
            controllerAs: 'viewModel',
            params: {
                showRegisterButton: true, // passing param for whether or not to show the registration button
                requireLogin: false // passing param for wheather or not the page requires login
            }
        });
}