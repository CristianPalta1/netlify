import React from "react";

import { Provider } from "react-redux";
import store from "./store";
// import Productos from "./components/Productos";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NoRuta from "./components/NoRuta";
import NuevoProducto from "./components/NuevoProducto";
import Home from "./pages/Home";
import Badges from "./pages/Formulario1"

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <h1>Bienvenidos a la clase de Redux</h1>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" exact component={Home} />
            <Route exact path="/formulario" exact component={Badges} />
            <Route exact path="/productos/nuevo" component={NuevoProducto} />
            <Route component={NoRuta} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
