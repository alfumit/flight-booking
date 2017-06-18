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