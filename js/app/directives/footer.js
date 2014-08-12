app.directive('footerArea',function($rootScope, mainNav, GENERAL_CONFIG){
    return {
        restrict: 'E',
        replace: true,
        templateUrl: "templates/partials/footer.html",
        controller: function($scope) {
            $scope.navigations = mainNav;
            $scope.copyright = GENERAL_CONFIG.COPYRIGHT
        }
    }
})