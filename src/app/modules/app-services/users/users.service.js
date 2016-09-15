/**
 * set of services targeting the users:
 * createUser: does the creation of user at local storage, not recomended in real project
 * getAllUsers: reach to local storage and grab all data about the users stored there
 * singleUserCheck: returns promise of wheather
 */

usersService.$inject = ['$filter', '$q', '$localStorage'];

export default function usersService($filter, $q, $localStorage) {
    var service = {
        createUser: createUser,
        getAllUsers: getAllUsers,
        singleUserCheck: singleUserCheck
    };
    return service;

    ////////////////

    /**
     * dummy function, which creates a single user and pushes it to localstorage
     * which works instead of an API call like:
     * function createUser() {
            return $http.get('/api/users').then(handleSuccess, handleError('Error getting all users'));
        }
     * the current approach shouldn't be used as we are storing the passwords in localstorage
     * /////////////
     * @param object
     * *@returns type:object
     */
    function createUser(object) {
        var deferred = $q.defer();
        var users;

        singleUserCheck(object.username)
            .then(function (result){
                if (result === null) {

                    users = getAllUsers();

                    users.push(object);

                    $localStorage.users = JSON.stringify(users);

                    deferred.resolve({success: true, message: 'Registered Successfully'})
                } else {

                    deferred.resolve({success: false, message: 'Registration Failed'})
                }
            });

        return deferred.promise;
    }

    /**
     * gets all users from localstorage or return empty array in case there are none
     * @returns all users
     */
    function getAllUsers() {
        var users;

        if(!$localStorage.users){
            $localStorage.users = JSON.stringify([]);
        }

        users = JSON.parse($localStorage.users);

        return users;
    }

    /**
     * checks if the user exists
     * @param username
     * @returns type:string
     */
    function singleUserCheck(username) {
        // to review
        // simulate API call with promise
        // read more at https://docs.angularjs.org/api/ng/service/$q
        var deferred = $q.defer();

        // read more at https://docs.angularjs.org/api/ng/filter/filter
        // true at the end means it's looking for exact match
        // otherwise it's set to partial match
        var filterUsers = $filter('filter')(getAllUsers(), {username: username}, true);

        var isItRegistered = filterUsers.length ? filterUsers[0] : null;

        deferred.resolve(isItRegistered);

        return deferred.promise;
    }

}

