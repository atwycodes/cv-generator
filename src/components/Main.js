import React, { Component } from "react";
import GeneralForm from "./Forms/GeneralForm";
import GeneralList from "./Lists/GeneralList";
import RenderWorkForm from "./Renders/RenderWorkForm";
import WorkList from "./Lists/WorkList";
import baseCV from "./Utils/baseCV";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = baseCV;

    this.handleGeneralChange = this.handleGeneralChange.bind(this);
    this.handleWorkChange = this.handleWorkChange.bind(this);
    this.addWorkForm = this.addWorkForm.bind(this);
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
    console.log(this.state.general);
  }

  handleWorkChange(event, idCriteria) {
    const { value, id } = event.target;

    this.setState((prevState) => {
      const newWork = prevState.work.map((workItem) => {
        if (workItem.id === idCriteria) {
          return { ...workItem, data: { ...workItem.data, [id]: value } };
        }
        return workItem;
      });
      return { ...prevState, work: [...newWork] };
    });
    console.log(this.state);
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
          />

          <button onClick={this.addWorkForm}>Add Work Experience</button>
        </section>
        <section className="generated-cv__container">
          <GeneralList data={this.state.general.data} />
          <WorkList data={this.state.work} />
        </section>
      </div>
    );
  }
}

export default Main;
