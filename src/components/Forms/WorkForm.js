import React, { Component } from "react";
import TemplateForm from "../Utils/TemplateForm";
import JobScopeForm from "./JobScopeForm";

class WorkForm extends Component {
  render() {
    const {
      changeHandler,
      workFormId,
      scopeState,
      changeHandlerScope,
      deleteHandlerScope,
    } = this.props;

    const formFields = [
      { id: "workCompany", type: "text", label: "Company" },
      { id: "workPosition", type: "text", label: "Position" },
      { id: "workFrom", type: "text", label: "From" },
      { id: "workTo", type: "text", label: "To" },
    ];

    return (
      <div className="grid grid-cols-2">
        {formFields.map((formObj, index) => {
          return (
            <TemplateForm
              changeHandler={(event) => changeHandler(event, workFormId)}
              key={index}
              formId={formObj.id}
              formType={formObj.type}
              formLabel={formObj.label}
            />
          );
        })}
        <JobScopeForm
          scopeState={scopeState}
          changeHandlerScope={changeHandlerScope}
          workFormId={workFormId}
          deleteHandlerScope={deleteHandlerScope}
        />
      </div>
    );
  }
}

export default WorkForm;
