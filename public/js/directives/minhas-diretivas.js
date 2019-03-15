
//angular.module('minhasDiretivas', [])
//    .directive('meuPainel', function () {

//        var ddo = {};

//        ddo.restrict = "AE";
//        ddo.transclude = true;

//        ddo.scope = {
//            titulo: '@'
//        };

//        ddo.templateUrl = 'js/directives/meu-painel.html';

//        return ddo;
//    });





angular.module('minhasDiretivas', [])
    .directive('meuPainel', function () { //informo o nome da diretiva e qual a função que ela recebe
        var ddo = {} // ddo é um objeto . é a diretiva configurada
        ddo.restrict = "AE"; // restrict = restrição de uso   AE = atribute element. pode ser utilizada como atributo ou elemento.
        ddo.scope = {
            titulo: '@' // o scope define a forma de uso da diretiva e isola o escopo das demais
        }
        ddo.transclude = true;

        ddo.templateUrl = "js/directives/meu-painel.html"
        return ddo;
    

    })
    .directive('minhaFoto', function () {
        var ddo = {};
        ddo.restrict = 'AE';
        ddo.scope = {
            titulo: '@',
            url: '@'
        };
        ddo.template = '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}">';
        return ddo;

    });