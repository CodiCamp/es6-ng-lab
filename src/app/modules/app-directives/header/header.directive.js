import template from './header.html';
import HeaderController from './header.controller';

export default function headerDirective() {
    var directive = {
        template: template,
        controller: HeaderController,
        controllerAs: 'viewModel',
        bindToController: true,
        restrict: 'E',
    };
    return directive;
}
