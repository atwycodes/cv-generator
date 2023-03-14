import React, { Component } from "react";
import EducationForm from "../Forms/EducationForm";

export class RenderEducationForm extends Component {
  render() {
    const { educationFormState, changeHandler } = this.props;
    return (
      <div>
        {educationFormState.map((formObject) => {
          return (
            <EducationForm
              key={formObject.id}
              changeHandler={changeHandler}
              educationFormId={formObject.id}
            />
          );
        })}
      </div>
    );
  }
}

export default RenderEducationForm;
