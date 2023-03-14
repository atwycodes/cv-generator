import React, { Component } from "react";

class JobScopeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.workFormId,
    };
  }
  render() {
    const { changeHandlerScope, formId } = this.props;
    return (
      <input
        type="text"
        id={formId}
        onChange={(event) => changeHandlerScope(event, this.state.id)}
        placeholder="Scope of Work..."
      />
    );
  }
}

export default JobScopeForm;
