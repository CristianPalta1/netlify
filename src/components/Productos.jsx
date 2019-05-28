import React, { Component } from "react";
import { connect } from "react-redux";
import { mostrarProductos } from "../actions/productosActions";
import Producto from "./Producto";


class Productos extends Component {
  componentDidMount() {
    this.props.mostrarProductos();
  }
  render() {
    const { productos } = this.props;
    return (
      <div className="container">
        <h1>Listado de productos</h1>
        {productos.map((producto, index) => {
          return <Producto key={index} producto={producto} />;
        })}
      </div>
    );
  }
}

const mapStateToProp = state => {
  return {
    productos: state.productos.productos
  };
};

export default connect(
  mapStateToProp,
  { mostrarProductos }
)(Productos);
