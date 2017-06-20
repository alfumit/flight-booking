/**
 * Created by Alex on 18.06.2017.
 */
(function () {
	"use strict";
	angular.module('dbWrite',[])
	.factory('dbWrite', function dbWrite($http) {
		return {
			'login': function (firstName,lastName,email) {
				console.log("Creating new user");
				return $http.post("/svc/addpassenger",{firstName: firstName, lastName: lastName, email: email})
			},
			'getPlane': function (planeType) {
				return $http.get('').then(() => {
					return {'rows': 20, 'seatsInRow': 8}
				})
			}
		}
	})
})();
