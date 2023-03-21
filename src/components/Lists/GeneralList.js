import React, { Component } from "react";

export class GeneralList extends Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        {Object.keys(data).map((key, index) => {
          return <p key={index}>{data[key]}</p>;
        })}
      </div>
    );
  }
}

export default GeneralList;
