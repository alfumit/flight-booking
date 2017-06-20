/**
 * Created by Alex on 18.06.2017.
 */
(function () {
	'use strict';
	angular.module('loginModule')
	.controller('loginController', loginController);

	loginController.$inject = ['dbWrite', '$state','$rootScope'];

	function loginController(dbWrite,$state,$rootScope) {
		this.login = () => {
			dbWrite.login(this.firstName,this.lastName,this.email).then((response) => {
				this.data = response.data;
				$rootScope.passenger = this;
				$state.go('plane', this.data);
			})
		}
	}
})();
