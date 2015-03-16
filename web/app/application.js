var app = angular.module('oneid', ['ngRoute', 'ngMaterial']);

/***********************************************************************
 * Configs
 ***********************************************************************/
// Resolve conflict Twig / Angular
app.config(['$interpolateProvider', function ($interpolateProvider) {
  $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
}]);

// Manage routes
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl : "/app/views/full/home.html",
      controller  : "HomeController"
    })
    .when('/radio', {
      templateUrl : "/app/views/full/radio.html",
      controller  : "RadioController"
    })
    .when('/blog', {
      templateUrl : "/app/views/full/blog.html"
    })
    .when('/contact', {
      templateUrl : "/app/views/full/contact.html",
      controller  : "ContactController"
    })
    .when('/chat', {
      templateUrl : "/app/views/full/chat.html",
      controller  : "ChatController"
    })
    .otherwise({
      redirectTo: '/home'
    });
}]);

app.config(function($mdThemingProvider) {
  $mdThemingProvider.definePalette('oneidTheme', {
    '50': 'ffebee',
    '100': 'ffcdd2',
    '200': 'ef9a9a',
    '300': 'e57373',
    '400': 'ef5350',
    '500': 'f44336',
    '600': 'e53935',
    '700': 'd32f2f',
    '800': 'c62828',
    '900': 'b71c1c',
    'A100': 'ff8a80',
    'A200': 'ff5252',
    'A400': 'ff1744',
    'A700': 'd50000',
    'contrastDefaultColor': 'dark',    // whether, by default, text (contrast)
                                        // on this palette should be dark or light
    'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
     '200', '300', '400', 'A100'],
    'contrastLightColors': undefined    // could also specify this if default was 'dark'
  });
  $mdThemingProvider.theme('default')
    .primaryPalette('oneidTheme');
});

app.config( function($mdThemingProvider){
    // Configure a dark theme with primary foreground yellow
    $mdThemingProvider.theme('docs-dark', 'default')
        .primaryPalette('grey')
        .dark();
  });