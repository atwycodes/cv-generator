import React, { Component } from "react";

export class GeneralList extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="flex flex-col gap-2 border-b-2 border-black py-2">
        <p className="text-3xl font-bold">{data.generalName}</p>
        <div className="flex gap-4">
          <p className="text-lg">{data.generalEmail}</p>
          <li className="text-lg">{data.generalPhoneNumber}</li>
          <li className="text-lg">{data.generalLocation}</li>
        </div>
        {/* {Object.keys(data).map((key, index) => {
          return (
            <p className="text-blue-500" key={index}>
              {data[key]}
            </p>
          );
        })} */}
      </div>
    );
  }
}

export default GeneralList;
