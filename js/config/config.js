var config_data = {
    'GENERAL_CONFIG': {
        'APP_NAME'      : 'Admin Panel',
        'VERSION'   : 'v1.0.0',
        'COPYRIGHT'     : '2014  Your company.',
        'BASE_API_URL'  : 'temp-data/'
    }
}

var configModule = angular.module('AdminPanel.config', [])
angular.forEach(config_data,function(key,value) {
    configModule.constant(value,key);
});

