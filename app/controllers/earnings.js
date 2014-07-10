angular.module( 'waitstaff' )
.controller( 'earningsController', function( $scope ) {

	// intialise
	function init() {
		// console.log( 'init', TIPS );
		$scope.data = {
			tip: {
				total: TIPS.amount,
				average: TIPS.amount / TIPS.meals || 0
			},
			mealCount: TIPS.meals
		};
	}
	// onready
	init();
	// onreset
	$scope.$on( 'reset', init );
});
