import React from "react";

export default class ItemList extends React.Component {
  state = { items: this.props.items };

  render() {
    const { items = [] } = this.state;
    return (
      <div>
        {items.map(item => (
          <Item item={item} addToCart={this.props.addToCart} />
        ))}
      </div>
    );
  }
}

class Item extends React.Component {
  render() {
    const { name, price } = this.props.item;
    return (
      <div style={{ display: "flex" }}>
        <span style={{ flex: "1 1", textAlign: "left" }}>name: {name}</span>
        <span style={{ flex: "1 1", textAlign: "left" }}>price: {price}</span>
        <button onClick={() => this.props.addToCart(this.props.item)}>
          ADD
        </button>
      </div>
    );
  }
}
