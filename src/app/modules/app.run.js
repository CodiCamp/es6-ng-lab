/**
 * when the application starts, we check the url and reroute
 * the user to proper url, in case he decided to go
 * somewhere he should't be
 */

run.$inject = ['$localStorage', '$state', '$rootScope', 'singleUser'];

export default function run($localStorage, $state, $rootScope, singleUser) {

    singleUser.getCurrentUser();

    $rootScope.$on('$stateChangeStart', function bindStateChange (event, toState) {

        if(toState.params.requireLogin) {

            if(!$rootScope.loggedIn) {
                 event.preventDefault();
                 $state.go('login');
            }
        }else {

            if($rootScope.loggedIn) {
                event.preventDefault();
                $state.go('mainView.itemsList');
            }
        }
    });
}

// in this case $state.go('mainView') , will tell you, that you can't call abstract state
// in order to get this done, you need to call the child state like this $state.go('mainView.itemsList')
// stack overflow explained http://stackoverflow.com/questions/24969441/angularjs-ui-router-default-child-state-and-ui-sref