/**
 * Created by Alex on 18.06.2017.
 */
(function () {
	'use strict';
	angular.module('loginModule')
	.controller('loginController', loginController);

	loginController.$inject = ['dbWrite'];

	function loginController(dbWrite) {
		this.login = () => {
			dbWrite.login(this.firstName,this.lastName,this.email).then((response) => {
				console.log('Still working on db connection',response);
				this.data = response.data;
			})
		}
	}
})();
