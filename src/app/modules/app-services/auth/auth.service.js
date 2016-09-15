/**
 * in case you are interested about authentication and login process
 * you can read more about at this blog post:
 * http://jasonwatmore.com/post/2015/03/10/AngularJS-User-Registration-and-Login-Example.aspx
 */

authService.$inject = ['usersService', 'singleUser'];

export default function authService(usersService, singleUser) {

    var service = {
        auth: auth
    };
    return service;

    ////////////////

    /**
     * Dummy auth function instead of an API call looking like:
     * $http.post('/api/authenticate', { username: username, password: password })
         .success(function (response) {
             callback(response);
         });
     * @param username: string
     * @param password: string
     * @param callback: function
     */
    function auth(username, password, callback) {
        var response;

        usersService.singleUserCheck(username)
            .then(function (user){
                if (user != null) {

                    if (password == user.password) {

                        response = {success: true, message: 'Login Successful'};
                        singleUser.setCurrentUser(user);
                    } else {

                        response = {success: false, message: 'Login Failed'};
                    }
                } else {

                    response = {success: false, message: 'Login Failed'};
                }

                callback(response);
            });
    }

}

