angular.module( 'waitstaff' )
.controller( 'resetController', function( $scope, $attrs, $rootScope ) {

	// handle submission
	$scope.reset = function() {
		TIPS.init();
		$rootScope.$broadcast( 'reset' );
	};
});
