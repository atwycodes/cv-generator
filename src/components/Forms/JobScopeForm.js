import React, { Component } from "react";

export class JobScopeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.workFormId,
    };
  }
  render() {
    const { changeHandlerScope, scopeState } = this.props;
    return (
      <div>
        {scopeState.map((scopeItem, index) => {
          return (
            <input
              key={`scopeForm ${index}`}
              placeholder="Enter job scope of works..."
              type="text"
              onChange={(event) =>
                changeHandlerScope(event, this.state.id, scopeItem.id)
              }
            />
          );
        })}
      </div>
    );
  }
}

export default JobScopeForm;
