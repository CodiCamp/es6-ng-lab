import 'angular';
import headerDirective from './header.directive';
import HeaderController from './header.controller';

export default angular.module('header.app.module', [])
    .directive('headerDirective', headerDirective)
    .controller('HeaderController', HeaderController)
    .name;