(function() {
  'use strict';

  angular.module('redditClone')
    .directive('rcNewpost', newPostDirective);

  function newPostDirective (){
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '/newpost/newpost.directive.html',
      controller: controller,
      controllerAs: 'vm'
    }
  }

  controller.$inject = ['$http', 'postService'];

  function controller($http, postService){
    var vm = this;
    vm.createPost = postService.showPostForm;
    activate();

    function activate(){
      console.log("new post connected");
    }

    vm.showCreatePost = function (){
      console.log("show create post!");
      vm.createPost = postService.formVisible();
    }

    vm.addPost = function(){
      postService.add(vm.newTitle, vm.newImage, vm.newDescription);
    }
  }

}());
