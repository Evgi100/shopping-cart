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
  $('.cart-list').append('<p><button type="button" class="btn btn-primary btn-sm removeItem">Remove Item</button></p>');
  total +=cart[i].price;
  }
$('.total').empty();
$('.total').html(total);
};



// Add new item to the cart array
var addItem = function (item) {
  var duplicate=false 
  for (i=0;i<cart.length;i++){
    if (cart[i].name===item.name){
      duplicate=true;
      break;
    }
  }
  if (duplicate){
    cart[i].quantity++;
  }else {
    item.quantity=1;
    cart.push(item)
  }
}
   
    
//clear the cart view and array
var clearCart = function () {
  cart=[];
  $('.cart-list').empty();
  $('.total').html('0');
}

//Remove each selected item
$('.cart-title').on('click','.removeItem',function(){
 index= $(this).closest('.cart-list').index();
 cart.splice(index,1);
 updateCart();
  
});


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
