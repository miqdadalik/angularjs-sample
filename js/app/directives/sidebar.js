app.directive('sidebar',function($rootScope){
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        templateUrl: "templates/partials/sidebar.html",
        controller: function($scope) {
            
        }
    }
})