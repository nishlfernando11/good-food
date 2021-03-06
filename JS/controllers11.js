var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope) {
  $scope.foods = [
      {
          "name":"Bruschetta",
          "des":"Bruschetta (Italian pronunciation: [bruˈsketta] is an antipasto (starter dish) from Italy consisting of grilled bread rubbed with garlic and topped with olive oil and sal"
      }
      ,
      {
          "name":"Salami",
          "des":"Salami is cured sausage, made of fermented and air-dried meat from one of several animals—but typically beef or pork."
      }
      ,
      {
          "name":"Pasta e fagioli",
          "des":"Pasta e fagioli, meaning 'pasta and beans', is a traditional meatless Italian dish. Like many other Italian favorites including pizza and polenta, the dish started as a peasant dish, being composed of inexpensive ingredients"
      }
      ,
      {
          "name":"Pizza",
          "des":"Pizza is an oven-baked flat bread generally topped with tomato sauce and cheese. It is commonly supplemented with a selection of meats, vegetables and condiments. The term was first recorded in the 10th century, in a Latin manuscript from Gaeta in Central Italy."
      }
]
});

