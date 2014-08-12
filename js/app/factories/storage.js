app.factory('Storage', ['GENERAL_CONFIG', function(GENERAL_CONFIG) {

    var memory = window.localStorage ||
             (window.UserDataStorage && new UserDataStorage()) ||
             new CookieStorage();
    return {
        save: function(key, value){
            memory.setItem(key, value);
        },
        get: function(key){
            return memory.getItem(key)
            
        },
        remove: function(key){
            memory.removeItem(key);
        },
        clearAll: function(){
            memory.clear();
        }
    }
        
}])