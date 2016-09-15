LoginController.$inject = ['$stateParams', 'authService', 'ngNotify', '$state'];

export default function LoginController($stateParams, authService, ngNotify, $state) {

    var viewModel = this;

    viewModel.func = {
        login: login
    };

    viewModel.flags = {
        showRegisteredButton: $stateParams.showRegisterButton
    };

    ////////////////
    function login() {

        /**
         * call the authentication service and see if all is good with the provided credentials
         */
        authService.auth(viewModel.username, viewModel.password, function(response){

            if (response.success) {

                ngNotify.set(response.message, {
                    position: 'top',
                    type: 'success'
                }, function(){

                    $state.go('mainView.itemsList');
                });
            } else {

                ngNotify.set(response.message, {
                    position: 'top',
                    type: 'error'
                });
            }
        });

    }
};
