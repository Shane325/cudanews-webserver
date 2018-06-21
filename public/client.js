/**
 * Define the CudaNewsApp module
 */
CudaNewsApp = angular
  .module('CudaNewsApp', [
    'CudaNewsApp.controllers',
    'CudaNewsApp.services',
    'smart-table',
    'firebase'])

angular
  .module('CudaNewsApp.controllers', [])
  .controller('CudaNewsController', CudaNewsController)

/**
 * CudaNewsController
 */

CudaNewsController.$inject = ['$scope', 'CudaNewsService']

function CudaNewsController ($scope, CudaNewsService) {
  $scope.articles = CudaNewsService.getArticles()
}

angular
  .module('CudaNewsApp.services', [])
  .factory('CudaNewsService', CudaNewsService)
  .factory('FirebaseDataService', FirebaseDataService)

/**
 * CudaNewsService
 */

CudaNewsService.$inject = ['$firebaseArray', 'FirebaseDataService']

function CudaNewsService ($firebaseArray, FirebaseDataService) {
  var service = {
    getArticles: getArticles
  }

  return service

  // Return a list of articles
  function getArticles () {
    let articles = $firebaseArray(FirebaseDataService.articles)
    return articles
  }
}

/**
 * FirebaseDataService
 */

FirebaseDataService.$inject = []

function FirebaseDataService () {
  let root = firebase.database().ref().child('cudanews')

  var service = {
    root: root,
    articles: root.child('articles')
  }

  return service
}
