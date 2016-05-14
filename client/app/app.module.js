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
        template: "<app></app>"
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
