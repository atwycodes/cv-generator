import React, { Component } from "react";

class EducationList extends Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        <p>---Education---</p>
        {data.map((educationItem, index) => {
          return (
            <div key={`workContainer ${index}`}>
              <p key={`educationInstitution ${index}`}>
                School: {educationItem.data.educationInstitution}
              </p>
              <p key={`educationType ${index}`}>
                Degree: {educationItem.data.educationType}
              </p>
              <p key={`educationGraduation ${index}`}>
                Grad Date: {educationItem.data.educationGraduation}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default EducationList;
