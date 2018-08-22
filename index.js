var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var obj ={'itemName': item, 'itemPrice': Math.floor(Math.random()*100)};
 cart.push(obj);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  var array = [];
  
  if(cart.length === 0){
    return 'Your shopping cart is empty.';
  }
  
  else if(cart.length === 1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  }
  
  else {
    for(var i = 0; i < cart.length; i++){
    array[i] = ` ${cart[i].itemName} at $${cart[i].itemPrice}`;
    }
    
    return `In your cart, you have${array.slice(0, array.length-1)}, and${array[array.length-1]}.`;
    
  }
}

function total() {
  // write your code here
  var cartTotal = 0;
  for(var i = 0; i < cart.length; i++){
    cartTotal = cartTotal + cart[i].itemPrice;
  }
  return cartTotal;
}

function removeFromCart(item) {
  // write your code here
  if(cart.find())
  
  var index = cart.findIndex(x => x.itemName === item);
  //console.log(index);
  //console.log(cart[index]);
  cart.splice(index, 1);
  return cart;

}

addToCart('apples');
addToCart('oranges');
addToCart('bananas');
addToCart('melons');
console.log(cart);
removeFromCart('melons');
console.log(cart);

function placeOrder(cardNumber) {
  // write your code here
}
