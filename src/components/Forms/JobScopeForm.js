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
      <div>
        {scopeState.map((scopeItem, index) => {
          return (
            <div key={`scopeForm ${index}`}>
              <input
                placeholder="Enter job scope of works..."
                type="text"
                onChange={(event) =>
                  changeHandlerScope(event, this.state.id, scopeItem.id)
                }
              />
              <button
                onClick={(event) => {
                  console.log("to delete: ", scopeItem.id);
                  console.log(this.state.id);
                  deleteHandlerScope(event, this.state.id, scopeItem.id);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default JobScopeForm;
