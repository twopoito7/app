import React, { Component } from "react";

export default class Products extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4">{`${this.props.count} items available`}</div>

        <div className="col-md-4">
          <label>
            {" "}
            Filter
            <select
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
            </select>
          </label>
        </div>
      </div>
    );
  }
}
