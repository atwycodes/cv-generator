import React, { Component } from "react";
import WorkForm from "../Forms/WorkForm";
import JobScopeForm from "../Forms/JobScopeForm";

export class RenderWorkForm extends Component {
  render() {
    const { workFormState, changeHandler, changeHandlerScope } = this.props;
    return (
      <div>
        {workFormState.map((formObject, index) => {
          return (
            <form>
              <WorkForm
                key={formObject.id}
                changeHandler={changeHandler}
                workFormId={formObject.id}
              />
              <JobScopeForm
                key={index}
                changeHandlerScope={changeHandlerScope}
                workFormId={formObject.id}
              />
            </form>
          );
        })}
      </div>
    );
  }
}

export default RenderWorkForm;
