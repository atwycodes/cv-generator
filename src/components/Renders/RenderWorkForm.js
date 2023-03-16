import React, { Component } from "react";
import WorkForm from "../Forms/WorkForm";

class RenderWorkForm extends Component {
  render() {
    const {
      workState,
      changeHandlerWork,
      changeHandlerScope,
      addHandlerScope,
    } = this.props;

    return (
      <div>
        {workState.map((formObject, index) => {
          return (
            <form
              key={`work-form__container ${formObject.id}`}
              className="work-form__container"
            >
              <fieldset>
                <legend>Work Experience</legend>
                <WorkForm
                  key={`WorkForm ${formObject.id}`}
                  scopeState={formObject.scope}
                  changeHandler={changeHandlerWork}
                  changeHandlerScope={changeHandlerScope}
                  workFormId={formObject.id}
                />
                <button
                  onClick={(event) => {
                    addHandlerScope(event, formObject.id);
                  }}
                >
                  Add duty
                </button>
              </fieldset>
            </form>
          );
        })}
      </div>
    );
  }
}

export default RenderWorkForm;
