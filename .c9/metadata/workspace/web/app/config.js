{"filter":false,"title":"config.js","tooltip":"/web/app/config.js","undoManager":{"mark":100,"position":100,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":29},"end":{"row":0,"column":30},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":30},"end":{"row":0,"column":31},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":35},"end":{"row":0,"column":126},"action":"remove","lines":["'ngAnimate', 'ngRoute', 'ngCookies', 'ngSanitize', 'pascalprecht.translate', 'mgcrea.ngStra"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":35},"end":{"row":0,"column":36},"action":"remove","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":35},"end":{"row":0,"column":36},"action":"remove","lines":["'"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":35},"end":{"row":0,"column":47},"action":"insert","lines":["'ngMaterial'"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":50},"end":{"row":1,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":0},"end":{"row":8,"column":4},"action":"insert","lines":["/***********************************************************************"," * Configs"," ***********************************************************************/","// Resolve conflict Twig / Angular","app.config(['$interpolateProvider', function ($interpolateProvider) {","  $interpolateProvider.startSymbol('{[{').endSymbol('}]}');","}]);"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":0,"column":2},"action":"insert","lines":["''"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":1},"end":{"row":0,"column":2},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":2},"end":{"row":0,"column":3},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":3},"end":{"row":0,"column":4},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":4},"end":{"row":0,"column":5},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":5},"end":{"row":0,"column":6},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":6},"end":{"row":0,"column":7},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":7},"end":{"row":0,"column":8},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":8},"end":{"row":0,"column":9},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":9},"end":{"row":0,"column":10},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":10},"end":{"row":0,"column":11},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":12},"end":{"row":0,"column":13},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":13},"end":{"row":1,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":35},"end":{"row":2,"column":45},"action":"insert","lines":["'ngRoute',"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":45},"end":{"row":2,"column":46},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":4},"end":{"row":11,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":0},"end":{"row":12,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":0},"end":{"row":67,"column":4},"action":"insert","lines":["// Manage routes","app.config(['$routeProvider', function ($routeProvider) {","  $routeProvider","    .when('/list-products', {","      templateUrl : \"/bundles/meupux/Template/list-products.html\",","      controller  : \"ListCtrl\",","      resolve : {","        itemService : \"ProductService\"","      }","    })","    .when('/list-categories', {","      templateUrl : \"/bundles/meupux/Template/list-categories.html\",","      controller  : \"ListCtrl\",","      resolve : {","        itemService : \"CategoryService\"","      }","    })","    .when('/list-suppliers', {","      templateUrl : \"/bundles/meupux/Template/list-suppliers.html\",","      controller : \"ListCtrl\",","      resolve : {","        itemService : \"SupplierService\"","      }","    })","    .when('/product-:id', {","      templateUrl : \"/bundles/meupux/Template/entity.html\",","      controller  : \"FormCtrl\",","      resolve   : {","        FormService : \"ProductFormService\",","        itemService : \"ProductService\"","      }","    })","    .when('/category-:id', {","      templateUrl : \"/bundles/meupux/Template/entity.html\",","      controller  : \"FormCtrl\",","      resolve   : {","        FormService : \"CategoryFormService\",","        itemService : \"CategoryService\"","      }","    })","    .when('/supplier-:id', {","      templateUrl : \"/bundles/meupux/Template/entity.html\",","      controller  : \"FormCtrl\",","      resolve   : {","        FormService : \"SupplierFormService\",","        itemService : \"SupplierService\"","      }","    })","    .when('/', {","      templateUrl : \"/bundles/meupux/Template/dashboard.html\",","      controller  : \"DashboardCtrl\"","    })","    .otherwise({","      redirectTo: '/'","    });","}]);"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":12},"end":{"row":15,"column":25},"action":"remove","lines":["list-products"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":12},"end":{"row":15,"column":13},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":13},"end":{"row":15,"column":14},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":14},"end":{"row":15,"column":15},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":15},"end":{"row":15,"column":16},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":12},"end":{"row":22,"column":27},"action":"remove","lines":["list-categories"]},{"start":{"row":22,"column":12},"end":{"row":22,"column":13},"action":"insert","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":13},"end":{"row":22,"column":14},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":14},"end":{"row":22,"column":15},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":15},"end":{"row":22,"column":16},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":4},"end":{"row":63,"column":6},"action":"remove","lines":[".when('/list-suppliers', {","      templateUrl : \"/bundles/meupux/Template/list-suppliers.html\",","      controller : \"ListCtrl\",","      resolve : {","        itemService : \"SupplierService\"","      }","    })","    .when('/product-:id', {","      templateUrl : \"/bundles/meupux/Template/entity.html\",","      controller  : \"FormCtrl\",","      resolve   : {","        FormService : \"ProductFormService\",","        itemService : \"ProductService\"","      }","    })","    .when('/category-:id', {","      templateUrl : \"/bundles/meupux/Template/entity.html\",","      controller  : \"FormCtrl\",","      resolve   : {","        FormService : \"CategoryFormService\",","        itemService : \"CategoryService\"","      }","    })","    .when('/supplier-:id', {","      templateUrl : \"/bundles/meupux/Template/entity.html\",","      controller  : \"FormCtrl\",","      resolve   : {","        FormService : \"SupplierFormService\",","        itemService : \"SupplierService\"","      }","    })","    .when('/', {","      templateUrl : \"/bundles/meupux/Template/dashboard.html\",","      controller  : \"DashboardCtrl\"","    })"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":0},"end":{"row":29,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":6},"end":{"row":29,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":20},"end":{"row":30,"column":21},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":21},"end":{"row":30,"column":22},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":22},"end":{"row":30,"column":23},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":23},"end":{"row":30,"column":24},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":30},"end":{"row":20,"column":7},"action":"remove","lines":[",","      resolve : {","        itemService : \"ProductService\"","      }"]}]}],[{"group":"doc","deltas":[{"start":{"row":21,"column":30},"end":{"row":24,"column":7},"action":"remove","lines":[",","      resolve : {","        itemService : \"CategoryService\"","      }"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":21},"end":{"row":17,"column":29},"action":"remove","lines":["ListCtrl"]},{"start":{"row":17,"column":21},"end":{"row":17,"column":22},"action":"insert","lines":["H"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":22},"end":{"row":17,"column":23},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":23},"end":{"row":17,"column":24},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":24},"end":{"row":17,"column":25},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":25},"end":{"row":17,"column":26},"action":"insert","lines":["C"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":26},"end":{"row":17,"column":27},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":27},"end":{"row":17,"column":28},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":28},"end":{"row":17,"column":29},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":29},"end":{"row":17,"column":30},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":30},"end":{"row":17,"column":31},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":31},"end":{"row":17,"column":32},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":32},"end":{"row":17,"column":33},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":33},"end":{"row":17,"column":34},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":34},"end":{"row":17,"column":35},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":21,"column":21},"end":{"row":21,"column":29},"action":"remove","lines":["ListCtrl"]},{"start":{"row":21,"column":21},"end":{"row":21,"column":35},"action":"insert","lines":["HomeController"]}]}],[{"group":"doc","deltas":[{"start":{"row":21,"column":24},"end":{"row":21,"column":25},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":21,"column":23},"end":{"row":21,"column":24},"action":"remove","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":21,"column":22},"end":{"row":21,"column":23},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":21,"column":21},"end":{"row":21,"column":22},"action":"remove","lines":["H"]}]}],[{"group":"doc","deltas":[{"start":{"row":21,"column":21},"end":{"row":21,"column":22},"action":"insert","lines":["B"]}]}],[{"group":"doc","deltas":[{"start":{"row":21,"column":22},"end":{"row":21,"column":23},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":21,"column":23},"end":{"row":21,"column":24},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":21,"column":24},"end":{"row":21,"column":25},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"remove","lines":["'use strict';",""]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":4},"end":{"row":24,"column":6},"action":"insert","lines":["*/"]},{"start":{"row":0,"column":0},"end":{"row":0,"column":2},"action":"insert","lines":["/*"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":1},"end":{"row":0,"column":2},"action":"remove","lines":["*"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":0,"column":1},"action":"remove","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":5},"end":{"row":24,"column":6},"action":"remove","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":4},"end":{"row":24,"column":5},"action":"remove","lines":["*"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":22},"end":{"row":14,"column":29},"action":"remove","lines":["bundles"]},{"start":{"row":14,"column":22},"end":{"row":14,"column":23},"action":"insert","lines":["w"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":23},"end":{"row":14,"column":24},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":24},"end":{"row":14,"column":25},"action":"insert","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":22},"end":{"row":14,"column":25},"action":"remove","lines":["web"]},{"start":{"row":14,"column":22},"end":{"row":14,"column":23},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":23},"end":{"row":14,"column":24},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":24},"end":{"row":14,"column":25},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":26},"end":{"row":14,"column":32},"action":"remove","lines":["meupux"]},{"start":{"row":14,"column":26},"end":{"row":14,"column":27},"action":"insert","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":27},"end":{"row":14,"column":28},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":28},"end":{"row":14,"column":29},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":29},"end":{"row":14,"column":30},"action":"insert","lines":["w"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":30},"end":{"row":14,"column":31},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":32},"end":{"row":14,"column":59},"action":"remove","lines":["Template/list-products.html"]},{"start":{"row":14,"column":32},"end":{"row":14,"column":33},"action":"insert","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":33},"end":{"row":14,"column":34},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":34},"end":{"row":14,"column":35},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":35},"end":{"row":14,"column":36},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":36},"end":{"row":14,"column":37},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":37},"end":{"row":14,"column":38},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":38},"end":{"row":14,"column":39},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":39},"end":{"row":14,"column":40},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":40},"end":{"row":14,"column":41},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":41},"end":{"row":14,"column":42},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":42},"end":{"row":14,"column":43},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":43},"end":{"row":14,"column":44},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":44},"end":{"row":14,"column":45},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":45},"end":{"row":14,"column":46},"action":"insert","lines":["l"]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":14,"column":46},"end":{"row":14,"column":46},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1424181934606,"hash":"8d077689772236953c91aabd1e87573e2946c1eb"}