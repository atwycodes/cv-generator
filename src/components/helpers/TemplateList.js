import React, { Component } from 'react'

export class TemplateList extends Component {
  render () {
    const {data, listClass} = this.props
    return (
      <div className={`${listClass}__container`}>
        {Object.keys(data).map((key,index) => {
          return <p key={index}>{data[key]}</p>
        })}
      </div>
    )
  }
}

export default TemplateList