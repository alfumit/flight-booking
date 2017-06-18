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