import React from "react";
import ItemList from "./components/ItemList";
import Cart from "./components/Cart";
import { items } from "./appData";

export default class Shop extends React.Component {
  state = { items: items, cart: [] };

  addToCart = item => {
    let index = -1;
    for (let i = 0; i < this.state.cart.length; i++) {
      if (this.state.cart[i].name === item.name) {
        index = i;
        break;
      }
    }
    let cart = this.state.cart;
    if (index > -1) {
      cart[index].count++;
    } else {
      cart.push({ ...item, count: 1 });
    }
    this.setState({ cart });
  };

  updateCart = (name, offset) => {
    let cart = this.state.cart;
    let index = -1;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].name === name) {
        index = i;
        break;
      }
    }
    cart[index].count += offset;
    if (cart[index].count === 0) {
      cart.splice(index, 1);
    }
    this.setState({ cart });
  };

  render() {
    return (
      <div>
        <ItemList items={items} addToCart={this.addToCart} />
        <Cart cartItems={this.state.cart} updateCart={this.updateCart} />
      </div>
    );
  }
}
