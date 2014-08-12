app.controller('HomeController',
    function HomeController($scope, $rootScope, Todos) {
        $scope.loading = true;
        $scope.todos = false;
        
        $scope.load = function(){
            Todos.getAll(function(todos){
                //items loaded
                $scope.loading = false;
                $scope.todos = todos;
            });
        }
        
        
        $scope.addTodo = function() {
            if(event.keyCode == 13 && $scope.todoText){
                var new_item = {item:$scope.todoText, status:"not completed", date: "just now"};
                $scope.todos.push(new_item);
                $scope.todoText = '';
                //Todos.add(new_item); //sending to factory
            }
        };
        
        $scope.delete = function(model){
            var oldTodos = $scope.todos;
            $scope.todos = [];
            angular.forEach(oldTodos, function(todo) {
                if (model.item != todo.item) $scope.todos.push(todo);
            });
        }
        
        $scope.load();
    }
)