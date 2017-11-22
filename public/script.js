// an array with all of our cart items
var cart = [];
var source = $('#shopCart-template').html();
var template = Handlebars.compile(source);


// Update the view of shooping cart with the added items
var updateCart = function () {
  $('.cart-list').empty();
  total = 0;
  for (i = 0; i < cart.length; i++) {
    var newHTML = template(cart[i]);
    $('.cart-list').append(newHTML);
    $('.cart-list').append('<p><button type="button" class="btn btn-primary btn-sm removeItem">Remove Item</button></p>');
    total += cart[i].price*cart[i].quantity;
  }
  $('.total').empty();
  $('.total').html(total);
};



// Add new item to the cart array
var addItem = function (item,price) {
  var duplicate = false
  for (i = 0; i < cart.length; i++) {
    if (cart[i].name === item.name) {
      duplicate = true;
      break;
    }
  }
  if (duplicate) {
    cart[i].quantity++;
  } else {
    item.quantity = 1;
    cart.push(item)
  }
}


//clear the cart view and array
var clearCart = function () {
  cart = [];
  $('.cart-list').empty();
  $('.total').html('0');
}

//Remove each selected item
$('.cart-list').on('click', '.removeItem', function () {
  index = $(this).closest('.item-name-price').data();
  cart.splice(index, 1);
  updateCart();
});

// Decrease item quiantity
var removeItem=function(itemToRemove){
  for (i = 0; i < cart.length; i++ ) {
    if (cart[i].name === itemToRemove.name && cart[i].quantity>1) {
      cart[i].quantity -= 1;
      break;
    }
  }
  updateCart();
}


//Toggle the shopping-cart on/off
$('.view-cart').on('click', function () {
  shoppingCart = $('.shopping-cart');
  shoppingCart.toggle();
});

// get the "item" object from the page
$('.add-to-cart').on('click', function () {
  var item = $(this).closest('.item').data();
  addItem(item);
  updateCart();
});

// clear the cart array and update the view
$('.clear-cart').on('click', function () {
  clearCart();
});

// Decrease item quiantity
$('.cart-list').on('click', '.btn-prepend', function () {
  itemToRemove = $(this).siblings('.item-name-cart').data();
  removeItem(itemToRemove);
});

$('.cart-list').on('click', '.btn-append', function () {
  var item =$(this).siblings('.item-name-cart').data();
  addItem(item);
  updateCart();
});



// update the cart as soon as the page loads!
updateCart();
