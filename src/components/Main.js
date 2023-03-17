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
    this.handleWorkScopeChange = this.handleWorkScopeChange.bind(this);
    this.addWorkForm = this.addWorkForm.bind(this);
    this.deleteWorkForm = this.deleteWorkForm.bind(this);
    this.addScopeForm = this.addScopeForm.bind(this);
    this.deleteScope = this.deleteScope.bind(this);
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
          id: crypto.randomUUID(),
          data: {
            workCompany: "",
            workPosition: "",
            workFrom: "",
            workTo: "",
          },
          scope: [
            {
              id: crypto.randomUUID(),
              experience: "",
            },
          ],
        },
      ],
    }));
    console.log(this.state);
    console.log(this.state.work);
  }

  deleteWorkForm(event, workIdCriteria) {
    event.preventDefault();
    this.setState((prevState) => {
      const newWork = prevState.work.filter((workItem) => {
        if (workItem.id !== workIdCriteria) return workItem;
      });
      return { ...prevState, work: [...newWork] };
    });
  }

  handleWorkScopeChange(event, workIdCriteria, scopeIdCriteria) {
    const { value } = event.target;

    this.setState((prevState) => {
      const newWork = prevState.work.map((workItem) => {
        if (workItem.id === workIdCriteria) {
          const newScope = workItem.scope.map((scopeItem) => {
            if (scopeItem.id === scopeIdCriteria) {
              return { ...scopeItem, experience: value };
            }
            return scopeItem;
          });
          return { ...workItem, scope: [...newScope] };
        }
        return workItem;
      });
      return { ...prevState, work: [...newWork] };
    });

    console.log(event.target.value);
    console.log(this.state.work);
  }

  addScopeForm(event, workIdCriteria) {
    event.preventDefault();
    this.setState((prevState) => {
      const newWork = prevState.work.map((workItem) => {
        if (workItem.id === workIdCriteria) {
          return {
            ...workItem,
            scope: [
              ...workItem.scope,
              { id: crypto.randomUUID(), experience: "" },
            ],
          };
        }
        return workItem;
      });
      return { ...prevState, work: [...newWork] };
    });

    console.log(this.state);
  }

  deleteScope(event, workIdCriteria, scopeIdCriteria) {
    event.preventDefault();

    this.setState((prevState) => {
      const newWork = prevState.work.map((workItem) => {
        if (workItem.id === workIdCriteria) {
          // eslint-disable-next-line array-callback-return
          const newScope = workItem.scope.filter((scopeItem) => {
            if (scopeItem.id !== scopeIdCriteria) return scopeItem;
          });
          return { ...workItem, scope: [...newScope] };
        }
        return { ...workItem };
      });
      return { ...prevState, work: [...newWork] };
    });
  }

  render() {
    return (
      <div className="main">
        <section className="all-forms__container">
          <GeneralForm
            changeHandler={(event) => this.handleGeneralChange(event)}
          />

          <RenderWorkForm
            workState={this.state.work}
            changeHandlerWork={this.handleWorkChange}
            changeHandlerScope={this.handleWorkScopeChange}
            addHandlerScope={this.addScopeForm}
            deleteHandlerScope={this.deleteScope}
            deleteHandlerWork={this.deleteWorkForm}
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
