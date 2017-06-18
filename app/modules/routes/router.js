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
