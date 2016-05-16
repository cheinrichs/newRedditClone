(function() {
  'use strict';

  var dependencies = [
    'ui.router',
    'redditClone.posts',
  ];

  angular.module('redditClone', dependencies)
    .config(setupRoutes);

  setupRoutes.$inject = [
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider'
  ];

  function setupRoutes($stateProvider, $urlRouterProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('redditClone', {
        url: "/",
        template: "<rc-layout></rc-layout>",
        loginRequired: false
      })
      .state('login', {
        url: "/login",
        template: "<rc-nav></rc-nav><h1>Login Page</h1>"
      })
      .state('signup', {
        url: "/signup",
        template: "<rc-nav></rc-nav><h1>Sign Up Page</h1>"
      });
  }

//NEED CORS

  // put this in an angular constant
  // if(window.location.hostname === 'localhost'){
  //   angular.module('redditClone').constant('env', {apiHost: "http://localhost"});
  // } else {
  //   angular.module('redditClone').constant('env', {apiHost: "http://apiUrl.com"});
  // }

}());
