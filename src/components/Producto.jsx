import React, { Component } from "react";

class Producto extends Component {
  render() {
    const { producto } = this.props;
    return (
      <li>
        <p>{producto.nombre}</p>
      </li>
    );
  }
}

export default Producto;
