import React, { Component } from 'react';
import './App.css';
import GeneralForm from './components/GeneralForm';
import WorkForm from './components/WorkForm';
import EducationForm from './components/EducationForm';
import SkillsForm from './components/SkillsForm';
import TemplateList from './components/helpers/TemplateList';

class App extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
      // general: ['Andrew Tan', 'andrewwytan@gmail.com', '012 515 8462', 'Shah Alam, MY'],
      general: {
        id: '',
        data: {}
      },
      work: {
        id: '',
        data: {}
      },
      education: {
        id: '',
        data: {}
      },
      skills: {
        id: '',
        data: {}
      },
      workFormList: [],
      // educationFormList: [],
      // skillsFormList: [],
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleAddForm = this.handleAddForm.bind(this)
  }

  handleChange (event, type) {
    const {value, id} = event.target  
    const obj = {...this.state[type]}
    obj[id] = value
    console.log(this.state[type])
    this.setState({
      [type]: {...obj}
    })
  }

  handleAddForm (type) {
    if (type === 'work') {
      console.log(this.state.workFormList)
      this.setState(prevState => ({
        workFormList: [...prevState.workFormList, 
        <WorkForm
          addFormHandler = {() => this.handleAddForm('work')}
          changeHandler = {(event) => this.handleChange(event, 'work')}
        />]
      }))
    }



    // if (type === 'education') {
    //   this.setState(prevState => ({
    //     educationFormList: [...prevState.educationFormList, 
    //     <EducationForm
    //       addFormHandler = {() => this.handleAddForm('education')}
    //       changeHandler = {(event) => this.handleChange(event, 'education')}
    //     />]
    //   }))
    // }
    // if (type === 'skills') {
    //   this.setState(prevState => ({
    //     skillsFormList: [...prevState.skillsFormList, 
    //     <SkillsForm
    //       addFormHandler = {() => this.handleAddForm('skills')}
    //       changeHandler = {(event) => this.handleChange(event, 'skills')}
    //     />]
    //   }))
    // }
  }

  render() {
    return (
      <div className="App">
        <section className='all-forms__container'>
          <GeneralForm
            changeHandler = {(event) => this.handleChange(event, 'general')}
          />
          <WorkForm
            addFormHandler = {() => this.handleAddForm('work')}
            changeHandler = {(event) => this.handleChange(event, 'work')}
          />
          {/* <EducationForm
            changeHandler = {(event) => this.handleChange(event, 'education')}
          />
          <SkillsForm
            changeHandler = {(event) => this.handleChange(event, 'skills')}
          /> */}
        </section>
        <section className='generated-cv__container'>
          <TemplateList
            listClass = 'general'
            data = {this.state.general}
          />
          <TemplateList
            listClass = 'work'
            data = {this.state.work}
          />
          {/* <TemplateList
            listClass = 'education'
            data = {this.state.education}
          />
          <TemplateList
            listClass = 'skills'
            data = {this.state.skills}
          /> */}
        </section>
      </div>
    );
  }
}

export default App;