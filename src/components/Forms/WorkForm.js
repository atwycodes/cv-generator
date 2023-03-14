import React, { Component } from "react";
import TemplateForm from "../Utils/TemplateForm";

class WorkForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.workFormId,
    };
  }
  render() {
    const { changeHandler, parentContainerClass = "form__container" } =
      this.props;

    const formFields = [
      { id: "workCompany", type: "text", label: "Company" },
      { id: "workPosition", type: "text", label: "Position" },
      { id: "workFrom", type: "text", label: "From" },
      { id: "workTo", type: "text", label: "To" },
    ];

    return (
      <fieldset className={parentContainerClass}>
        <legend>Work Experience</legend>
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
    );
  }
}

export default WorkForm;
