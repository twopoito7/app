import React, { Component } from "react";
import styled from "styled-components";

const ItemTitle = styled.label`
  background: white;
  color: black;
  align-content: center;
  margin-left: 0;
  padding: 0px;
  border: 0px;
  border-top: 0px;
  font-family: Open Sans;
`;

const StartTime = styled.select`
  background: white;
  padding: 0px;
  border: 0px solid black;
  width: 100px;
  color: black;
  font-weight: thin;
  font-size: 1em;
  text-align: left;
  color: none;
  font-family: Open Sans;
`;

const StyledDiv = styled.div`
  background: white;
  padding: 0px;
  border: 0px solid black;
  color: black;
  font-weight: thin;
  font-size: 1em;
  text-align: center;
  color: none;
  font-family: Open Sans;
`;

export default class Products extends Component {
  render() {
    return (
      <div className="row">
        <StyledDiv className="col-md-4">{`${
          this.props.count
        } items available`}</StyledDiv>

        <div className="col-md-4">
          <ItemTitle>
            {" "}
            Filter
            <StartTime
              className="form-control"
              value={this.props.size}
              onChange={this.props.handleSizeChange}
            >
              <option value="">ALL</option>
              <option value="x"> </option>
              <option value="s"> </option>
              <option value="m"> </option>
              <option value="l"> </option>
              <option value="xl"> </option>
              <option value="xxl" />
            </StartTime>
          </ItemTitle>
        </div>
      </div>
    );
  }
}
