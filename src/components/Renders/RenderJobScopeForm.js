import React, { Component } from "react";
import JobScopeForm from "../Forms/JobScopeForm";

class RenderJobScopeForm extends Component {
  render() {
    const { workState, changeHandlerScope } = this.props;
    return (
      <div>
        {workState.map((formObject, index) => {
          return (
            <JobScopeForm
              key={`ScopeForm ${index}`}
              changeHandlerScope={changeHandlerScope}
              workFormId={formObject.id}
              scopeState={formObject.scope}
            />
          );
        })}
      </div>
    );
  }
}

export default RenderJobScopeForm;
