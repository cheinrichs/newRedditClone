(function() {
  'use strict';

  angular.module('redditClone.posts')
    .directive('posts', postDirective);

  function postDirective (){
    return {
      scope: {},
      templateUrl: '/posts/posts.directive.html',
      controller: controller,
      controllerAs: 'vm'
    }
  }

  controller.$inject = ['$http', 'postService'];

  function controller($http, postService){
    var vm = this;
    activate();

    function activate(){
      postService.list().then(function(res){
        vm.posts = res;
      });
    }

    vm.upvotePost = function(id){
      // console.log("upvoting " + id);
      postService.upvote(id);
    }

    vm.downvotePost = function(id){
      postService.downvote(id);
    }

    vm.deletePost = function (id){
      console.log("deleting " + id);
      postService.deletePost(id);
    }

  }

}());
