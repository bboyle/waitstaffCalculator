// create app
angular.module( 'waitstaff' )
	.config(function( $routeProvider ) {
		$routeProvider
			.when( '/', {
				templateUrl: 'app/views/index.html'
			})

			.when( '/new-meal', {
				templateUrl: 'app/views/meal.html'
			})

			.when( '/my-earnings', {
				templateUrl: 'app/views/earnings.html'
			})

			.otherwise({ redirectTo: '/' })
		;
	})
;