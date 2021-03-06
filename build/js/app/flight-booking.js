/**
 * Created by Alex on 18.06.2017.
 */
(function () {
    angular.module('flightApp',[
        'ui.router',
        'loginModule',
        'adminPanel',
        'passengerModule',
        'seatModule',
        'planeModule']);
})();
/**
 * Created by Alex on 18.06.2017.
 */
(function () {
	'use strict';
	angular.module('adminPanel',[]);
})();

/**
 * Created by Alex on 18.06.2017.
 */
(function () {
	'use strict';
	angular.module('loginModule',['dbWrite']);
})();

/**
 * Created by Alex on 18.06.2017.
 */
(function () {
	'use strict';
	angular.module('passengerModule',[]);
})();

/**
 * Created by Alex on 18.06.2017.
 */
(function () {
	'use strict';
	angular.module('planeModule',['dbWrite']);
})();

/**
 * Created by Alex on 18.06.2017.
 */
(function () {
	'use strict';
	angular.module('seatModule',[]);
})();

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

/**
 * Created by Alex on 18.06.2017.
 */
(function () {
    'use strict';
    angular.module('flightApp')
        .config(function ($locationProvider, $urlRouterProvider, $urlMatcherFactoryProvider,$stateProvider) {
            $urlMatcherFactoryProvider.strictMode(false);
            $locationProvider.html5Mode({ enabled: true, requireBase: true });
            $urlRouterProvider.otherwise(function ($injector) {
                $state.go('main');
            });
            $stateProvider
            .state('main',{
                'abstract': true,
                'template': `<site-master></site-master>`,
                'controller': function () {
                    this.test = "And I'm it's controller data"
                },
                'controllerAs': '$ctrl'
            })
            .state('login',{
	            'parent': 'main',
	            'url': '/',
	            'template': `<login-page></login-page>`,
            })
            .state('admin',{
                'parent': 'main',
                'url': '/admin',
                'template': `<admin-panel></admin-panel>`,
            })
            .state('plane', {
	            'parent': 'main',
                'url': '/plane',
	            'template': `<plane></plane>`
            })
            .state('seat', {
	            'parent': 'main',
	            'url': '/seat',
	            'template': `<seat></seat>`
            })
            .state('passenger', {
	            'parent': 'main',
                'url': '/passenger',
                'template': `<passenger></passenger>`
            })

        });
})();

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

/**
 * Created by Alex on 18.06.2017.
 */

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

/**
 * Created by Alex on 18.06.2017.
 */

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
/**
 * Created by Alex on 18.06.2017.
 */

/**
 * Created by Alex on 18.06.2017.
 */

/**
 * Created by Alex on 18.06.2017.
 */
(function () {
    angular.module('adminPanel')
        .component("adminPanel",{
            "bindings": {},
            "controller": function () {
                this.value = "test2"
            },
            "templateUrl": "app/modules/admin-panel/components/admin-panel-page/admin-panel.template.html"
        })
})();
/**
 * Created by Alex on 18.06.2017.
 */
(function () {
    angular.module('loginModule')
        .component("loginPage",{
            "bindings": {},
            "controller": 'loginController',
            "templateUrl": "app/modules/login/components/login-page/login-page.template.html"
        })
})();
/**
 * Created by Alex on 18.06.2017.
 */
(function () {
    angular.module('passengerModule')
        .component("passenger",{
            "bindings": {},
            "controller": function () {
                this.value = "test"
            },
            "templateUrl": "app/modules/passenger/components/passenger-page/passenger.template.html"
        })
})();
/**
 * Created by Alex on 18.06.2017.
 */
(function () {
    angular.module('planeModule')
        .component("plane",{
            "bindings": {},
            "controller": 'planeController',
            "templateUrl": "app/modules/plane/components/plane-page/plane.template.html"
        })
})();
/**
 * Created by Alex on 18.06.2017.
 */
(function () {
    angular.module('seatModule')
        .component("seat",{
            "bindings": {},
            "controller": function () {
                this.value = "test3"
            },
            "templateUrl": "app/modules/seat/components/seat-page/seat.template.html"
        })
})();
/**
 * Created by Alex on 18.06.2017.
 */
(function () {
	'use strict';
	angular.module('flightApp')
	.component('siteMaster',{
		'templateUrl': 'app/modules/shared/component/site-master/site-master.template.js.html',
		'controller': function () {

		}
	})
})();
