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
      str += `${Object.keys(cart[item])[0]} at $${cart[item][Object.keys(cart[item])[0]]}`
    } else if(item == cart.length - 1){
      if(cart.length != 2) { str += `,` }
      str += ` and ${Object.keys(cart[item])[0]} at $${cart[item][Object.keys(cart[item])[0]]}`
    } else {
      str += `, ${Object.keys(cart[item])[0]} at $${cart[item][Object.keys(cart[item])[0]]}`
    }
  }
  str += '.'
  console.log(str);
}

function total() {
  let total = 0;
  for(let item in cart) {
    total += cart[item][Object.keys(cart[item])[0]]
  }
  return total
}

function removeFromCart(item) {
  for(let i in cart) {
    if(Object.keys(cart[i]) == item) {
      
    }
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
