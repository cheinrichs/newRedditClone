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
      var posts = [];

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
        return $http.get('http://localhost:3000/posts')
          .then(function(response){
            posts = response.data;
            return posts;
          });
      }
    }

}());
