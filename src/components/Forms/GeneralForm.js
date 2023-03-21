import React, { Component } from "react";
import TemplateForm from "../Utils/TemplateForm";

class GeneralForm extends Component {
  render() {
    const { changeHandler } = this.props;

    const formFields = [
      { id: "generalName", type: "text", label: "Name" },
      { id: "generalEmail", type: "email", label: "Email" },
      { id: "generalPhoneNumber", type: "text", label: "Phone Number" },
      { id: "generalLocation", type: "text", label: "Location" },
    ];

    return (
      <form className="">
        <fieldset className="flex flex-col">
          <legend className="form-title pt-0">Personal Information</legend>
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
        </fieldset>
      </form>
    );
  }
}

export default GeneralForm;
