import React, { Component } from "react";
import ReactToPrint from "react-to-print";
import RenderGeneratedCV from "../Renders/RenderGeneratedCV";

class PrintPDF extends Component {
  render() {
    const { general, work, education } = this.props;
    return (
      <div>
        <div className="p-4 text-center">
          <ReactToPrint
            trigger={() => {
              return <button className="generate-button">Generate PDF</button>;
            }}
            content={() => this.componentRef}
          />
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
