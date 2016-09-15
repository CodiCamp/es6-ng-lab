config.$inject = ['$locationProvider', '$urlRouterProvider'];

export default function config($locationProvider, $urlRouterProvider) {

    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise('/login');

    $locationProvider.hashPrefix('!');
}