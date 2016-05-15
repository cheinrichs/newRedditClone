(function() {
  'use strict';

  angular.module('redditClone')
    .directive('rcNav', rcNavDirective);

    function rcNavDirective(){
      return {
        scope: {},
        templateUrl: '/layout/rcNav.directive.html',
        controller: controller,
        controllerAs: 'vm'
      }
    }

    controller.$inject = ['postService'];
    function controller(postService){
      var vm = this;
      console.log("nav directive attached");
    }
}());
