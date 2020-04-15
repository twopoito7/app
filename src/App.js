import React, { Component } from "react";
import Products from "./components/Products";
import Filter from "./components/Filter";
import Basket from "./components/Basket";
import styled from "styled-components";
import "./App.css";

const Col3 = styled.main`
  padding: 0px;
  font-weight: thin;
  font-size: 0.75em;
  text-align: left;
  color: none;
  position: fixed;
  top: 0px;
  left: 0;
  width: 200px;
  height: 100px;
  bottom: 0px;
  border: 0px solid #ffffff;
  padding-left: 0em;
  padding-top: 0.25em;
  max-width: 9.5em;
  height: 2em;
`;

const HeaderStyled = styled.main`
  width: 100%;
  margin: 0px;
  color: black;
  font-weight: thin;
  text-align: center;
  align-content: center;
`;

const ProductStyled = styled.div`
  margin: 0px;
  margin-right: 0px;
  margin-left: 75px;
  width: 75%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0px;
  position: absolute;
`;

class App extends Component {
  _isMounted = false;
  constructor() {
    super();
    this.state = {
      size: "",
      sort: "",
      cartItems: [],
      products: [],
      filteredProducts: []
    };
  }
  componentDidMount() {
    if (localStorage.getItem("cartItems")) {
      this.setState({
        cartItems: JSON.parse(localStorage.getItem("cartItems"))
      });
    }

    fetch("http://localhost:8000/products")
      .then(res => res.json())
      .catch(err =>
        fetch("db.json")
          .then(res => res.json())
          .then(data => data.products)
      )
      .then(data => {
        this.setState({ products: data });
        this.listProducts();
      });
  }

  handleRemoveFromCart = (e, product) => {
    this.setState(state => {
      const cartItems = state.cartItems.filter(a => a.id !== product.id);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return { cartItems: cartItems };
    });
  };
  handleAddToCart = (e, product) => {
    this.setState(state => {
      const cartItems = state.cartItems;
      let productAlreadyInCart = false;

      cartItems.forEach(cp => {
        if (cp.id === product.id) {
          cp.count += 1;
          productAlreadyInCart = true;
        }
      });

      if (!productAlreadyInCart) {
        cartItems.push({ ...product, count: 1 });
      }
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return { cartItems: cartItems };
    });
  };

  listProducts = () => {
    this.setState(state => {
      if (state.sort !== "") {
        state.products.sort((a, b) =>
          state.sort === "lowestprice"
            ? a.price > b.price
              ? 1
              : -1
            : a.price < b.price
            ? 1
            : -1
        );
      } else {
        state.products.sort((a, b) => (a.id > b.id ? 1 : -1));
      }
      if (state.size !== "") {
        return {
          filteredProducts: state.products.filter(
            a => a.availableSizes.indexOf(state.size.toUpperCase()) >= 0
          )
        };
      }
      return { filteredProducts: state.products };
    });
  };
  handleSortChange = e => {
    this.setState({ sort: e.target.value });
    this.listProducts();
  };
  handleSizeChange = e => {
    this.setState({ size: e.target.value });
    this.listProducts();
  };
  render() {
    return (
      <HeaderStyled className="container">
        <ProductStyled className="row">
          <div className="col-md-9">
            <Filter
              count={this.state.filteredProducts.length}
              handleSortChange={this.handleSortChange}
              handleSizeChange={this.handleSizeChange}
            />

            <Products
              products={this.state.filteredProducts}
              handleAddToCart={this.handleAddToCart}
            />
          </div>
          <Col3 className="col-md-3">
            <Basket
              cartItems={this.state.cartItems}
              handleRemoveFromCart={this.handleRemoveFromCart}
            />
          </Col3>
        </ProductStyled>
      </HeaderStyled>
    );
  }
}

export default App;
