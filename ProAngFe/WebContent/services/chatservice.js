/**
 * 
 *//*
app.factory('ChatService',function($rootScope){           //establishes connection with the socket with the wsc in db
	var socket=new SockJS("/proAngMe/chatmodule")        //chatmodule in the wsc of db...we created an object of sockjs over the project using stomp endpoint i.e. chatmodule
	var stompClient= Stomp.over(socket);                //var to establis connection over stomp by using socket var
	console.log(stompClient)
	stompClient.connect('','',function(frame){                   //user name and password is defined in user controller 
    alert("In connect function in service")
    $rootScope.$broadcast('sockConnected',frame)
    	
    	
    });                             
      return{
    	stompClient:stompClient 
    	
    }
})*/

 
//This filter is used to display chat messages in reverse order ie from last index to 0 , latest message first


/*
 * 
 * 
 * 
 * 
 * 
 */
app.filter('reverse', function() {
	  return function(items) {
	    return items.slice().reverse();
	  };
	});

	app.directive('ngFocus', function() {
	  return function(scope, element, attrs) {
	    element.bind('click', function() {
	      $('.' + attrs.ngFocus)[0].focus();
	    });
	  };
	});

	app.factory('ChatService', function($rootScope) {
	  alert('app factory')
	    var socket = new SockJS('/ProAngMe/chatmodule');
	    var stompClient = Stomp.over(socket);
	    stompClient.connect('', '', function(frame) {
	      $rootScope.$broadcast('sockConnected', frame);
	    });

	    return {
	      stompClient: stompClient
	    };
	});