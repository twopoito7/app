import React, { Component } from "react";
export default class Products extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4">{`${this.props.count} items`}</div>
        <div className="col-md-4">
          <label>
            Filter
            <br />
            <select
              display="hidden"
              className="form-control"
              value={this.props.sort}
              onChange={this.props.handleSortChange}
            >
              <option value="">ALL</option>
              <option value="h">Hybrid</option>
              <option value="i">Indica</option>
              <option value="s">Sativa</option>
            </select>
          </label>
        </div>
        <div className="col-md-4">
          <br />
          <label>
            {" "}
            <select
              className="form-control"
              value={this.props.size}
              onChange={this.props.handleSizeChange}
            >
              <option value="">ALL</option>
              <option value="c">Concentrates</option>
              <option value="f">Flower</option>
              <option value="e">Edibles</option>
              <option value="v">Vape</option>
            </select>
          </label>
        </div>
      </div>
    );
  }
}
