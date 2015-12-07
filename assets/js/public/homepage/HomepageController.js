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

        $scope.help = [];
        $http.get('/api/post/help/12').then(function (result) {
            var posts = result.data;
            for (var i = 0; i < posts.length; i++) {
                $scope.help.push({
                    url: '/post/' + posts[i].id,
                    imageUrl: '/image/show/' + posts[i].images[0].id
                });
            }
        }).catch(function (sailsResponse) {
            toastr.error('Impossible to list help Posts.', 'Error', {
                closeButton: true
            });
            return;
        });

        $scope.dressing = [];
        $http.get('/api/post/dressing/24').then(function (result) {
            var posts = result.data;
            for (var i = 0; i < posts.length; i++) {
                $scope.dressing.push({
                    url: '/post/' + posts[i].id,
                    imageUrl: '/image/show/' + posts[i].images[0].id,
                    ok: !!Math.round(Math.random() * 2) // 1 chance sur 4 d'etre KO
                });
            }
        }).catch(function (sailsResponse) {
            toastr.error('Impossible to list dressing Posts.', 'Error', {
                closeButton: true
            });
            return;
        });
    }]);
