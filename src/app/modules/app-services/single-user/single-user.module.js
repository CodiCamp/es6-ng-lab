/**
 * es6 import of angular vendor dependency
 * config and controller are imported from the corresponding files
 */
import 'angular';
import singleUser from './single-user.service';

/**
 * es6 export of function
 */
export default angular.module('app.singleuser.service', [])
    .factory('singleUser', singleUser)
    .name;