/**
 * es6 import of angular vendor dependency
 * service logic is imported from the file
 */
import 'angular';
import authService from './auth.service';

/**
 * es6 export of function
 */
export default angular.module('app.auth.service', [])
    .factory('authService', authService)
    .name;