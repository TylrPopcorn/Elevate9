// @ TYLRPOPCORN @ TYLRPOPCORN @ TYLRPOPCORN @ TYLRPOPCORN
// @ TYLRPOPCORN @ TYLRPOPCORN @ TYLRPOPCORN @ TYLRPOPCORN
// @ TYLRPOPCORN @ TYLRPOPCORN @ TYLRPOPCORN @ TYLRPOPCORN

//dependencies
// npm install react
// npm install react-router-dom
// npm install --save-dev sass  <-- SCSS
// npm install concurrently --save-dev      <--allows running multiple scripts at once
// npm install bootstrap

import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
//----    ----    ----

//styles:
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; //Bootstrap JS
//
import "./styles/global.css";

// How to start project ]:
// npm run start

// HOW TO CREATE REACT-APP ]:
// npx create-react-app {project-name}

//----    ----    ----

//components:
import Homepage from "./Components/Homepage/Homepage";
import PrivacyPolicy from "./Components/PrivacyPolicy/PrivacyPolicy";
import CapabilityStatement from "./Components/CapabilityStatement/CapabilityStatement";

//--
import Redirect from "./Components/Redirect";

//START:
console.log("Elevate9 INC website created by @TylrPopcorn");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <Routes>
      {/* ROUTES */}
      <Route path="/" element={<Homepage />} />

      {/* ----- Privacy Policy ----- */}
      <Route path="/Privacy" element={<PrivacyPolicy />} />

      {/* ----- Capability Statement ----- */}
      <Route path="/Capability-Statement" element={<CapabilityStatement />} />

      {/* ----- Capability Statement ----- */}
      <Route path="/CapabilityStatement" element={<CapabilityStatement />} />

      {/* ----- Catch all unknown pages ----- */}
      <Route path="*" element={<Redirect />} />
      {/*----------------------------*/}
    </Routes>
  </HashRouter>
);





