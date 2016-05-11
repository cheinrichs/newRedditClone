(function() {
  'use strict';

  angular.module('redditClone')
    .directive('rcNav', rcNavDirective);

    function rcNavDirective(){
      return {
        scope: {},
        templateUrl: '/app/layout/nav.directive.html',
        controller: controller,
        controllerAs: 'vm'
      }
    }

    controller.$inject = [];
    function controller(){
      var vm = this;
      console.log("nav directive attached");
    }
}());
