/**
 * Created by Alex on 18.06.2017.
 */
(function () {
    angular.module('flightApp')
        .component("passenger",{
            "bindings": {},
            "controller": function () {
                this.value = "test"
            },
            "templateUrl": "app/modules/components/passenger/passenger.template.html"
        })
})();