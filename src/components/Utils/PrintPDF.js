import React, { Component } from "react";
import ReactToPrint from "react-to-print";
import RenderGeneratedCV from "../Renders/RenderGeneratedCV";

class PrintPDF extends Component {
  render() {
    const { general, work, education } = this.props;
    return (
      <div>
        <div className="flex p-4 ">
          <ReactToPrint
            trigger={() => {
              return (
                <button className="add-button flex-grow">Generate PDF</button>
              );
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
