import React, { Component } from "react";
import JobScopeList from "./JobScopeList";

class WorkList extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className={"work__container"}>
        {data.map((workItem, index) => {
          return (
            <div className="work__wrapper" key={`workContainer ${index}`}>
              <p key={`workCompany ${index}`}>
                Company: {workItem.data.workCompany}
              </p>
              <p key={`workPosition${index}`}>
                Position: {workItem.data.workPosition}
              </p>
              <p key={`workPeriod ${index}`}>
                Period: {workItem.data.workFrom} - {workItem.data.workTo}
              </p>
              <JobScopeList data={workItem.scope} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default WorkList;
