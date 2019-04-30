import React from "react";

export default class Cart extends React.Component {
  showTotal() {
    return this.props.cartItems.reduce(
      (total, item) => total + item.price * item.count,
      0
    );
  }

  render() {
    return (
      <div>
        This is your shopping cart:
        {this.props.cartItems.map(cartItem =>
          CartItem({ item: cartItem, updateCart: this.props.updateCart })
        )}
        <h2>Total: {this.showTotal().toFixed(2)}</h2>
      </div>
    );
  }
}

function CartItem(props) {
  const { name, price, count = 0 } = props.item;

  return (
    <div>
      <span>name: {name}</span>
      <span>price: {price}</span>
      <span>count: {count}</span>
      <button onClick={() => props.updateCart(name, 1)}>+</button>
      <button onClick={() => props.updateCart(name, -1)}>-</button>
    </div>
  );
}
