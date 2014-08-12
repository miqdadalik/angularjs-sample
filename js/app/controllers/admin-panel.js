app.controller('AdminPanelController',
    function AdminPanelController($scope, $rootScope, $window, Auth) {
        $scope.load = function(){
            $scope.user = Auth.getUser();
        }
        
        $scope.logMeOut = function(){
            Auth.logout();
            $window.location.href = 'index.html'
        }
        
        $scope.load();
    }
)