import React, { Component } from "react";

class TemplateForm extends Component {
  render() {
    const { changeHandler, formId, formType, formLabel } = this.props;

    return (
      <input
        className="input-element"
        onChange={changeHandler}
        placeholder={formLabel}
        required
        type={formType}
        id={formId}
      />
    );
  }
}

export default TemplateForm;
