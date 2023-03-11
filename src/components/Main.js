import React, { Component } from 'react';
import GeneralForm from './Forms/GeneralForm';
import GeneralList from './Lists/GeneralList';
import WorkForm from './Forms/WorkForm';
import WorkList from './Lists/WorkList';
import baseCV from './Utils/baseCV';

class Main extends Component{
  constructor(props) {
    super(props)
  
    this.state = baseCV;

    this.handleGeneralChange = this.handleGeneralChange.bind(this)
    this.handleWorkChange = this.handleWorkChange.bind(this)
  }

  handleGeneralChange (event) {
    const {value, id} = event.target
    const obj = {...this.state.general}

    obj.data[id] = value

    this.setState({
      work: [{...this.state}]
    })
  }

  handleWorkChange (event, idCriteria) {
    const {value, id} = event.target
    console.log('changed: ', event.target, 'to:', value)

    const array = [...this.state.work]
    console.table('array', array)

    const i = array.findIndex((element, index) => {
      if (element.id === idCriteria) {
        console.log(element.id)
      }  

    })

    console.log(i)
    const obj = {...this.state.work[0].data}
    
    console.log('obj: ', obj);
    
    // this.setState({
    // })
  }

  render() {
    return (
      <div className='main'>
        <section className='all-forms__container'>

          <GeneralForm
            changeHandler = {(event) => this.handleGeneralChange(event``)}
          />

          <WorkForm
            changeHandler = {(event) => this.handleWorkChange(event, this.state.work[0].id)}
          />

        </section>


        <section className='generated-cv__container'>

          <GeneralList
            data = {this.state.general.data}
          />

          {/* <WorkList

          /> */}

        </section>
      </div>
    );
  }
}

export default Main;