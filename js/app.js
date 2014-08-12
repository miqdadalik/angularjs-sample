var app = angular.module('AdminPanel', [
    'ngRoute',
    'ngResource',
    'AdminPanel.config'
]).factory('httpInterceptor', function ($q, $rootScope) {
    
}).config(function($locationProvider) {
    //  $locationProvider.html5Mode(true);
});
