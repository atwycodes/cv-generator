import React, { Component } from 'react'
import TemplateForm from './helpers/TemplateForm'

class EducationForm extends Component {
  render() {
    const {changeHandler, parentContainerClass = 'form__container'} = this.props
    return (
      <form>
        <fieldset className = {parentContainerClass}>
        <legend>Education</legend>
          <TemplateForm
            changeHandler = {changeHandler}
            formId = 'educationShool'
            formType = 'text'
            formLabel = 'School / University'
          />
          <TemplateForm
            changeHandler = {changeHandler}
            formId = 'educationDegree'
            formType = 'text'
            formLabel = 'Education Level'
          />
          <TemplateForm
            changeHandler = {changeHandler}
            formId = 'educationFrom'
            formType = 'text'
            formLabel = 'From'
          />
          <TemplateForm
            changeHandler = {changeHandler}
            formId = 'educationTo'
            formType = 'text'
            formLabel = 'To'
          />
        </fieldset>
      </form>
    )
  }
}

export default EducationForm