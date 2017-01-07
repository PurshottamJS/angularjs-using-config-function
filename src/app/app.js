;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app', ['ui.router'])
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/dashboard');

            $stateProvider.state("dashboard", {
                url: "/dashboard",
                controller: "DashboardController as dashboard",
                // this is the place where to resolve dynamic template
                templateProvider: function($templateCache) {
                    // simplified, expecting that the cache is filled
                    // there should be some checking... and async $http loading if not found
                    return $templateCache.get('dashboard.template.html');
                }
            })

        }])
        .run(function($templateCache) {
            $templateCache.put("dashboard.template.html", "<h1>This text comes from templateCache</h1>")
        })
        .controller('DashboardController', ['$scope', '$state', function($scope, $state) {
            /*
             * Any provider like $stateProvider or $urlRouterProvider are not accessible here.
             * But you can assess them as $state or $urlRouter (ommitting provider) and do the rest of the things.
             * But they are not recomended as it will be preety late for configuring these things.
             * So thats why config function is there for all the configuration and all the providers are accessible there
             */
        }]);
}(window, angular, undefined));
