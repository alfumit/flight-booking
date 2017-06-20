/**
 * Created by Alex on 18.06.2017.
 */
/**
 * Created by Alex on 18.06.2017.
 */
(function () {
	'use strict';
	angular.module('planeModule')
	.controller('planeController', planeController);

	planeController.$inject = ['dbWrite', '$state','$rootScope'];

	function planeController(dbWrite,$state,$rootScope) {
		let seatVocabulary = 'abcdefghijklmnop';
		this.$onInit = () => {
			dbWrite.getPlane().then((response) => {
				this.plane = {'rows': 20, 'seatsInRow': 5};
				this.passenger = $rootScope.passenger;

				this.seats = seatVocabulary.split("");
				this.seats.length = this.plane.seatsInRow;

				this.rowArr = [];
				for(let i = 0; i< this.plane.rows; i++) {
					this.rowArr.push(i);
				}
			});
		}

	}
})();
