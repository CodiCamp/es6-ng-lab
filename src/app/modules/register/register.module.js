/**
 * es6 import of angular vendor dependency
 * config and controller are imported from the corresponding files
 */
import 'angular';
import config from './register.config';
import RegisterController from './register.controller';

/**
 * es6 export of function
 */
export default angular.module('app.register', ['ui.router'])
    .config(config)
    .controller('RegisterController', RegisterController)
    .name;