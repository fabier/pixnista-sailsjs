
angular.module('DashboardModule').controller('DashboardController', ['$scope', '$http', 'toastr', function ($scope, $http, toastr) {

        var categories = ['abstract',
            'animals',
            'business',
            'cats',
            'city',
            'food',
            'nightlife',
            'fashion',
            'people',
            'nature',
            'sports',
            'technics',
            'transport'];


        $scope.needHelp = [];
        for (var i = 0; i < 12; i++) {
            $scope.needHelp.push({value: i % 4, category: categories[Math.floor(Math.random() * categories.length)]});
        }

        $scope.hasFoundMatchingClothes = [];
        for (var i = 0; i < 24; i++) {
            $scope.hasFoundMatchingClothes.push({value: i % 4, category: categories[Math.floor(Math.random() * categories.length)]});
        }

    }]);
