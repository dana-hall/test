var usersApp = angular.module("usersApp", []);

//Do configuration and routing here
usersApp.config(function($routeProvider) {
	console.log($routeProvider);
	$routeProvider
	.when("/",{
		controller: "UsersCtrl",
		templateUrl: "js/views/usersView.html"
	});
	
	$routeProvider.otherwise({"redirectTo": "/"});  //.otherwise("/"); //does not work
//	$routeProvider
//        .when("/",{
//            controller: "UsersCtrl",
//            templateUrl: "js/views/usersView.html"
//        }).otherwise({"redirectTo": "/"});  //.otherwise("/"); //does not work
});
