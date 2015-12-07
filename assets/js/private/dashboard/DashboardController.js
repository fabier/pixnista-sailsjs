angular.module('DashboardModule').controller('DashboardController', ['$scope', '$http', 'toastr', function ($scope, $http, toastr) {

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
