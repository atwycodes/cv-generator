import React, { Component } from "react";
import baseCV from "./Utils/baseCV";
import GeneralForm from "./Forms/GeneralForm";
import GeneralList from "./Lists/GeneralList";
import RenderWorkForm from "./Renders/RenderWorkForm";
import WorkList from "./Lists/WorkList";
import RenderEducationForm from "./Renders/RenderEducationForm";
import EducationList from "./Lists/EducationList";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = baseCV;

    this.handleGeneralChange = this.handleGeneralChange.bind(this);
    this.handleWorkChange = this.handleWorkChange.bind(this);
    this.handleScopeChange = this.handleScopeChange.bind(this);
    this.addWorkForm = this.addWorkForm.bind(this);
    this.handleEducationChange = this.handleEducationChange.bind(this);
    this.addEducationForm = this.addEducationForm.bind(this);
  }

  handleGeneralChange(event) {
    const { value, id } = event.target;

    this.setState((prevState) => {
      return {
        ...prevState,
        general: {
          data: {
            ...prevState.general.data,
            [id]: value,
          },
        },
      };
    });
  }

  handleWorkChange(event, idCriteria) {
    const { id, value } = event.target;

    this.setState((prevState) => {
      const newWork = prevState.work.map((workItem) => {
        if (workItem.id === idCriteria) {
          return { ...workItem, data: { ...workItem.data, [id]: value } };
        }
        return workItem;
      });
      return { ...prevState, work: [...newWork] };
    });
  }

  addWorkForm() {
    this.setState((prevState) => ({
      ...prevState,
      work: [
        ...prevState.work,
        {
          id: crypto.randomUUID(), // <WorkForm/> no. 1
          data: {
            workCompany: "",
            workPosition: "",
            workFrom: "",
            workTo: "",
          },
        },
      ],
    }));
  }

  handleScopeChange(event, idCriteria) {
    const { value } = event.target;

    this.setState((prevState) => {
      const newWork = prevState.work.map((workItem) => {
        if (workItem.id === idCriteria) {
          return { ...workItem, scope: [...workItem.scope, value] };
        }
        return workItem;
      });
      return { ...prevState, work: [...newWork] };
    });
  }

  handleEducationChange(event, idCriteria) {
    const { value, id } = event.target;

    this.setState((prevState) => {
      const newEducation = prevState.education.map((educationItem) => {
        if (educationItem.id === idCriteria) {
          return {
            ...educationItem,
            data: { ...educationItem.data, [id]: value },
          };
        }
        return educationItem;
      });
      return { ...prevState, education: [...newEducation] };
    });
  }

  addEducationForm() {
    this.setState((prevState) => ({
      ...prevState,
      education: [
        ...prevState.education,
        {
          id: crypto.randomUUID(),
          data: {
            educationLocation: "",
            educationType: "",
            educationFrom: "",
            educationTo: "",
          },
        },
      ],
    }));
  }

  render() {
    return (
      <div className="main">
        <section className="all-forms__container">
          <GeneralForm
            changeHandler={(event) => this.handleGeneralChange(event)}
          />

          <RenderWorkForm
            workFormState={this.state.work}
            changeHandler={this.handleWorkChange}
            changeHandlerScope={this.handleScopeChange}
          />
          <button onClick={this.addWorkForm}>Add Work Experience</button>

          <RenderEducationForm
            educationFormState={this.state.education}
            changeHandler={this.handleEducationChange}
          />
          <button onClick={this.addEducationForm}>Add Education</button>
        </section>

        <section className="generated-cv__container">
          <GeneralList data={this.state.general.data} />
          <WorkList data={this.state.work} />
          <EducationList data={this.state.education} />
        </section>
      </div>
    );
  }
}

export default Main;
