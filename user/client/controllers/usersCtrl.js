usersApp.controller("UsersCtrl", function ($scope, usersService){
    
	// Executes when the controller is created
    $scope.users = usersService.users;
    usersService.getUsers();

    // Create user
    // Executes when Add User button is clicked
    $scope.addUser = function(fullname, email, password){
        usersService.addUser(fullname, email, password);
    }

    // Read all users
    // Executes when Get All Users button is clicked
    $scope.getUsers = function() {
    	usersService.getUsers();
    }

    // Read single user
    // Executes when Read User button is clicked
    $scope.getUser = function(id) {
    	usersService.getUser(id);
    }
    
    // Update user
    // Executes when Update button is clicked
    $scope.updateUser = function(fullname, email, password, id){
    	usersService.updateUser(fullname, email, password, id);
    }
    
    // Delete user
    // Executes when Delete User button is clicked
    $scope.deleteUser = function(id) {
    	usersService.deleteUser(id);
    }
    
});
