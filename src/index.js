import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];
const myWhishList = [];

console.log("Welcome to the your Shopee Cart!");

const item1 = await createItem("hotwheels ferrari", 20.99, 1);
const item2 = await createItem("hotwheels lamborghini", 39.99, 3);
const item3 = await createItem("hotwheels F1", 19.90, 2);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myWhishList, item3);

await cartService.removeItem(myCart, item2);

await cartService.displayCart(myCart);
// await cartService.deleteItem(myCart, item1.name);

await cartService.calculateTotal(myCart);