(function(){
  var app = angular.module('store', [ ]);
  app.controller('StoreController', function(){
    this.products = gems;
  });
  app.controller('PanelController', function(){
  });

  var gems = [
  {
    name: 'Dodecahedron',
    price: 2.95,
    description: 'Details',
      images: [
        "images/dodecahedron.jpg",
        "images/gem-03.gif",
        "images/gem-04.gif"
      ],
    canPurchase: false,
    soldOut: false,
  },
  {
    name: 'Pentagonal Gem',
    price: 5.95,
    description: 'More details',
      images: [
        "images/Pentagonal.jpg",
        "images/gem-03.gif",
        "images/gems-04.gif"
      ],
    canPurchase: true,
    soldOut: false,
  }
];
})();
