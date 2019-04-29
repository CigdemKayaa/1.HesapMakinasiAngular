var app = angular.module('hesapApp', []);
app.controller('hesapController', function ($scope) {
    $scope.Topla = function (a, b) {
        $scope.sonuc = parseFloat(a) + parseFloat(b);
    };
    $scope.Cikar = function (a, b) {
        $scope.sonuc = parseFloat(a) - parseFloat(b);
    };
    $scope.Carp = function (a, b) {
        $scope.sonuc = parseFloat(a) * parseFloat(b);

    };
    $scope.Bol = function (a, b) {
        $scope.sonuc = parseFloat(a) / parseFloat(b);

    };
    $scope.Tarih = function () {
        console.log("merhaba");
        $scope.tarih = new Date();
        console.log(tarih);
    }
});