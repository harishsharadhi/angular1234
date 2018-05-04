/*
 * 
 * 
 */
 
app.controller('notificationCtrl',function($scope,$location,$rootScope,$routeParams,NotificationService){
	var id=$routeParams.id;
	console.log("id in notification controller is"+id);
	function getNotificationsNotViewed(){
		
		NotificationService.getNotificationsNotViewed().then(
				function(response){
					$rootScope.notifications=response.data
					$rootScope.notificationCount=$rootScope.notifications.length
				},
				function(response){
					$rootScope.error=response.data   //ErrorClass object
					if(response.status==401)
						$location.path('/login')
				})
	}
	if(id!=undefined){
		console.log("id in notification controller is"+id);
//		
		NotificationService.getNotification(id).then(
		          function(response){
		        	  $scope.notification=response.data //select * from notification wher id=?
		          },
		          function(response){
		        	  $rootScope.error=response.data  //ErrorClass object
		        	  if(response.status==401)
		        		  $location.path('/login')
		          })
      NotificationService.updateNotification(id).then(
		          function(response){
		        	  $scope.getnotificationsNotViewed()
		          },     
		          function(response){
		        	  $rootScope.error=response.data  //ErrorClass object
		        	  if(reponse.status==401)
		        		  $location.path('/login')
		          })
	}
	getNotificationsNotViewed();
	
})