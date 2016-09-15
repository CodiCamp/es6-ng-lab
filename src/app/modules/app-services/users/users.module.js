/**
 * es6 import of angular vendor dependency
 * config and controller are imported from the corresponding files
 */
import 'angular';
import usersService from './users.service';

/**
 * es6 export of function
 */
export default angular.module('app.users.service', [])
    .factory('usersService', usersService)
    .name;