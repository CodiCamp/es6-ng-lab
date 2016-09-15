/**
 * es6 import of angular vendor dependency
 * service logic is imported from the file
 */
import 'angular';
import getJsonService from './get-json.service';

/**
 * es6 export of function
 */
export default angular.module('get.json.service', [])
    .factory('getJsonService', getJsonService)
    .name;
