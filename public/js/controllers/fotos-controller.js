angular.module('alurapic').controller('FotosController', function ($scope, $http) {

    // $scope.fotos = [
    //    {
    //        titulo: 'Leão',
    //        url: 'http://www.fundosanimais.com/Minis/leoes.jpg'
    //    },
    //    {
    //        titulo: 'Leao 02',
    //        url: 'http://www.fundosanimais.com/Minis/leoes.jpg'
    //    },
    //    {
    //        titulo: 'Leão',
    //        url: 'http://www.fundosanimais.com/Minis/leoes.jpg'
    //    }
    //];

    $scope.fotos = [];
    $scope.filtro = '';

    $http.get('v1/fotos')
        .success(function (retorno) {
       
            $scope.fotos = retorno;
        })
        .error(function (erro) {
            console.log("fudeu!");
            console.log(erro);
        });
    ////////////////Esse método faz a mesma coisa do acima
    //var promise = $http.get('v1/fotos');// retorna uma promessa das fotos da url v1/fotos, 
    //promise.then(function (retorno) {
    //    $scope.fotos = retorno.data;
    //}).catch(function (error) {
    //    console.log(error)
    //    });


});