import React, { Component } from "react";

class JobScopeList extends Component {
  render() {
    const { data } = this.props; //this.state.work.scope
    return (
      <ul>
        {data.map((scopeItem, index) => {
          return <li key={index}>{scopeItem.experience}</li>;
        })}
      </ul>
    );
  }
}

export default JobScopeList;
