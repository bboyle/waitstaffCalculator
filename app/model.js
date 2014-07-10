// global model
var TIPS = {
	amount: 0,
	meals: 0,

	init: function() {
		this.amount = 0;
		this.meals = 0;
	},

	add: function( tip ) {
		this.amount += tip;
		this.meals ++;
	}
};

// initialise
TIPS.init();
