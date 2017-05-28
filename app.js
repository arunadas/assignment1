(function(){
  'use strict';

  angular.module('LunchCheck',[])

  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){
    $scope.msg = "";
    $scope.lunchmenu ="";




    $scope.checkMenu = function () {
      if($scope.lunchmenu){
          var menu = $scope.lunchmenu.split(',');
          if (menu.length <= 3 ){
           $scope.msg = "Enjoy!";
         } else{
           $scope.msg = "Too Much!";
         }
         console.log(menu.length);
         return msg;
       } else {
          $scope.msg = "Please enter data First!";
       }};
}
})();
