(function() {
  'use strict';

  angular.module('redditClone')
    .directive('rcSignup', signupDirective);

  function signupDirective (){
    return {
      scope: {},
      templateUrl: '/posts/signup.directive.html',
      controller: controller,
      controllerAs: 'vm'
    }
  }

  controller.$inject = ['$http', 'postService'];

  function controller($http, postService){
    var vm = this;
    activate();

    function activate(){
      console.log("signup directive is connected");
    }

  }

}());
