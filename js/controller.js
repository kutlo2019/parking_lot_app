// Registering the parkingCtrl to the parking module
parking.controller("parkingCtrl", function ($scope) {
	$scope.appTitle = "MC2 Parking";
	$scope.alertTopic = "Something went wrong!";
	$scope.alertMessage = "You must inform the plate and the color of the car!";

	// Binding the car's array to the scope
	$scope.cars = [];

	// Binding the colours to the scope
	$scope.colors = ["White", "Black", "Blue", "Red", "Silver"];

	// Binding the park function to the scope
	$scope.park = function (car) {
		car.entrance = new Date();
		$scope.cars.push(angular.copy(car));
		delete $scope.car;
	};
});