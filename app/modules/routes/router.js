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
