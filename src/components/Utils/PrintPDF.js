import React, { Component } from "react";
import ReactToPrint from "react-to-print";
import RenderGeneratedCV from "../Renders/RenderGeneratedCV";

class PrintPDF extends Component {
  render() {
    const { general, work, education, resetHandler, exampleHandler } =
      this.props;
    return (
      <div>
        <div className="flex flex-col p-4 ">
          <ReactToPrint
            trigger={() => {
              return (
                <button className="add-button flex-grow">Generate PDF</button>
              );
            }}
            content={() => this.componentRef}
          />
          <button
            onClick={() => resetHandler()}
            className="add-button flex-grow"
          >
            Reset
          </button>
          <button
            onClick={() => exampleHandler()}
            className="add-button flex-grow"
          >
            Load Example
          </button>
        </div>
        <div>
          <RenderGeneratedCV
            ref={(el) => (this.componentRef = el)}
            general={general}
            work={work}
            education={education}
          />
        </div>
      </div>
    );
  }
}

export default PrintPDF;
