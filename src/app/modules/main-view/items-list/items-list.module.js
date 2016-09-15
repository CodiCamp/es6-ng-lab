/**
 * es6 import of angular vendor dependency
 * config and controller are imported from the corresponding files
 */
import 'angular';
import config from './items-list.config';
import ItemsListController from './items-list.controller';

/**
 * es6 export of function
 */
export default angular.module('app.itemsList.module', [])
    .config(config)
    .controller('ItemsListController', ItemsListController)
    .name;