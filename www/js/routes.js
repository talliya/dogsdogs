angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.login', {
    url: '/page5',
    views: {
      'tab1': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('tabsController.signup', {
    url: '/page6',
    views: {
      'tab3': {
        templateUrl: 'templates/signup.html',
        controller: 'signupCtrl'
      }
    }
  })

  .state('menu2', {
      url: '/page7',
      templateUrl: 'templates/menu2.html',
      controller: 'menu2Ctrl'
    })


  .state('adddog', {
    url: '/page8',
    templateUrl: 'templates/adddog.html',
    controller: 'adddogCtrl'
  })

  .state('favouritedogs', {
    url: '/page9',
    templateUrl: 'templates/favouritedogs.html',
    controller: 'favouritedogsCtrl'
  }) 

  .state('mainpage', {
    url: '/page10',
    templateUrl: 'templates/mainpage.html',
    controller: 'mainpageCtrl'
  })

/*  .state('settings', {
    url: '/page12',
    templateUrl: 'templates/settings.html',
    controller: 'settingsCtrl'
  }) */

  .state('authors', {
    url: '/page13',
    templateUrl: 'templates/authors.html',
    controller: 'authorsCtrl'
  })



$urlRouterProvider.otherwise('/page1/page5')



});
