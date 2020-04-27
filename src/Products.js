import React, { Component } from "react";
import styled from "styled-components";

const MainSection = styled.div`
  margin: 30px;
  width: 100%;
  color: black;
  font-weight: thin;
  font-family: Open Sans;
  font-size: 15px;
  align-content: center;
`;

const ProductTitle = styled.p`
  background: white;
  color: black;
`;
const Productt = styled.p`
  background: white;
  color: black;
  font-weight: bold;
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
          <Productt>{product.title}</Productt>
          <img
            src={`${product.img}`}
            alt={product.title}
            style={{ width: 300, height: 300, backgroundColor: "#ffffff" }}
          />
          <ProductTitle>{product.description}</ProductTitle>
        </Thumbdiv>
        <br />
      </MainSection>
    ));

    return <div className="row">{productItems}</div>;
  }
}
