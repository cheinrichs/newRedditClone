(function() {
  'use strict';

  angular.module('redditClone.posts')
    .directive('posts', postDirective);

  function postDirective (){
    return {
      scope: {},
      templateUrl: '/app/posts/posts.directive.html',
      controller: controller,
      controllerAs: 'vm'
    }
  }

  controller.$inject = ['$http', 'postService'];

  function controller($http, postService){
    var vm = this;
    activate();

    function activate(){
      console.log("posts controller connected!");
    }
  }

}());
