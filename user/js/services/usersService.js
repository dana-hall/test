usersApp.factory("usersService", function($http) {
	var _users = [];
    var urlBase = '/user';

    // Read All Users
	var _getUsers = function() {
		$http.get(urlBase +"/read")
		.then(function(results){
			//Success
			console.log("Success read all users: "+results);
			angular.copy(results.data, _users); //this is the preferred; instead of $scope.movies = result.data
		}, function(results){
			//Error
			console.log("Error: "+results);
		})
	}

	// Read Single Users
	var _getUser = function(id) {
		console.log(urlBase +"/read/"+id);
		$http.get(urlBase +"/read/"+id)
		.then(function(results){
			//Success
			console.log("Success read single user: "+results);
			_users.length = 0;	// truncate the user array to avoid duplicate error
//			angular.copy(results.data, _users); //this is the preferred; instead of $scope.movies = result.data
			_users.splice(0, 0, results.data);
		}, function(results){
			//Error
			console.log("Error: "+results);
		})
	}
	
	// Create new user
    var _addUser = function(fullname, email, password) {
        var user = {
            "fullname": fullname,
            "email": email,
            "password": password
        };

        $http.post(urlBase+"/create", user)
		.then(function(results){
			//Success
			console.log("Success add new user: "+results);
			// Dana need to get id of new user as it is not being displayed unless a read all uses is clicked
			_users.splice(0, 0, user);
		}, function(results){
			//Error
			console.log("Error: "+results);
		})
    }
 
    // Update user
    var _updateUser = function(fullname, email, password, id) {
    	var user = {
    			"fullname": fullname,
    			"email": email,
    			"password": password,
    			"id": id
    	};
    	
    	$http.post(urlBase+"/update", user)
    	.then(function(results){
    		//Success
    		console.log("Success update user: "+results);
    		// Dana - need to reload user array
//    		_users.splice(0, 0, user);
    	}, function(results){
    		//Error
    		console.log("Error: "+results);
    	})
    }
    
    // Delete user
    var _deleteUser = function(id) {
       	var user = {
    			"id": id
    	};
 
       	$http.post(urlBase+"/delete", user)
    	.then(function(results){
    		//Success
    		console.log("Success delete user: "+results);
    		// Dana - need to reload user array
//    		_users.splice(0, 0, user);
    	}, function(results){
    		//Error
    		console.log("Error: "+results);
    	})
    }
    
    return{
        users: _users,
        getUsers: _getUsers,
        getUser: _getUser,
        updateUser: _updateUser,
        deleteUser: _deleteUser,
        addUser: _addUser
    };
});
