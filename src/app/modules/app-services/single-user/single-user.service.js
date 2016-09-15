singleUser.$inject = ['$localStorage', '$rootScope'];

export default function singleUser($localStorage, $rootScope) {

    var service = {
        setCurrentUser: setCurrentUser,
        getCurrentUser: getCurrentUser
    };
    return service;

    ////////////////

    /**
     * sets up current user information
     * @param object is object
     * whether the user has just registered or is already registered user
     */
    function setCurrentUser (object) {

        var user = {
            firstName: object.firstName,
            lastName: object.lastName,
            username: object.username,
            password: object.password
        };

        $rootScope.currentUser = user;
        $rootScope.loggedIn = true;
        $localStorage.currentUser = JSON.stringify(user);

    }

    /**
     * reaches to localstorage and checks if the user is registered or not
     * the service is used on application start
     */
    function getCurrentUser() {

        if ($localStorage.currentUser) {

            $rootScope.currentUser = JSON.parse($localStorage.currentUser);
            $rootScope.loggedIn = true;
        } else {

            $rootScope.loggedIn = false;
        }
    }
}

