(function() {'use strict';
    
    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.output1 = '';
        $scope.output2 ='';
        $scope.dish = '';
        
    $scope.checkLunch = function() {
            if ($scope.dish.trim().length === 0) {
                $scope.empty = true;}
           else {
                $scope.checked = true;
                $scope.empty = false;
                var arrayDishes = $scope.dish.split(',');
                var inputconfirm = arrayDishes.filter(function(v) {
                    return v.trim() !== '';
                });

                if (inputconfirm.length <= 3) {
                    $scope.output1 = 'Enjoy!';}
                 else {
                    $scope.output1 = 'Too much!';}
            }
         };
    }
})();