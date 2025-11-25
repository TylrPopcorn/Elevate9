import React, { useEffect, useState } from "react";

//components:
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function CapabilityStatement() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    // detect mobile
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="CapabilityStatement">
        <div className="WRAPPER">
          <div className="backgroundFX"></div>

          {/* PDF */}
          {isMobile ? (
            <>
              <style>{`
                .PDF-Fallback {
                  display: flex;
                  flex-direction: column;
                  text-align: center;
                  gap: 10px;
                  color: white;
                  font-family: Arial, sans-serif; /* replace with vars.$headerText if using SCSS */
                  font-size: 20px;
                }
                .PDF-Fallback h1 {
                  font-size: 90px;
                }
              `}</style>

              <div className="PDF-Fallback">
                <h1>📄</h1>
                <p>
                  PDF preview is not available on mobile. <br />
                  <a
                    href="/Elevate9 Capability Statement Latest.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open / Download PDF
                  </a>
                </p>
              </div>
            </>
          ) : (
            <object
              data="/Elevate9 Capability Statement Latest.pdf#view=FitH&navpanes=0"
              type="application/pdf"
              width="100%"
              height="100%"
              className="PDF"
              aria-label="Elevate9 Capability Statement PDF"
            />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
