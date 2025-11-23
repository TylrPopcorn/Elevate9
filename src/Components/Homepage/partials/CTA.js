import React from "react";

// CTA SECTION
export default function CTA() {
  //
  //
  const handleClick = (e, id) => {
    e.preventDefault(); // stop reload

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      // fallback if not on homepage
      window.location.pathname = "/";
    }
  };

  //------
  return (
    <div className="CTA-Section">
      <div className="WRAPPER">
        <div className="sidePiece"></div>
        <div className="img">
          <div className="backgroundFX"></div>
          <div className="content-section">
            <h1 className="header">
              Elevate Your Experiences <br></br> Today.
            </h1>
            <a className="cta-button-wrapper" href="#ContactUs" onClick={(e) => handleClick(e, "ContactUs")}>
              <button className="cta-button">Contact Us</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

