import React from "react";

// Contact Us SECTION
export default function ContactUs() {
  //
  //
  const handleSubmit = () => {
    // Wait a bit so FormSubmit can open success page in new tab
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  };

  //--------
  return (
    <div className="Contact-Us-Section" id="ContactUs">
      <div className="WRAPPER">
        <div className="sidePiece"></div>
        <div className="img">
          <div className="backgroundFX"></div>
          <div className="content-section">
            <div className="header-section">
              <h1 className="header">Contact Us</h1>
              <p className="desc">Let us take your brand to the next level</p>
            </div>
            <div class="form-container">
              <form
                method="POST"
                action="https://formsubmit.co/aa57bffabc0a6e03bd24cb186e429af0"
                target="_blank"
                onSubmit={handleSubmit}
              >
                <label for="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Full Name"
                  required
                />

                <label for="company">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Your Company Name"
                  required
                />

                <label for="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone Number"
                  required
                />

                <label for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                />

                <label for="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="How can we help you?"
                  required
                ></textarea>

                <button type="submit">Request Service</button>

                <input type="hidden" name="_next" value="/" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
