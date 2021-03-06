'use strict';
const angular = require('angular');
const ngRoute = require('angular-route'); 


import routing from './account.routes';
import login from './login';
import settings from './settings';
import signup from './signup';
import test from './test';
import oauthButtons from '../../components/oauth-buttons';

export default angular.module('angularNodeApp.account', [
    ngRoute,

    login,
    settings,
    signup,
    test,
    oauthButtons
])
    .config(routing)
    .run(function($rootScope) {
      'ngInject';
      $rootScope.$on('$routeChangeStart', function(event, next, current) {
        if (next.name === 'logout' && current && current.originalPath && !current.authenticate) {
          next.referrer = current.originalPath;
        }
      });
    })

    .name;
