import React, { Component } from "react";
import GeneralForm from "./Forms/GeneralForm";
import RenderWorkForm from "./Renders/RenderWorkForm";
import baseCV from "./Utils/baseCV";
import RenderEducationForm from "./Renders/RenderEducationForm";
import PrintPDF from "./Utils/PrintPDF";
import exampleCV from "./Utils/exampleCV";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = baseCV;

    this.handleGeneralChange = this.handleGeneralChange.bind(this);
    this.handleWorkChange = this.handleWorkChange.bind(this);
    this.addWorkForm = this.addWorkForm.bind(this);
    this.deleteWorkForm = this.deleteWorkForm.bind(this);
    this.handleWorkScopeChange = this.handleWorkScopeChange.bind(this);
    this.addScopeForm = this.addScopeForm.bind(this);
    this.deleteScope = this.deleteScope.bind(this);
    this.handleEducationChange = this.handleEducationChange.bind(this);
    this.addEducationForm = this.addEducationForm.bind(this);
    this.deleteEducationForm = this.deleteEducationForm.bind(this);
    this.handleResetCV = this.handleResetCV.bind(this);
    this.handleUseExampleCV = this.handleUseExampleCV.bind(this);
  }

  handleResetCV() {
    this.setState(() => {
      return {
        general: {
          ...baseCV.general,
        },
        work: [...baseCV.work],
        education: [...baseCV.education],
      };
    });
  }

  handleUseExampleCV() {
    this.setState(() => {
      return {
        general: {
          ...exampleCV.general,
        },
        work: [...exampleCV.work],
        education: [...exampleCV.education],
      };
    });
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

  handleWorkChange(event, workIdCriteria) {
    const { value, id } = event.target;

    this.setState((prevState) => {
      const newWork = prevState.work.map((workItem) => {
        if (workItem.id === workIdCriteria) {
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

  handleEducationChange(event, educationIdCriteria) {
    event.preventDefault();
    const { value, id } = event.target;

    this.setState((prevState) => {
      const newEducation = prevState.education.map((educationItem) => {
        if (educationItem.id === educationIdCriteria) {
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
            educationInstitution: "",
            educationType: "",
            educationGraduation: "",
          },
        },
      ],
    }));
  }

  deleteEducationForm(event, educationIdCriteria) {
    event.preventDefault();
    this.setState((prevState) => {
      const newEducation = prevState.education.filter((educationItem) => {
        if (educationItem.id !== educationIdCriteria) return educationItem;
      });
      return { ...prevState, education: [...newEducation] };
    });
  }

  render() {
    return (
      <div className="py-10">
        <div className="flex flex-wrap justify-center gap-16">
          <div className="flex w-21cm flex-col rounded-lg border border-gray-300 bg-gray-300 p-4 shadow-md">
            <GeneralForm
              changeHandler={(event) => this.handleGeneralChange(event)}
            />
            <RenderWorkForm
              workState={this.state.work}
              changeHandlerWork={this.handleWorkChange}
              deleteHandlerWork={this.deleteWorkForm}
              changeHandlerScope={this.handleWorkScopeChange}
              addHandlerScope={this.addScopeForm}
              deleteHandlerScope={this.deleteScope}
            />
            <button className="add-button" onClick={this.addWorkForm}>
              Add Work Experience
            </button>
            <RenderEducationForm
              educationState={this.state.education}
              changeHandlerEducation={this.handleEducationChange}
              deleteHandlerEducation={this.deleteEducationForm}
            />
            <button className="add-button" onClick={this.addEducationForm}>
              Add Education
            </button>
          </div>
          <PrintPDF
            resetHandler={this.handleResetCV}
            exampleHandler={this.handleUseExampleCV}
            general={this.state.general.data}
            work={this.state.work}
            education={this.state.education}
          />
        </div>
      </div>
    );
  }
}

export default Main;
