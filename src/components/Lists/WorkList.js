import React, { Component } from 'react'

class WorkList extends Component {
  render () {
    const {data} = this.props
    return (
      <div className={'work__container'}>
        {Object.keys(data).map((key,index) => {
          return <p key={index}>{data[key]}</p>
        })}
      </div>
    )
  }
}

export default WorkList