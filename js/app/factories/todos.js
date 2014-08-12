app.factory('Todos', ['$http','GENERAL_CONFIG', function($http, GENERAL_CONFIG) {
    var API_URL = GENERAL_CONFIG.BASE_API_URL;
    
    return {
        getAll: function(callback) {
            var apiurl = API_URL + 'todos.json'
            $http.get(apiurl).success(callback);
        },
        add: function(new_item){
            var apiurl = API_URL + 'todos.json'
            //$http.post(apiurl).success(callback);   
        }
    }
}]);