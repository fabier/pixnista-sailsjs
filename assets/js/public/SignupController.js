angular.module('PixnistaModule').controller('SignupController', ['$scope', '$http', 'toastr', function ($scope, $http, toastr) {

        $scope.submitSignupForm = function () {
            // Set the loading state (i.e. show loading spinner)
            $scope.signupForm.loading = true;

            // Submit request to Sails.
            $http.post('/api/user', {
                name: $scope.signupForm.name,
                title: $scope.signupForm.title,
                email: $scope.signupForm.email,
                password: $scope.signupForm.password
            }).then(function onSuccess(sailsResponse) {
                window.location = '/';
            }).catch(function onError(sailsResponse) {
                // Handle known error type(s).
                // If using sails-disk adpater -- Handle Duplicate Key
                var emailAddressAlreadyInUse = sailsResponse.status == 409;

                if (emailAddressAlreadyInUse) {
                    toastr.error('That email address has already been taken, please try again.', 'Error');
                    return;
                }
            }).finally(function eitherWay() {
                $scope.signupForm.loading = false;
            })
        };

    }]);
