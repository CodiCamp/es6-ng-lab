/**
 * es6 import of angular vendor dependency
 * config and controller are imported from the corresponding files
 */
import 'angular';
import config from './main-view.config';
import MainViewController from './main-view.controller'

/**
 * es6 import of angular vendor dependency
 * config and controller are imported from the corresponding files
 */
export default angular.module('app.mainView', ['ui.router'])
    .config(config)
    .controller('MainViewController', MainViewController)
    .name;