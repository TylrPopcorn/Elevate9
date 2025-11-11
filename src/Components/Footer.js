import React from "react";

export default function Footer() {
  //
  //
  const handleSubmit = () => {
    // Wait a bit so FormSubmit can open success page in new tab
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  };

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

  //--------
  return (
    <footer className="Footer" id="Footer">
      <div className="WRAPPER">
        <div className="content row">
          {/**-----------------**/}
          <div className="item logo col">
            <div className="logo-icon"></div>
            <div className="socials">
              {/**-----FACEBOOK------*/}
              <a
                href="https://www.facebook.com/people/Elevate9/61569202981801/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div class="social fb"></div>
              </a>
              {/**------LINKEDIN------*/}
              <a
                href="https://www.linkedin.com/company/elevatenine/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div class="social li"></div>
              </a>
              {/**-----INSTAGRAM-----*/}
              <a href="" target="_blank" rel="noopener noreferrer">
                <div class="social ig"></div>
              </a>
            </div>
          <p className="copyright">
            © {new Date().getFullYear()} Elevate9 Inc. All rights reserved.
          </p>
          </div>
          {/**-----------------**/}
          <div className="item company col">
            <h3 className="section-title">Company</h3>
            <div className="links">
              <a
                href="#Home"
               onClick={(e) => handleClick(e, "Home")}
                className="link_"
              >
                Home
              </a>
              <a
                 href="#AboutUs"
               onClick={(e) => handleClick(e, "AboutUs")}
                className="link_"
              >
                About
              </a>
              <a
                 href="#Services"
               onClick={(e) => handleClick(e, "Services")}
                className="link_"
              >
                Services
              </a>
              <a
                href="#FAQ"
               onClick={(e) => handleClick(e, "FAQ")}
                className="link_"
              >
                FAQ
              </a>
              <a
               href="#ContactUs"
               onClick={(e) => handleClick(e, "ContactUs")}
                className="link_"
              >
                Contact Us
              </a>
            </div>
          </div>
          {/**-----------------**/}
          <div className="item contact terms col">
            <div className="cntct-section">
              <h3 className="section-title">Contact</h3>
              <div className="content">
                <p className="email">
                  <a href="mailto:info@elevate9inc.com">info@elevate9inc.com</a>
                </p>
                <p className="phone">
                  <a href="tel:+12144929754">(214) 492-9754</a>
                </p>
              </div>
            </div>
            <div className="terms-section">
              <h3 className="section-title">Terms</h3>
            <a href="#Privacy" className="privacyPolicy">
                Privacy Policy
              </a>
            </div>
          </div>
          {/**-----------------**/}
          <div className="item contact subscribe col">
            <h3 className="section-title">
              Subscribe To <br></br>Our Updates
            </h3>
            <form
              class="subscribe-form"
              method="POST"
              action="https://formsubmit.co/aa57bffabc0a6e03bd24cb186e429af0"
              target="_blank"
              onSubmit={handleSubmit}
            >
              <input type="email" placeholder="Email" required />
              <button type="submit">➔</button>
            </form>
            <p className="desc">Let’s build something great. Together.</p>
          </div>
        </div>
      </div>
      <div className="line"></div>
    </footer>
  );
}






