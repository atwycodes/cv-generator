import React, { Component } from "react";
import EducationForm from "../Forms/EducationForm";

class RenderEducationForm extends Component {
  render() {
    const { educationState, changeHandler } = this.props;

    return (
      <div>
        {educationState.map((formObject, index) => {
          return (
            <form
              key={`work-form__container ${formObject.id}`}
              className="work-form__container"
            >
              <fieldset>
                <legend>Work Experience</legend>
                <EducationForm
                  key={`EducationForm ${formObject.id}`}
                  changeHandler={changeHandler}
                  educationFormId={formObject.id}
                />
              </fieldset>
            </form>
          );
        })}
      </div>
    );
  }
}

export default RenderEducationForm;
