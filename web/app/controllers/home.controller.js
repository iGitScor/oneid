app.controller('HomeController', function ($scope) {
  $scope.pages = [
    {
      thumbnail: '/img/oneid_team.jpg',
      thumbnail_alt: 'Webradio',
      subject: 'La team change !',
      author: 'Gossip girl',
      description: "Découvrez la nouvelle équipe de la WebRadio de Skema : OneID",
      full: true
    },
    {
      thumbnail: '/img/oneid_webradio.jpg',
      thumbnail_alt: 'Webradio',
      subject: 'Le coin potin',
      author: 'Gossip girl',
      description: " Actu de Skema, les potins et scoops",
      full: false
    },
  ];
});


/*****************************************************************************/
/*************************** CONTACT *****************************************/
/*****************************************************************************/
app.controller('BottomSheetExample', function($scope, $timeout, $mdBottomSheet) {
  $scope.showListBottomSheet = function($event) {
    $mdBottomSheet.show({
      templateUrl: 'app/views/embed/footer-share.html',
      controller: 'ShareSheetCtrl',
      targetEvent: $event
    }).then(function(clickedItem) {
      $scope.alert = clickedItem.name + ' clicked!';
    });
  };

  $scope.showGridBottomSheet = function($event) {
    $mdBottomSheet.show({
      templateUrl: 'app/views/embed/footer-navigation.html',
      controller: 'SubNavigationCtrl',
      targetEvent: $event
    }).then(function(clickedItem) {
      $scope.alert = clickedItem.name + ' clicked!';
    });
  };
});
app.controller('ShareSheetCtrl', function($scope, $mdBottomSheet) {
  $scope.items = [
    { name: 'Share', icon: 'share' },
    { name: 'Upload', icon: 'upload' },
    { name: 'Copy', icon: 'copy' },
    { name: 'Print this page', icon: 'print' },
  ];

  $scope.listItemClick = function($index) {
    var clickedItem = $scope.items[$index];
    $mdBottomSheet.hide(clickedItem);
  };
})
.controller('SubNavigationCtrl', function($scope, $mdBottomSheet) {
  $scope.items = [
    { name: 'Hangout', icon: 'hangout' },
    { name: 'Mail', icon: 'mail' },
    { name: 'Message', icon: 'message' },
    { name: 'Copy', icon: 'copy' },
    { name: 'Facebook', icon: 'facebook' },
    { name: 'Twitter', icon: 'twitter' },
  ];

  $scope.listItemClick = function($index) {
    var clickedItem = $scope.items[$index];
    $mdBottomSheet.hide(clickedItem);
  };
});
app.controller('ContactController', function ($scope) {
  // Contact form
  $scope.user = {
    firstName: '',
    lastName: '' ,
    contact: ''
  };
});


/*****************************************************************************/
/**************************** CHAT *******************************************/
/*****************************************************************************/
app.controller('ChatController', function ($scope) {
  var socket = io.connect();

  $scope.messages = [];
  $scope.roster = [];
  $scope.name = '';
  $scope.text = '';

  socket.on('connect', function () {
    $scope.setName();
  });

  socket.on('message', function (msg) {
    $scope.messages.push(msg);
    $scope.$apply();
  });

  socket.on('roster', function (names) {
    $scope.roster = names;
    $scope.$apply();
  });

  $scope.send = function send() {
    console.log('Sending message:', $scope.text);
    socket.emit('message', $scope.text);
    $scope.text = '';
  };

  $scope.setName = function setName() {
    socket.emit('identify', $scope.name);
  };
});