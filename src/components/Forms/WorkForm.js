import React, { Component } from 'react'
import TemplateForm from '../Utils/TemplateForm'

class WorkForm extends Component {
  render() {
    const {
      changeHandler, 
      parentContainerClass = 'form__container'
    } = this.props
    
    const formFields = [
      {id: 'workCompany', type: 'text', label: 'Company'},
      {id: 'workPosition', type: 'text', label: 'Position'},
      {id: 'workFrom', type: 'text', label: 'From'},
      {id: 'workTo', type: 'text', label: 'To'},
    ]

    return (
      <div>
        <form>
          <fieldset className = {parentContainerClass}>
            <legend>Experience</legend>
              {
                formFields.map((formObj, index) => {
                  return <TemplateForm 
                            changeHandler = {changeHandler}
                            key = {index}
                            formId = {formObj.id} 
                            formType = {formObj.type}
                            formLabel = {formObj.label}
                          /> 
                })
              }
          </fieldset>
        </form>
      </div>
    )
  }
}

export default WorkForm