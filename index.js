const app = angular.module('ToDoApp', []);

app.controller('ToDoController', function($scope){
    $scope.todoList = JSON.parse(localStorage.getItem('todoList')) || [];
    $scope.newItemText = '';

    $scope.addItem = function(){
        if($scope.newItemText){
            $scope.todoList.push({text: $scope.newItemText});
            $scope.newItemText = '';
            localStorage.setItem('todoList', JSON.stringify($scope.todoList));
        }
    };

    $scope.removeItem = function(item){
        let index = $scope.todoList.indexOf(item);
        if(index != -1){
            $scope.todoList.splice(index, 1);
            localStorage.setItem('todoList', JSON.stringify($scope.todoList));
        }
    };
});