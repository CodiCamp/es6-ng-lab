import 'angular';
import navDirective from './nav.directive';
import NavController from './nav.controller';

export default angular.module('app.nav.directive', [])
    .directive('navDirective', navDirective)
    .controller('NavController', NavController)
    .name;