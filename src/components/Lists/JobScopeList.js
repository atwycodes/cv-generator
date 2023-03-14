import React, { Component } from "react";

class JobScopeList extends Component {
  render() {
    const { data } = this.props; //this.state.work.scope
    return (
      <ul>
        {data.map((scopeItem) => {
          return <li>{scopeItem}</li>;
        })}
      </ul>
    );
  }
}

export default JobScopeList;
