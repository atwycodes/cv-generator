import React, { Component } from 'react'
import TemplateForm from './helpers/TemplateForm'

class GeneralForm extends Component {
  render() {
    const {changeHandler, parentContainerClass = 'form__container'} = this.props
    return (
      <form>
        <fieldset className = {parentContainerClass}>
        <legend>Personal Information</legend>
          <TemplateForm
            changeHandler = {changeHandler}
            formId = 'generalName'
            formType = 'text'
            formLabel = 'Name'
          />
          <TemplateForm
            changeHandler = {changeHandler}
            formId = 'generalEmail'
            formType = 'email'
            formLabel = 'Email'
          />
          <TemplateForm
            changeHandler = {changeHandler}
            formId = 'generalPhoneNumber'
            formType = 'text'
            formLabel = 'Phone Number'
          />
          <TemplateForm
            changeHandler = {changeHandler}
            formId = 'generalLocation'
            formType = 'text'
            formLabel = 'Location'
          />
        </fieldset>
      </form>
    )
  }
}

export default GeneralForm