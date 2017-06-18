/**
 * Created by Alex on 18.06.2017.
 */
(function () {
	angular.module('dbWrite',[])
	.factory('dbWrite', function dbWrite($http) {
		return {
			'login': function () {
				console.log("Need more time for DB connectivity")
				return $http.get("/")
			}
		}
	})
})();
