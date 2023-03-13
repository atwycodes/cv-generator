import React, { Component } from "react";

class WorkList extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className={"work__container"}>
        {data.map((workItem, index) => {
          return (
            <div>
              <p>Company: {workItem.data.workCompany}</p>
              <p>Position: {workItem.data.workPosition}</p>
              <p>
                Period: {workItem.data.workFrom} - {workItem.data.workTo}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default WorkList;
