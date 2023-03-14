import React, { Component } from "react";

class EducationList extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className={"education__container"}>
        {data.map((educationItem, index) => {
          return (
            <div>
              <p>School: {educationItem.data.educationLocation}</p>
              <p>Degree: {educationItem.data.educationType}</p>
              <p>
                Period: {educationItem.data.educationFrom}-
                {educationItem.data.educationTo}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default EducationList;
