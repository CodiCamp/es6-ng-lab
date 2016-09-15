/**
 * Create a user registration
 */

RegisterController.$inject = ['$state', 'usersService', 'ngNotify'];

export default function RegisterController($state, usersService, ngNotify) {

    var viewModel = this;
    viewModel.userObject = {};

    viewModel.func = {
        register: register
    };

    ////////////////

    function register() {

        /**
         * calls create user service, which checks if the registration is possible and if so registers the user
         */
        usersService.createUser(viewModel.userObject)
            .then(function (response){

                if (response.success == true) {

                    ngNotify.set(response.message, {

                        position: 'top',
                        type: 'success',
                        target: '#modular'
                    }, function(){

                        $state.go('login', {'showRegisterButton': false});
                    });
                } else {

                    ngNotify.set(response.message, {

                        position: 'top',
                        type: 'error',
                        target: '#modular'
                    });
                }

            });
    }
}
