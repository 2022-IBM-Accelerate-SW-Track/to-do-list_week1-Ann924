import React, { Component } from 'react';
import "./About.css";
import my_image from "../assets/my_image.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
          <div className="centered">
            <img
              src={my_image}
              className="profile_image"
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Ann Li</div>
            <div className="brief_description">
            I am a rising junior attending the 
            University of Virginia as a double major in computer science
            and cognitive science. A fun fact about me is that I started
            ballroom dancing in college.
            </div>
          </div>
        </div>
      </div>
    )
  }
}