let arrShoppingCart = [
  {
    name:"loaf of bread",
    type:"food",
    quantity:1,
    price:.85
  },
  { 
    name:"multipack beans",
    type:"food",
    quantity:1,
    price:1
},
{ 
  name:"mushrooms",
  type:"food",
  quantity:10,
  price:.1
},
{
  name:"can of beer",
  type:"alcohol",
  quantity:4,
  price:1.1
},
{
  name:"prosecco",
  type:"alcohol",
  quantity:1,
  price:8.99
},
{
  name:"steak",
  type:"food",
  quantity:2,
  price:3.99
},
{
  name:"blue cheese",
  type:"food",
  quantity:1,
  price:2.99
},
{
  name:"candles",
  type:"home",
  quantity:3,
  price:1.99
},
{ 
  name:"cheesecake",
  type:"food",
  quantity:1,
  price:4.99
},
{ 
  name:"onions",
  type:"food",
  quantity:3,
  price:.4
}];
/**
 * Returns x raised to the n-th power.
 *
 * @param {array} arrShoppingCart The Shopping Cart array.
 * @param {object} objCoupon A coupon object.
 * @return {number} x the total price of the cart with discounts applied
 */
function getTotalPrice(arrShoppingCart=[],objCoupon={}){
  // setting total of cart to 0 before the loop starts
  let total = 0;
  // setting the item price to 0 so it isn't redeclared in the loop
  let itemPrice = 0;
  for(var counter=0; counter < arrShoppingCart.length; counter++){
    // console.log(counter);
    // select the current cart item using the counter as the array key
    var objItem = arrShoppingCart[counter];
    // console.log(objItem);
    // muliltply the cost of the item by the quanity of the item
    itemPrice = parseFloat(objItem.quantity) * parseFloat(objItem.price);
    // console.log(itemPrice);
    // if a coupon has been passed as an argument AND the coupon type is percentage
    if(objCoupon && objCoupon.type == 'percentage'){
      // if the coupon category = the current item type OR coupon category = all
      if(objCoupon.category == objItem.type || objCoupon.category == 'all'){
        // itemPrice = percentage decrease for item
        itemPrice = (itemPrice/100) * (100 - objCoupon.value);
        // console.log(itemPrice);
      } 
    }
    // total = old total + current item price
    total = total + itemPrice;
    // console.log(total);
  }
  // if a coupon has been passed as an argument AND the coupon type is total
  if(objCoupon && objCoupon.type == 'total'){
    // decrease the total by the value of the coupon
    total = total - objCoupon.value;
  }
  // return the total price of the cart (with the discount applied where applciable)
  return total.toFixed(2);
}
let objCoupon = {
  name:'20OFF',
  value:20,
  category:'food',
  type:'percentage'
};
let cartTotal = getTotalPrice(arrShoppingCart,objCoupon);
console.log(cartTotal);