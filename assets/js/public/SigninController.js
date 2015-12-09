angular.module('PixnistaModule').controller('SigninController', ['$scope', '$http', 'toastr', function ($scope, $http, toastr) {

        $scope.submitSigninForm = function () {
            // Set the loading state (i.e. show loading spinner)
            $scope.signinForm.loading = true;

            // Submit request to Sails.
            $http.post('/api/user', {
                name: $scope.signinForm.name,
                title: $scope.signinForm.title,
                email: $scope.signinForm.email,
                password: $scope.signinForm.password
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
                $scope.signinForm.loading = false;
            })
        };
    }]);
