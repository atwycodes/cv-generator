import React, { Component } from "react";
import GeneralList from "../Lists/GeneralList";
import WorkList from "../Lists/WorkList";
import EducationList from "../Lists/EducationList";

class RenderGeneratedCV extends Component {
  render() {
    const { general, work, education } = this.props;
    return (
      <div className="a4-page-size flex flex-col border border-black p-6 shadow-sm shadow-black">
        <GeneralList data={general} />
        <WorkList data={work} />
        <EducationList data={education} />
      </div>
    );
  }
}

export default RenderGeneratedCV;
