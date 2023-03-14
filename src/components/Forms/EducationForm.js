import React, { Component } from "react";
import TemplateForm from "../Utils/TemplateForm";

class EducationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.educationFormId,
    };
  }
  render() {
    const { changeHandler, parentContainerClass = "form__container" } =
      this.props;

    const formFields = [
      { id: "educationLocation", type: "text", label: "Institution" },
      { id: "educationType", type: "text", label: "Type" },
      { id: "educationFrom", type: "text", label: "Start Date" },
      { id: "educationTo", type: "text", label: "End Date" },
    ];

    return (
      <div>
        <form>
          <fieldset className={parentContainerClass}>
            <legend>Education</legend>
            {formFields.map((formObj, index) => {
              return (
                <TemplateForm
                  changeHandler={(event) => changeHandler(event, this.state.id)}
                  key={index}
                  formId={formObj.id}
                  formType={formObj.type}
                  formLabel={formObj.label}
                />
              );
            })}
          </fieldset>
        </form>
      </div>
    );
  }
}

export default EducationForm;
