import React, { Component } from "react";
import TemplateForm from "../Utils/TemplateForm";

class EducationForm extends Component {
  render() {
    const { changeHandler, educationFormId } = this.props;

    const formFields = [
      { id: "educationInstitution", type: "text", label: "Company" },
      { id: "educationType", type: "text", label: "Position" },
      { id: "educationGraduation", type: "text", label: "From" },
    ];

    return (
      <div>
        {formFields.map((formObj, index) => {
          return (
            <TemplateForm
              changeHandler={(event) => changeHandler(event, educationFormId)}
              key={index}
              formId={formObj.id}
              formType={formObj.type}
              formLabel={formObj.label}
            />
          );
        })}
      </div>
    );
  }
}

export default EducationForm;
