// We created a new controller named MainController. A controller manages the app's data. Here we use the property title to store a string, and attach it to $scope.

app.controller('MainController', ['$scope', function($scope) {
	$scope.title = 'Top Sellers in Books';
	$scope.promo = 'My Promo!';
  // $scope.product = { name: 'The Book of Trees', price: 19, pubdate: new Date('2014', '03', '08') };
	$scope.products = [
  {
    name: 'The Book of Trees',
    price: 19,
    pubdate: new Date('2014', '03', '08'),
    cover: 'img/the-book-of-trees.jpg',
		likes: 0,
		dislikes: 0
  },
  {
    name: 'Program or be Programmed',
    price: 8,
    pubdate: new Date('2013', '08', '01'),
    cover: 'img/program-or-be-programmed.jpg',
		likes: 0,
		dislikes: 0
  },
  {
    name: 'Hunger Games',
    price: 19,
    pubdate: new Date('2012', '06', '18'),
    cover: 'img/the-book-of-trees.jpg',
		likes: 0,
		dislikes: 0
  },
  {
    name: 'Insurgent',
    price: 19,
    pubdate: new Date('2012', '07', '02'),
    cover: 'img/the-book-of-trees.jpg',
		likes: 0,
		dislikes: 0
  },
	// Once you add two more of your favorite books to the $scope.products array, the view will update as the ng-repeat loops the new elements in the $scope.products array.
]
	$scope.plusOne = function(index) {
		$scope.products[index].likes += 1;
	};
	// The plusOne() function gets the index of the product that was clicked, and then adds one to that product's likes property. Notice that the plusOne() doesn't interact with the view at all; it just updates the controller. Any change made to the controller shows up in the view.
	$scope.minusOne = function(index) {
  	$scope.products[index].dislikes += 1;
  };
}]);


// we used products to store an array containing two objects.
