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