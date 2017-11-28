
var states = [
    {
        name: 'addContact',
        state:{
            url:'/addContact',
            templateUrl:'../views/addContact.html'
        }
    }
];

var app = angular.module('MyApp',['ui.router'])

    .config(function($stateProvider,$urlRouterProvider){
       $urlRouterProvider.otherwise('/addContact');

       angular.forEach(states,function (state) {
           $stateProvider.state(state.name,state.state);
       })
    });