app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'HomeController',
            templateUrl: 'templates/pages/dashboard/home.html',
            title: 'Dashboard',
            desc: 'Control panel',
            breadcrump: [
                {
                    title: 'Dashboard',
                    cssClass: 'active'
                }
            ]
        })
        .when('/home', {
            controller: 'HomeController',
            templateUrl: 'templates/pages/dashboard/home.html',
            title: 'Dashboard',
            desc: 'Control panel',
            breadcrump: [
                {
                    title: 'Dashboard',
                    cssClass: 'active'
                }
            ]
        })
        .when('/forms', {
            controller: 'FormsController',
            templateUrl: 'templates/pages/forms/general.html',
            title: 'Forms',
            desc: 'general',
            breadcrump: [
                {
                    title: 'Forms',
                    href: '#forms'
                },
                {
                    title: 'General',
                    cssClass: 'active'
                }
            ]
        })
        .when('/users', {
            controller: 'UsersController',
            templateUrl: 'templates/pages/users/list.html',
            title: 'Users',
            desc: 'List',
            breadcrump: [
                {
                    title: 'Users',
                    cssClass: 'active'
                }
            ]
        })
        .when('/logout', {
            controller: 'LogoutController',
            title: 'Logout',
            desc: 'general',
            breadcrump: [
                {
                    title: 'Forms',
                    href: '#forms'
                },
                {
                    title: 'General',
                    cssClass: 'active'
                }
            ]
        })
}).run( function( $rootScope, $window, $route, Auth, GENERAL_CONFIG) {
    // register listener to watch route changes
    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
        console.log('started')
        //ngProgressLite.start();
        $rootScope.title = GENERAL_CONFIG.APP_NAME + ': Loading';
        if (!Auth.isLoggedIn() ) {
            $window.location.href = 'index.html';
        }
    });
    
    $rootScope.$on("$routeChangeSuccess", function(currentRoute, previousRoute){
        $rootScope.title = GENERAL_CONFIG.APP_NAME + ": ";
        $rootScope.title += ($route.current.title) ? $route.current.title : 'Welcome';
        
        $rootScope.page_title = ($route.current.title) ? $route.current.title : 'Welcome';
        $rootScope.desc = ($route.current.desc) ? $route.current.desc : 'Welcome';
        
        $rootScope.breadcrump =  ($route.current.breadcrump) ? $route.current.breadcrump : [];
        //ngProgressLite.done();
    });
 });