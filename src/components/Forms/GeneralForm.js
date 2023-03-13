import React, { Component } from "react";
import TemplateForm from "../Utils/TemplateForm";

class GeneralForm extends Component {
  render() {
    const { changeHandler, parentContainerClass = "form__container" } =
      this.props;

    const formFields = [
      { id: "generalName", type: "text", label: "Name" },
      { id: "generalEmail", type: "email", label: "Email" },
      { id: "generalPhoneNumber", type: "text", label: "Phone Number" },
      { id: "generalLocation", type: "text", label: "Location" },
    ];

    return (
      <form>
        <fieldset className={parentContainerClass}>
          <legend>Personal Information</legend>
          {formFields.map((formObj, index) => {
            return (
              <TemplateForm
                changeHandler={changeHandler}
                key={index}
                formId={formObj.id}
                formType={formObj.type}
                formLabel={formObj.label}
              />
            );
          })}

          {/* <TemplateForm
            changeHandler = {changeHandler}
            formId = 'generalName'
            formType = 'text'
            formLabel = 'Name'
          /> */}
        </fieldset>
      </form>
    );
  }
}

export default GeneralForm;
