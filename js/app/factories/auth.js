app.factory('Auth', ['$http','GENERAL_CONFIG','Storage', function($http, GENERAL_CONFIG, Storage) {
    var API_URL = GENERAL_CONFIG.BASE_API_URL;
    
    var user = null;
    return {
        logout: function(successCallback){
            Storage.remove('userLogged');
            Storage.clearAll();
            user = null;
        },
        isLoggedIn: function(){
            if(user == null){
                user = Storage.get('userLogged');
                if(user == null){
                    console.log("user not logged, details not found in local variable and localstorage");
                }
            }
            return (user) ? 1 : 0;
        },
        getUser: function(){
            var ret = {};
            if(user == null){
                user = Storage.get('userLogged');
                if(user == null){
                    console.log("user not logged, details not found in local variable and localstorage");
                }
                else{
                    ret = angular.fromJson(user);
                }
            }
            else{
                ret = angular.fromJson(user);
            }
            return ret;
        }
    }
}])