angular.module('alurapic')
    .controller('FotoController', function ($scope, $http) {

        $scope.foto = {};
        $scope.mensagem = '';

        $scope.submeter = function () {

            if ($scope.formulario.$valid) {

                $http.post('/v1/fotos', $scope.foto)
                    .success(function () {
                        $scope.foto = {}
                        $scope.foto.titulo = ' ';
                        $scope.foto.url = ' ';
                        $scope.mensagem = 'Foto cadastrada com sucesso';
                    })
                    .error(function (erro) {
                        console.log('N�o foi poss�vel cadastra a foto');
                        $scope.mensagem ='N�o foi poss�vel cadastrar a foto!'
                    })
            }
        };

    });