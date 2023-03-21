import React, { Component } from "react";

export class JobScopeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.workFormId,
    };
  }
  render() {
    const { scopeState, changeHandlerScope, deleteHandlerScope } = this.props;
    return (
      <>
        {scopeState.map((scopeItem, index) => {
          return (
            <div className="col-span-2 flex" key={`scopeForm ${index}`}>
              <input
                className="input-element flex-grow"
                placeholder="Enter job scope of works..."
                type="text"
                onChange={(event) =>
                  changeHandlerScope(event, this.state.id, scopeItem.id)
                }
              />
              <button
                className="delete-button"
                onClick={(event) => {
                  deleteHandlerScope(event, this.state.id, scopeItem.id);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </>
    );
  }
}

export default JobScopeForm;
