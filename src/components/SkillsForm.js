import React, { Component } from 'react'
import TemplateForm from './helpers/TemplateForm'

class SkillsForm extends Component {
  render() {
    const {changeHandler, parentContainerClass = 'form__container'} = this.props
    return (
      <form>
        <fieldset className = {parentContainerClass}>
        <legend>Skills</legend>
          <TemplateForm
            changeHandler = {changeHandler}
            formId = 'skillPoint'
            formType = 'text'
            formLabel = 'Skill 1'
          />
        </fieldset>
      </form>
    )
  }
}

export default SkillsForm