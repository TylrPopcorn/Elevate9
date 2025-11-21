import React from "react";

// HERO SECTION
export default function Hero() {
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
    <div className="Hero-Section" id="Home">
      {/** HERO SECTION */}
      <div className="WRAPPER">
        <div className="img">
          <div className="backgroundFX"></div>
          <div className="content">
            <h1 className="Header-Text">
              BRAND<br></br>ELEVATION<br></br>STRATEGY
            </h1>
            <p className="desc">
              You bring the vision. We bring <br></br>the strategy.
            </p>
            <div className="button-section">
              <a href="#AboutUs" onClick={(e) => handleClick(e, "AboutUs")}>
                <button className="learnMore">Learn More</button>
              </a>
              <a href="#ContactUs" onClick={(e) => handleClick(e, "ContactUs")}>
                <button className="contactUs">Contact Us</button>
              </a>
            </div>
          </div>
          <div class="container content-2">
            <div class="arrow" alt=""></div>
          </div>
        </div>
      </div>
    </div>
  );
}
