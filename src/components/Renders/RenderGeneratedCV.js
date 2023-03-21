import React, { Component } from "react";
import GeneralList from "../Lists/GeneralList";
import WorkList from "../Lists/WorkList";
import EducationList from "../Lists/EducationList";

class RenderGeneratedCV extends Component {
  render() {
    const { general, work, education } = this.props;
    return (
      <div className="text-red-500 border-2 border-rose-500 flex flex-col a4-page-size">
        <GeneralList data={general} />
        <WorkList data={work} />
        <EducationList data={education} />
      </div>
    );
  }
}

export default RenderGeneratedCV;
