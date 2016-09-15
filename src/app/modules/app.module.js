// import vendor dependencies
import 'angular';
import 'angular-ui-router';
import 'ngStorage';
import 'ngNotify';

import config from './app.config';
import run from './app.run';

// import gui modules
import login from './login/login.module';
import register from './register/register.module';
import mainView from './main-view/main-view.module';
import itemsList from './main-view/items-list/items-list.module';

// import ng services
import auth from './app-services/auth/auth.module';
import users from './app-services/users/users.module';
import singleUser from './app-services/single-user/single-user.module';
import getJson from './app-services/get-json/get-json.module';

// import ng directives
import nav from './app-directives/nav/nav.module';
import header from './app-directives/header/header.module';

// bootstrap the application dependencies
var appDependencies = [
    'ui.router',
    'ngStorage',
    'ngNotify',
    login,
    register,
    mainView,
    itemsList,
    auth,
    users,
    singleUser,
    getJson,
    nav,
    header
];

// register main module
angular
    .module('app', appDependencies)
    .config(config)
    .run(run);