import React, { Component } from "react";

class EducationList extends Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        <p className="list-separator">EDUCATION</p>
        {data.map((educationItem, index) => {
          return (
            <div className="list-parent" key={`workContainer ${index}`}>
              <p className="list-title" key={`educationInstitution ${index}`}>
                {educationItem.data.educationInstitution}
              </p>
              <p className="list-subtitle" key={`educationType ${index}`}>
                {educationItem.data.educationType}
              </p>
              <p className="list-date" key={`educationGraduation ${index}`}>
                {educationItem.data.educationGraduation}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default EducationList;
