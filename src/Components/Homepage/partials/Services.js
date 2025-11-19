import React from "react";

// SERVICES SECTION
export default function Services() {
  return (
    <div className="Services-Section" id="Services">
      <div className="WRAPPER">
        <div className="sidePiece"></div>
        <div className="img">
          <div className="backgroundFX"></div>
          <div className="content-section">
            <div className="header-section">
              <h1 className="header">Our Services</h1>
              <p className="desc">
                Comprehensive solutions designed to elevate your brand and grow
                your business
              </p>
            </div>
            <style>{`
              @media (max-width: 680px) {
                .services {
                  width: 85%;
                }
              }
            `}</style>
            <div className="services row">
              {/**---------------------------*/}
              <div className="item col">
                <div className="service-img service1"></div>
                <h3 className="service-heading">Marketing & Branding</h3>
                <p className="service-desc">
                  Through strategic branding, we craft a true identity that
                  aligns with your goals and makes your brand stand out, while
                  our tailored marketing campaigns.
                </p>
              </div>
              {/**---------------------------*/}
              <div className="item col">
                <div className="service-img service2"></div>
                <h3 className="service-heading">Social Media</h3>
                <p className="service-desc">
                  Social media content isn’t just about looking good — it’s
                  about building a lasting connection with your audience.
                </p>
              </div>
              {/**---------------------------*/}
              <div className="item col">
                <div className="service-img service3"></div>
                <h3 className="service-heading">Web Development</h3>
                <p className="service-desc">
                  Our custom web development empowers you to create a website
                  perfectly tailored to your business goals — offering unmatched
                  flexibility, scalability, and control.
                </p>
              </div>
              {/**---------------------------*/}
              <div className="item col">
                <div className="service-img service4"></div>
                <h3 className="service-heading">Advertising & Analytics</h3>
                <p className="service-desc">
                  We create tailored advertising campaigns that captivate
                  audiences, amplify your brand, and deliver measurable impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


