import React, { Component } from "react";
import EducationForm from "../Forms/EducationForm";

class RenderEducationForm extends Component {
  render() {
    const { educationState, changeHandlerEducation, deleteHandlerEducation } =
      this.props;

    return (
      <>
        {educationState.map((formObject, index) => {
          return (
            <form key={`education-form__container ${formObject.id}`}>
              <fieldset className="flex flex-col">
                <legend className="form-title">Education</legend>
                <EducationForm
                  key={`EducationForm ${formObject.id}`}
                  changeHandlerEducation={changeHandlerEducation}
                  educationFormId={formObject.id}
                />
                <button
                  className="delete-button"
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
      </>
    );
  }
}

export default RenderEducationForm;
