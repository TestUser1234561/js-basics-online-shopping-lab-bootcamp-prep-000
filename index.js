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

  let str = "In your cart, you have "
  for(let item in cart) {
    if(item == 0) {
      str += `${Object.keys(cart[item])[0]} at $${cart[item][Object.keys(cart[item])[0]]}}`
    } else if(item == cart.length - 1) {

    } else {

    }
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
