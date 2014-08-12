app.directive('headerArea',function($rootScope){
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        templateUrl: "templates/partials/header.html",
        controller: function($scope) {
            
        }
    }
})