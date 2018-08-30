import React, { Component } from "react";
import ResumeImage from "../images/resume.png";

class Resume extends Component {
  render() {
    return (
      <div>
        <div className="container p-3">
          <img className="img-fluid resume-img" 
          src={ResumeImage}
          alt="resumé"
          />
        </div>
      </div>
    );
  }
}

export default Resume;
