/**
 * Created by Alex on 18.06.2017.
 */
(function () {
	angular.module('dbWrite',[])
	.factory('dbWrite', function dbWrite($http) {
		return {
			'login': function (firstName,lastName,email) {
				console.log("Creating new user");
				return $http.post("/svc/add-passenger",{'firstName': firstName, 'lastName': lastName, 'email': email})
			}
		}
	})
})();
