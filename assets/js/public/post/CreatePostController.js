angular.module('PixnistaModule').controller('CreatePostController', ['$scope', '$http', '$location', 'toastr', function ($scope, $http, $location, toastr) {

        $scope.postForm = {
            imageUploaded: false,
            creating: false,
            image: null
        };
        $scope.postForm.creating = false;
        $scope.postForm.imageUploaded = false;

        $scope.dropzoneConfig = {
            options: {// passed into the Dropzone constructor
                url: '/image/upload',
                maxFiles: 1
            },
            'eventHandlers': {
                'sending': function (file, xhr, formData) {
                    toastr.info('Sending...', 'Information');
                },
                'success': function (file, response) {
                    var images = response.images;
                    if (images.length > 1) {
                        toastr.warning('Only one image please...', 'Warning');
                    } else if (images.length === 1) {
                        var image = images[0];
                        $scope.postForm.image = {id: image.id, url: '/api/image/show/' + image.id};
                        $scope.postForm.imageUploaded = true;
                        toastr.success('Image sent !', 'YEAH !');
                    } else {
                        toastr.error('Upload unsuccessful...', 'Error');
                    }
                }
            }
        };

        $scope.submitPostForm = function () {
            $scope.postForm.creating = true;
            $http.post('/api/post/', {
                title: $scope.postForm.title,
                content: $scope.postForm.content
            }).then(function onSuccess(response) {
                console.log(response);
                var post = response.data;
                toastr.success('Post created !', 'Success', {
                    closeButton: true
                });
                $http.post('/api/post/' + post.id + '/images/' + $scope.postForm.image.id)
                        .then(function onSuccess(response) {
                            toastr.success('Image added !', 'Success', {
                                closeButton: true
                            });
                            window.location = '/post/' + post.id;
                            return;
                        });
            }).catch(function onError(sailsResponse) {
                // Handle known error type(s).
                // Invalid username / password combination.
                if (sailsResponse.status === 400 || 404) {
                    // $scope.loginForm.topLevelErrorMessage = 'Invalid email/password combination.';
                    toastr.error('Impossible to create a new Post.', 'Error', {
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
                $scope.postForm.creating = false;
            });
        };
    }]);
