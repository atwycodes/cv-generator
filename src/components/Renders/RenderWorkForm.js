import React, { Component } from "react";
import WorkForm from "../Forms/WorkForm";

class RenderWorkForm extends Component {
  render() {
    const {
      workState,
      changeHandlerWork,
      changeHandlerScope,
      addHandlerScope,
      deleteHandlerScope,
      deleteHandlerWork,
    } = this.props;

    return (
      <>
        {workState.map((formObject, index) => {
          return (
            <form key={`work-form__container ${formObject.id}`}>
              <fieldset className="flex flex-col">
                <legend className="form-title">Work Experience</legend>
                <WorkForm
                  key={`WorkForm ${formObject.id}`}
                  scopeState={formObject.scope}
                  changeHandler={changeHandlerWork}
                  changeHandlerScope={changeHandlerScope}
                  deleteHandlerScope={deleteHandlerScope}
                  workFormId={formObject.id}
                />
                <button
                  className="add-button"
                  onClick={(event) => addHandlerScope(event, formObject.id)}
                >
                  Add Scope of Work
                </button>
                <button
                  className="delete-button"
                  onClick={(event) => deleteHandlerWork(event, formObject.id)}
                >
                  Remove Work Experience
                </button>
              </fieldset>
            </form>
          );
        })}
      </>
    );
  }
}

export default RenderWorkForm;
