/**
 * Created by Alex on 18.06.2017.
 */
(function () {
    angular.module('flightApp',['ui.router','adminPanel','passengerModule','seatModule','planeModule']);
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
	angular.module('passengerModule',[]);
})();

/**
 * Created by Alex on 18.06.2017.
 */
(function () {
	'use strict';
	angular.module('planeModule',[]);
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
    'use strict';
    angular.module('flightApp')
        .config(function ($locationProvider, $urlRouterProvider, $urlMatcherFactoryProvider,$stateProvider) {
            $urlMatcherFactoryProvider.strictMode(false);
            $locationProvider.html5Mode({ enabled: true, requireBase: true });
            $urlRouterProvider.otherwise(function ($injector) {
            //    $state.go('main');
            });
            $stateProvider
            .state('main',{
                'url': '/',
                'template': `<h1> Hey I'm router state</h1>
                   <h2>{{$ctrl.test}}</h2>
                   <plane></plane>
                `,
                'controller': function () {
                    this.test = "And I'm it's controller data"
                },
                'controllerAs': '$ctrl'
            })
            .state('admin',{
                'url': '/admin',
                'template': `<admin-panel></admin-panel>`,
            })
            .state('plane', {
                'url': '/plane',
	            'template': `<plane></plane>`
            })
            .state('seat', {
	            'url': '/seat',
	            'template': `<seat></seat>`
            })
            .state('passenger', {
                'url': '/passenger',
                'template': `<passenger></passenger>`
            })

        });
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
            "controller": function () {
                this.value = "test"
            },
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