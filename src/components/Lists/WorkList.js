import React, { Component } from "react";
import JobScopeList from "./JobScopeList";

class WorkList extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="flex flex-col py-2">
        <p className="list-separator">WORK EXPERIENCE</p>
        {data.map((workItem, index) => {
          return (
            <div key={`workContainer ${index}`}>
              <div className="grid grid-cols-2 grid-rows-2">
                <p className="list-title" key={`workCompany ${index}`}>
                  {workItem.data.workCompany}
                </p>
                <p className="list-subtitle" key={`workPosition${index}`}>
                  {workItem.data.workPosition}
                </p>
                <p className="list-date" key={`workPeriod ${index}`}>
                  {workItem.data.workFrom} - {workItem.data.workTo}
                </p>
              </div>
              <JobScopeList data={workItem.scope} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default WorkList;
