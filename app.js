(function() {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) 
    {
       
        $scope.checked = false;
        $scope.dishes = '';

        $scope.checkLunch = function() {
            if ($scope.dishes.length == 0) {
                $scope.empty = true;
            } else {
                $scope.checked = true;
                $scope.empty = false;
                var arrayDishes = $scope.dishes.split(',');
                var inputconfirm = arrayDishes.filter(function(v) {
                    return v !== '';
                });

                if (inputconfirm.length <= 3) {
                  alert("Enjoy!")
                } else {
                    alert("too much!")
                }
            }
        };
    }
})();