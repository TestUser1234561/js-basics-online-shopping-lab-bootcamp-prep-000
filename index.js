var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart[cart.push({}) - 1][item] = Math.floor(Math.random() * 100) + 1
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if(cart.length == 0) {
    console.log("Your shopping cart is empty.")
    return true;
  }

  let str = ""
  for(let item in cart) {
    
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
