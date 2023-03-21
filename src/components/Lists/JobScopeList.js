import React, { Component } from "react";

class JobScopeList extends Component {
  render() {
    const { data } = this.props; //this.state.work.scope
    return (
      <ul>
        {data.map((scopeItem, index) => {
          return (
            <li className="ml-6 list-disc text-sm" key={index}>
              {scopeItem.experience}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default JobScopeList;
