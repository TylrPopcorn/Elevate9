import React from "react";

// FAQ SECTION
export default function FAQ() {
  return (
    <div className="FAQ-Section" id="FAQ">
      <div className="WRAPPER">
        <div
            className="img"
            style={{
              paddingTop: "100px",
              paddingBottom: "200px",
              paddingLeft: "8%",
              paddingRight: "8%",
            }}
          >
          <div className="backgroundFX"></div>
          <div className="content-section">
            <div className="header-section">
              <h1 className="header">
                Frequently Asked <br></br> Questions
              </h1>
              <p className="desc">
                Everything you need to know, all in one place
              </p>
            </div>
            <div className="questions">
              {/** ---------Q1-------- **/}
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#q1"
                    aria-expanded="true"
                    aria-controls="q1"
                  >
                    What Makes Elevate9 Different?
                  </button>
                  <div className="arrow"></div>
                </h2>
                <div
                  id="q1"
                  class="accordion-collapse show"
                  data-bs-parent="#faqAccordion"
                >
                  <div class="accordion-body">
                    We combine creative branding, data-driven SEO, and expert
                    web development to deliver tailored digital strategies that
                    drive real results.
                  </div>
                </div>
              </div>
              {/** ---------Q2-------- **/}
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#q2"
                    aria-expanded="false"
                    aria-controls="q2"
                  >
                    Why do I need branding?
                  </button>
                  <div className="arrow"></div>
                </h2>
                <div
                  id="q2"
                  class="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div class="accordion-body">
                    Branding builds recognition, trust, and loyalty. It helps
                    you stand out and connect with your ideal audience.
                  </div>
                </div>
              </div>
              {/** ---------Q3-------- **/}
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#q3"
                    aria-expanded="false"
                    aria-controls="q3"
                  >
                    What is search engine optimization (SEO)?
                  </button>
                  <div className="arrow"></div>
                </h2>
                <div
                  id="q3"
                  class="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div class="accordion-body">
                    SEO improves your website's visibility on search engines,
                    helping more people find your business online.
                  </div>
                </div>
              </div>
              {/** ---------Q4-------- **/}
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#q4"
                    aria-expanded="false"
                    aria-controls="q4"
                  >
                    Why do I need SEO marketing for my website?
                  </button>
                  <div className="arrow"></div>
                </h2>
                <div
                  id="q4"
                  class="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div class="accordion-body">
                    SEO drives organic traffic, increases your credibility, and
                    leads to more conversions over time without paid ads.
                  </div>
                </div>
              </div>
              {/** ---------Q5-------- **/}
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#q5"
                    aria-expanded="false"
                    aria-controls="q5"
                  >
                    Why do I need a custom brand identity?
                  </button>
                  <div className="arrow"></div>
                </h2>
                <div
                  id="q5"
                  class="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div class="accordion-body">
                    A custom identity reflects your unique value and ensures
                    consistency across all channels, making your brand
                    memorable.
                  </div>
                </div>
              </div>
              {/** ---------Q6-------- **/}
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#q6"
                    aria-expanded="false"
                    aria-controls="q6"
                  >
                    How does web development work?
                  </button>
                  <div className="arrow"></div>
                </h2>
                <div
                  id="q6"
                  class="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div class="accordion-body">
                    We plan, design, build, and launch websites tailored to your
                    goals—ensuring they're fast, secure, and mobile-friendly.
                  </div>
                </div>
              </div>
              {/** ---------Q7-------- **/}
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#q7"
                    aria-expanded="false"
                    aria-controls="q7"
                  >
                    How do you ensure that my brand's identity is unique?
                  </button>
                  <div className="arrow"></div>
                </h2>
                <div
                  id="q7"
                  class="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div class="accordion-body">
                    We research your industry, analyze competitors, and craft a
                    strategy that reflects your values, voice, and vision.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


