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

	function planeController(dbWrite,$rootScope) {
		let seatVocabulary = 'abcdefghijklmnop';
		this.$onInit = () => {
			dbWrite.getPlane().then((response) => {
				let i = 0, j = 0, seats, plane = {'rows': 20, 'seatsInRow': 5};
				this.passenger = $rootScope.passenger;

				seats = seatVocabulary.split("");
				seats.length = plane.seatsInRow;


				this.planeArr = new Array();
				for (i = 0; i < plane.seatsInRow; i++) {
					this.planeArr[i] = [];
					for( j = 0; j < plane.rows; j++) {
						this.planeArr[i].push(`${j}${seats[i]}`);
					}
				}
			});
		}

	}
})();