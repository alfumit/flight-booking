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