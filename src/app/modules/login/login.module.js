/**
 * es6 import of angular vendor dependency
 * config and controller are imported from the corresponding files
 */
import 'angular';
import config from './login.config';
import LoginController from './login.controller';

/**
 * es6 export of function
 */
export default angular.module('app.login', ['ui.router'])
    .config(config)
    .controller('LoginController', LoginController)
    .name;