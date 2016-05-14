(function() {
  'use strict';

  angular.module('redditClone')
    .directive('redditClone', layoutDirective);

  function layoutDirective () {
    return {
      restrict: 'E',
      templateUrl: '/app/layout/layout.directive.html',
      controller: controller,
      controllerAs: 'vm'
    }

    function controller () {

      var vm = this;

      activate();
      
      function activate(){
        console.log('layout directive connected');
      }
      // function clickevent(){
      //   console.log(vm.post);
      // }
    }
  }
}());
