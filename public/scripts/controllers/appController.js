angular.module('MyApp').controller('MainCtrl',MainCtrl);

MainCtrl.$inject=['$scope'];

function MainCtrl($scope){

    person1 = {
        name: 'wiki',
        email: 'wiki@gmail.com',
        phone: '111-222-333'
    };


    person2 = {
        name: 'wiki',
        email: 'wiki@gmail.com',
        phone: '111-222-333'
    };


    person3 = {
        name: 'wiki',
        email: 'wiki@gmail.com',
        phone: '111-222-333'
    };

    contactList = [person1,person2,person3];

    $scope.contactList = contactList ;


}