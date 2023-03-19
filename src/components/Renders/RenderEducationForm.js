import React, { Component } from "react";
import EducationForm from "../Forms/EducationForm";

class RenderEducationForm extends Component {
  render() {
    const { educationState, changeHandlerEducation, deleteHandlerEducation } =
      this.props;

    return (
      <div>
        {educationState.map((formObject, index) => {
          return (
            <form
              key={`education-form__container ${formObject.id}`}
              className="education-form__container"
            >
              <fieldset>
                <legend>Education</legend>
                <EducationForm
                  key={`EducationForm ${formObject.id}`}
                  changeHandlerEducation={changeHandlerEducation}
                  educationFormId={formObject.id}
                />
                <button
                  onClick={(event) =>
                    deleteHandlerEducation(event, formObject.id)
                  }
                >
                  Remove Education
                </button>
              </fieldset>
            </form>
          );
        })}
      </div>
    );
  }
}

export default RenderEducationForm;
