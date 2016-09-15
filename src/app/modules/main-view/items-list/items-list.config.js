/**
 * here we are stringifying the html
 * in order for this to happen we use browserify and stringify module
 */
import template from './items-list.html';

/**
 * needed for minification and reference purposes
 */
config.$inject = ['$stateProvider'];

/**
 * es6 export of function
 */
export default config;

function config($stateProvider) {
    $stateProvider
        .state('mainView.itemsList', {
            url: '',
            template: template,
            controller: 'ItemsListController',
            controllerAs: 'viewModel',
            params: {
                requireLogin: true
            }
        });
}

// explained:
// .state('mainView.itemsList', {
//     url: '',
// Using an empty url means that this child state will become active
// when its parent's url is navigated to. Urls of child states are
// automatically appended to the urls of their parent. So this state's
// url is '/main' (because '/main' + '').

// digging further, you can't expressly call parent state only
// like in this case $state.go('mainView') , will tell you can't call abstract state
// in order to get this done, you need to call the child state like this $state.go('mainView.itemsList')
// stack overflow explainer http://stackoverflow.com/questions/24969441/angularjs-ui-router-default-child-state-and-ui-sref