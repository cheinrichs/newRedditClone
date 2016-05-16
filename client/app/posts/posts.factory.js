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
      var showPostForm = false;


      return {
        add: addPost,
        delete: deletePost,
        list: listPosts,
        formVisible: postFormVisible
      }

      function postFormVisible(){
        showPostForm = !showPostForm;
        return showPostForm;
      }

      function addPost(title, image, description){
        var data = {
          title: title,
          image: image,
          description: description
        };

        return $http.post('http://localhost:3000/addPost/', data).then(function(res){
          console.log(res.data[0]);
          posts.push(res.data[0]);
        });
      }

      function deletePost(){
        //TODO
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
