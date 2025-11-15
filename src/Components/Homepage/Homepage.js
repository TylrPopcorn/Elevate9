import React, { useEffect } from "react";

//components:
import Navbar from "../Navbar";
import Footer from "../Footer";

//sections:
import Hero from "./partials/Hero";
import AboutUs from "./partials/AboutUs";
import Services from "./partials/Services";
import FAQ from "./partials/FAQ";
import CTA from "./partials/CTA";
import ContactUs from "./partials/ContactUs";

//HOMEPAGE:
function Homepage() {
   //
  //
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  //--------
  return (
    <div className="Homepage" id="Home">
      <Navbar />
      {/** --------- */}

      {/** HERO SECTION */}
      <Hero />
      {/** ABOUT US SECTION */}
      <AboutUs />

      {/** SERVICES SECTION */}
      <Services />

      {/** FAQ SECTION */}
      <FAQ />

      {/** CTA SECTION */}
      <CTA />

      {/** CONTACT US SECTION */}
      <ContactUs />

      {/** --------- */}
      <Footer />
    </div>
  );
}

//--------------------------
// EXPORTS
export default Homepage;
//--------------------------
