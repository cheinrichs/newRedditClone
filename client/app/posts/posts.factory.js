//inject 'env'
// var host = env.apiHost
//factory.$inject = ['$http', 'env'];

//function factory ($http, env){

// }
(function() {
  'use strict';
    angular.module('redditClone.posts')
      .factory('postService', factory)

    factory.$inject = ['$http'];

    function factory($http){
      var musicals = [];

      return {
        add: addPost,
        delete: deletePost,
        list: listPosts
      }

      function addPost(){

      }

      function deletePost(){

      }

      function listPosts(){

      }
    }

}());
