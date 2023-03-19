import React, { Component } from "react";
import TemplateForm from "../Utils/TemplateForm";

class EducationForm extends Component {
  render() {
    const { changeHandlerEducation, educationFormId } = this.props;

    const formFields = [
      {
        id: "educationInstitution",
        type: "text",
        label: "University / School",
      },
      { id: "educationType", type: "text", label: "Degree / Course" },
      { id: "educationGraduation", type: "text", label: "Graduation Date" },
    ];

    return (
      <div>
        {formFields.map((formObj, index) => {
          return (
            <TemplateForm
              changeHandler={(event) =>
                changeHandlerEducation(event, educationFormId)
              }
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
