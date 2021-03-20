import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import Product from "./pages/Product";
import Interact from "./pages/Interact";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/"
            component={Home} />
          <Route exact path="/allProducts"
            component={AllProducts} />
          <Route path="/product"
            component={Product} />
          <Route exact path="/interact"
            component={Interact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
