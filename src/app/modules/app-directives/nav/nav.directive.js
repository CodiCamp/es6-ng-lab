import template from './nav.html';
import NavController from './nav.controller';

export default function navDirective(){
    var directive = {
        template: template,
        controller: NavController,
        controllerAs: 'viewModel',
        bindToController: true,
        restrict: 'E'
    };

    return directive;
}