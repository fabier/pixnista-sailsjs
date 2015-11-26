angular.module('HomepageModule').controller('HomepageController', ['$scope', '$http', 'toastr', function ($scope, $http, toastr) {

        // set-up loginForm loading state
        $scope.loginForm = {
            loading: false
        };

        $scope.submitLoginForm = function () {

            // Set the loading state (i.e. show loading spinner)
            $scope.loginForm.loading = true;

            // Submit request to Sails.
            $http.put('/login', {
                email: $scope.loginForm.email,
                password: $scope.loginForm.password
            }).then(function onSuccess() {
                // Refresh the page now that we've been logged in.
                window.location.reload();
                return;
            }).catch(function onError(sailsResponse) {
                // Handle known error type(s).
                // Invalid username / password combination.
                if (sailsResponse.status === 400 || 404) {
                    // $scope.loginForm.topLevelErrorMessage = 'Invalid email/password combination.';
                    //
                    toastr.error('Invalid email/password combination.', 'Error', {
                        closeButton: true
                    });
                    return;
                }
                toastr.error('An unexpected error occurred, please try again.', 'Error', {
                    closeButton: true
                });
                return;
            }).finally(function eitherWay() {
                $scope.loginForm.loading = false;
            });
        };


        var categories = [
            'abstract',
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
            'transport'
        ];

        $scope.needHelp = [];
        for (var i = 0; i < 12; i++) {
            $scope.needHelp.push({
                value: Math.floor(Math.random() * 4),
                category: categories[Math.floor(Math.random() * categories.length)],
                ok: !!Math.round(Math.random() * 2) // 1 chance sur 4 d'etre KO
            });
        }

        $scope.hasFoundMatchingClothes = [];
        for (var i = 0; i < 24; i++) {
            $scope.hasFoundMatchingClothes.push({
                value: Math.floor(Math.random() * 4),
                category: categories[Math.floor(Math.random() * categories.length)],
                ok: !!Math.round(Math.random() * 2) // 1 chance sur 4 d'etre KO
            });
        }

    }]);
