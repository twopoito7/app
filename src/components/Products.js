import React, { Component } from "react";
import util from "../util";
import styled from "styled-components";

const MainSection = styled.div`
  margin: 0px;
  width: 100%;
  color: black;
  font-weight: thin;
  font-family: Open Sans;
  font-size: 15px;
  align-content: center;
`;
const BuyButton = styled.button`
  padding: 5px;
  background: black;
  font-weight: 300;
  color: white;
`;

const ProductTitle = styled.p`
  background: white;
  color: black;
`;

const Thumbdiv = styled.div`
  background: white;
  color: black;
`;
export default class Products extends Component {
  render() {
    const productItems = this.props.products.map(product => (
      <MainSection className="col-md-4" key={product.id}>
        <Thumbdiv className="thumbnail text-center">
          <a
            href={`#${product.id}`}
            onClick={e => this.props.handleAddToCart(e, product)}
          >
            <img
              src={`products/${product.sku}_2.jpg`}
              alt={product.title}
              style={{ width: 300, height: 300, backgroundColor: "#ffffff" }}
            />
            <ProductTitle>{product.title}</ProductTitle>
          </a>
          <b>{util.formatCurrency(product.price)}</b>
          <BuyButton
            className="btn btn-primary"
            onClick={e => this.props.handleAddToCart(e, product)}
          >
            Add to cart
          </BuyButton>
        </Thumbdiv>
      </MainSection>
    ));

    return <div className="row">{productItems}</div>;
  }
}
