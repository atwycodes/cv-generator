import React, { Component } from "react";

class TemplateForm extends Component {
  render() {
    const {
      changeHandler,
      formId,
      formType,
      formLabel,
      parentClass = "form__item-wrapper",
    } = this.props;

    return (
      <div className={parentClass}>
        <label htmlFor={formId}>{formLabel}</label>
        <input onChange={changeHandler} required type={formType} id={formId} />
      </div>
    );
  }
}

export default TemplateForm;
