app.controller('UsersController',
    function UsersController($scope, $rootScope, Users) { //require Users factory to fetch data from service
        $scope.loading = true; //some web service call will take some time, we're showing message to user
        $scope.loadData = function(){
            Users.getAll(function(users){
                //web service call completed
                $scope.loading = false; //web service call completed, hiding loading message
                
                $scope.users = users; //assigning webservice response to scope users, which is accessible by view template
            })
        }
        
        $scope.loadData();
    }
)