angular.module('PixnistaModule').controller('CreatePostCommentController', ['$scope', '$http', '$location', 'toastr', function ($scope, $http, $location, toastr) {

        $scope.postCommentForm = {
            creating: false
        };
        $scope.postCommentForm.creating = false;

        $scope.submitPostCommentForm = function () {
            $scope.postCommentForm.creating = true;
            console.log(document.getElementById('postId').value);
            console.log($scope.postCommentForm.comment);
            $http.post('/api/postComment/', {
                post: document.getElementById('postId').value,
                comment: $scope.postCommentForm.comment
            }).then(function onSuccess(response) {
                console.log(response);
                var postComment = response.data;
                toastr.success('PostComment created !', 'Success', {
                    closeButton: true
                });
                window.location.reload();
                return;
            }).catch(function onError(sailsResponse) {
                console.log(sailsResponse);
                // Handle known error type(s).
                // Invalid username / password combination.
                if (sailsResponse.status === 400 || 404) {
                    // $scope.loginForm.topLevelErrorMessage = 'Invalid email/password combination.';
                    toastr.error('Impossible to create a new PostComment.', 'Error', {
                        closeButton: true
                    });
                    return;
                } else {
                    toastr.error('An unexpected error occurred, please try again.', 'Error', {
                        closeButton: true
                    });
                    return;
                }
            }).finally(function eitherWay() {
                $scope.postCommentForm.creating = false;
            });
        };
    }]);
