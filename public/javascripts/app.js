'use strict';

/* App Module */

var myApp =  angular.module('myApp',['ui.router', 'appControllers','appDirectives','appServices','angularUtils.directives.dirPagination']);

myApp.config([
	'$stateProvider',
	'$urlRouterProvider',
	'$locationProvider',
	function($stateProvider, $urlRouterProvider, $locationProvider) {

	  $stateProvider

          .state('Login', {
              url: '/Login',
              views: {
                  '': {
                      templateUrl: '/partials/login.html',
                      controller: 'adminControler'
                  }

              }
          })


		.state('dashboard', {
		  url: '/dashboard',
		   views: {
		  	'': { 
		  		templateUrl: '/partials/dashboard.html', 	  
		  		controller: 'adminControler' 
		  	},
		  	'dashboard-contents@dashboard': { 
		  		templateUrl: '/partials/dashboard_overview.html' 
		  	}		 
		  }
		})

		.state('dashboard.allorders', {
		   url: '/allorders',
		   views: {
		   		'dashboard-contents@dashboard': { 
		  		templateUrl: '/partials/dashboard_orders.html',
		  		controller: 'adminControler' 
		  	}
		   }		   		    
		})
          .state('dashboard.login', {
              url: '/allorders',
              views: {
                  'dashboard-contents@dashboard': {
                      templateUrl: '/partials/dashboard_login.html',
                      controller: 'adminControler'
                  }
              }
          })
		.state('dashboard.allusers', {
		   url: '/allusers',
		   views: {
		   		'dashboard-contents@dashboard': { 
		  		templateUrl: '/partials/dashboard_allusers.html',
		  		controller: 'adminControler' 
		  	}
		   }		   		    
		})

		  .state('dashboard.subscribeusers',{
			  url:'/subscribeuser',
			  views: {
				  'dashboard-contents@dashboard': {
					  templateUrl: '/partials/dashboard_allsubscribeusers.html',
					  controller: 'adminControler'
				  }
			  }
		  })
		.state('dashboard.orderupdate', {
		   url: '/orderupdate',
		   views: {
		   		'dashboard-contents@dashboard': { 
		  		templateUrl: '/partials/dashboard_orderupdate.html',
		  		controller: 'OrderDetailsController' 
		  	}
		   }		   		    
		})   
		
		.state('profilepreview', {
		  url: '/profilepreview?u',		 
		  templateUrl: '/partials/profilepreview.html', 	  
		  controller: 'userProfileControler'
		})

		.state('editprofile', {
		  url: '/editprofile?u',		 
		  templateUrl: '/partials/userprofile.html', 	  
		  controller: 'userProfileControler'
		})
		.state('listDishes', {
		  url: '/listDishes?d&c',		 
		  templateUrl: '/partials/listdishcontainer.html', 	  
		  controller: 'listDishControler'
		}) 
		.state('dishPreview', {
		  url: '/dishPreview?d&c',		 
		  templateUrl: '/partials/dishpreview.html', 	  
		  controller: 'listDishControler'
		})
		.state('userlistdishes', {
		  url: '/userlistdishes?u',		 
		  templateUrl: '/partials/useralldishes.html', 	  
		  controller: 'UserAllDishesControler'
		});


	  	$urlRouterProvider.otherwise('Login');

	  	$locationProvider.html5Mode({
		  enabled: true,
		  requireBase: false
		});

}]);