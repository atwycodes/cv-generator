import React, { Component } from "react";
import WorkForm from "../Forms/WorkForm";

export class RenderWorkForm extends Component {
  render() {
    const { workFormState, changeHandler } = this.props;
    return (
      <div>
        {workFormState.map((formObject) => {
          return (
            <WorkForm
              key={formObject.id}
              changeHandler={changeHandler}
              workFormId={formObject.id}
            />
          );
        })}
      </div>
    );
  }
}

export default RenderWorkForm;
