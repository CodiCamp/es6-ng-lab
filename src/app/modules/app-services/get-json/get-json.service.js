/**
 * Angular way to get json data
 * currently using mock data
 */

getJsonService.$inject = ['$http'];

export default function getJsonService($http) {
    var service = {
        parseJson: parseJson
    };
    return service;

    ////////////////

    function parseJson(file) {
        return $http({
            method: 'GET',
            url: "mock-data/" + file
        });
    }
}

