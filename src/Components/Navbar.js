import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("Home");
  //-------------
  //
  //
  const handleClick = (e, id) => {
  e.preventDefault(); // stop reload

  if (id === "Home") {
    // If Home, always go back to homepage
      if (window.location.hash === "#/" || window.location.hash === "") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.location.href = "/#/";
    }
    return;
  }

  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  } else {
    // fallback if not on homepage
    window.location.href = "/#/";
  }
};


  //
  //
  
  useEffect(() => {
    // AFTER THE PAGE LOADS
    const sections = document.querySelectorAll(
      "#Home, #AboutUs, #Services, #FAQ, #ContactUs, #Policy, #Capability"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  //--------------
  return (
    <nav className="navbar navbar-expand-lg fixed-top" id="Home">
      <div className="content container-fluid WRAPPER">
        <a className="navbar-brand" href="/">
          <div className="logo-img"></div>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
      <span className="navbar-toggler-icon" style={{ width: "1.1em" }}></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className={`nav-link home ${
                  activeSection === "Home" ? "active" : ""
                }`}
                href="#Home"
                onClick={(e) => handleClick(e, "Home")}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link about ${
                  activeSection === "AboutUs" ? "active" : ""
                }`}
                href="#AboutUs"
                onClick={(e) => handleClick(e, "AboutUs")}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link services ${
                  activeSection === "Services" ? "active" : ""
                }`}
                href="#Services"
                onClick={(e) => handleClick(e, "Services")}
              >
                Services
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link faq ${
                  activeSection === "FAQ" ? "active" : ""
                }`}
                href="#FAQ"
                onClick={(e) => handleClick(e, "FAQ")}
              >
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link contact ${
                  activeSection === "ContactUs" ? "active" : ""
                }`}
                href="#ContactUs"
                onClick={(e) => handleClick(e, "ContactUs")}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}











