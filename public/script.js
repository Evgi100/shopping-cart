// an array with all of our cart items
var cart = [];
var source = $('#shopCart-template').html();
var template = Handlebars.compile(source);

// Update the view of shooping cart with the added items
var updateCart = function () {
  $('.cart-list').empty();
  total=0;
for (i=0;i<cart.length;i++){
  var newHTML = template(cart[i]);
  $('.cart-list').append(newHTML);
  total +=cart[i].price;
  
}
$('.total').empty();
$('.total').html(total);
};

// Add new item to the cart array
var addItem = function (item) {
    cart.push(item);
}

//clear the cart view and array
var clearCart = function () {
  cart=[];
  $('.cart-list').empty();
  $('.total').html('0');
}

//Toggle the shopping-cart on/off
$('.view-cart').on('click', function () {
  shoppingCart = $('.shopping-cart');
  shoppingCart.toggle();
});

// get the "item" object from the page
$('.add-to-cart').on('click', function () {
 var item=$(this).closest('.item').data();
  addItem(item);
  updateCart();
});

// clear the cart array and update the view
$('.clear-cart').on('click', function () {
  clearCart();
});

// update the cart as soon as the page loads!
updateCart();
