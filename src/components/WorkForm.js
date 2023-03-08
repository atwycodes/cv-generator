import React, { Component } from 'react'
import TemplateForm from './helpers/TemplateForm'

class WorkForm extends Component {
  render() {
    const {changeHandler, addFormHandler, parentContainerClass = 'form__container'} = this.props
    return (
      <div>
        <form>
          <fieldset className = {parentContainerClass}>
            <legend>Experience</legend>
            <TemplateForm
              changeHandler = {changeHandler}
              formId = 'workCompany'
              formType = 'text'
              formLabel = 'Company'
            />
            <TemplateForm
              changeHandler = {changeHandler}
              formId = 'workPosition'
              formType = 'text'
              formLabel = 'Position'
            />
            <TemplateForm
              changeHandler = {changeHandler}
              formId = 'workFrom'
              formType = 'text'
              formLabel = 'From'
            />
            <TemplateForm
              changeHandler = {changeHandler}
              formId = 'workTo'
              formType = 'text'
              formLabel = 'To'
            />
          </fieldset>
        </form>
        <button onClick={addFormHandler}>Add</button>
      </div>
    )
  }
}

export default WorkForm