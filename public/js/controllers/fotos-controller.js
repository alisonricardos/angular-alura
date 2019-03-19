angular.module('alurapic').controller('FotosController', function ($scope, $http) {

 

    $scope.fotos = [];
    $scope.filtro = '';
    $scope.mensagem = '';

    $http.get('v1/fotos')
        .success(function (retorno) {
       
            $scope.fotos = retorno;
        })
        .error(function (erro) {
            console.log("fudeu!");
            console.log(erro);
        });
  
    $scope.remover = function (foto) {

        $http.delete('/v1/fotos/' + foto._id)
            .success(function () {
                var indiceDaFoto = $scope.fotos.indexOf(foto);// essas duas linhas são responsáveis por retirar a foto da lista sem precisar dar um refresh na página
                $scope.fotos.splice(indiceDaFoto, 1);//splice é utilizado para remover item do array a partir do indice. o segundo parâmetro informa quantos itens serão retirados
                $scope.mensagem= 'Foto ' + foto.titulo + ' removida com sucesso!';

            })
            .error(function (erro) {
                $scope.mensagem = 'Não foi possível apagar a foto ' + foto.titulo;
            });
    };
    
});  


////////////////Esse método faz a mesma coisa do acima
    //var promise = $http.get('v1/fotos');// retorna uma promessa das fotos da url v1/fotos, 
    //promise.then(function (retorno) {
    //    $scope.fotos = retorno.data;
    //}).catch(function (error) {
    //    console.log(error)
    //    });