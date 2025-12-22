import React from "react";
import { Link } from "react-router-dom";

// ABOUT US SECTION
export default function AboutUs() {
  return (
    <div className="AboutUs-Section" id="AboutUs">
      <div className="WRAPPER">
        <div className="sidePiece"></div>
        <div className="img">
          <div className="backgroundFX"></div>
          <div className="content-section">
            <div className="header-section">
              <h1 className="header heading1">About Us</h1>
              <p className="desc desc1">
                We're driven by purpose and powered by a team that shares our
                values. We build in-house, diverse teams who bring creativity,
                integrity, and excellence to everything we do.
              </p>
             <a href="">
                <button className="capabilityButton">Our Capabilities</button>
              </a>
            </div>
          </div>
          <div className="content-section">
            <div className="header-section">
              <h1 className="header heading2">Our Mission</h1>
              <p className="desc desc2">
                We aim to help our clients build stronger brands, connect with
                their audiences, and achieve long-term success in the digital
                world through cutting-edge digital strategies that drive
                measurable growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}






