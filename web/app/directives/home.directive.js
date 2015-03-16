app.directive('scrollTop', function() {
  return {
    restrict: 'A',
    link: function(scope, $elm, attrs) {
      console.log(scope, $elm, attrs);
      $elm.on('click', function() {
        console.log('CLICK CLICK');
        $("html,body").animate({scrollTop: 0}, "slow");
        console.log('CLICK CLICK');
        console.log('CLICK CLICK');
        return false;
      });
    }
  };
});