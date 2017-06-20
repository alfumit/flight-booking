/**
 * Created by Fedotov_Al on 20.06.2017.
 */
(function() {
	'use strict';
	angular.module('env.config', [])
	.constant('ENV', (function() {
		return {
			'dev': '',
			'prod': ''
		};
	})());

})();
