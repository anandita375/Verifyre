import { useState } from "react";
import "./App.css";
import { analyzeOffer } from "./services/detector";
import { findCompany } from "./services/companyVerifier";
function Verify() {
  

 

  const [selectedType, setSelectedType] = useState("Job Offer");
  const [inputText, setInputText] = useState("");

  const inputOptions = [
    "Job Offer",
    "Email",
    "Website",
    "Recruiter",
    "Screenshot"
  ];

  return (
    <div className="verify-page">

      {/* NAVBAR */}

      <nav className="navbar">

        <div className="logo">
          VERIFYRE
        </div>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/verify">Verify</a>
          <a href="#">Report Scam</a>
          <a href="#">Intelligence</a>
        </div>

      </nav>


      {/* PAGE CONTENT */}

      <main className="verify-content">

        <div className="verify-heading">

          <p className="section-label">
            VERIFY AN OPPORTUNITY
          </p>

          <h1>
            Is this opportunity <span>genuine?</span>
          </h1>

          <p>
            Enter the job offer, recruiter details, email or website.
            VERIFYRE will analyze it for potential warning signs.
          </p>

        </div>


        {/* INPUT TYPE */}

        <div className="input-types">

          {inputOptions.map((type) => (

            <button
              key={type}
              className={
                selectedType === type
                  ? "type-button active"
                  : "type-button"
              }
              onClick={() => setSelectedType(type)}
            >

              {type === "Job Offer" && "📄"}
              {type === "Email" && "✉️"}
              {type === "Website" && "🌐"}
              {type === "Recruiter" && "👤"}
              {type === "Screenshot" && "🖼️"}

              <span>{type}</span>

            </button>

          ))}

        </div>


        {/* INPUT AREA */}

        <div className="verify-form">

          <label>
            {selectedType === "Job Offer" &&
              "Paste the job or internship offer"}

            {selectedType === "Email" &&
              "Paste the email you received"}

            {selectedType === "Website" &&
              "Enter the website URL"}

            {selectedType === "Recruiter" &&
              "Enter recruiter details"}

            {selectedType === "Screenshot" &&
              "Upload a screenshot"}
          </label>


          {selectedType === "Screenshot" ? (

            <div className="upload-box">

              <div className="upload-icon">
                🖼️
              </div>

              <h3>
                Upload your screenshot
              </h3>

              <p>
                Upload a screenshot of the WhatsApp message,
                email or job posting.
              </p>

              <button className="upload-button">
                Choose File
              </button>

            </div>

          ) : selectedType === "Website" ? (

            <input
              className="website-input"
              type="text"
              placeholder="https://example.com"
            />

          ) : (

            <textarea
  className="offer-input"
  value={inputText}
  onChange={(e) => setInputText(e.target.value)}
  placeholder={
    selectedType === "Job Offer"
      ? "Paste the complete job or internship offer here..."
      : selectedType === "Email"
      ? "Paste the email content here..."
      : "Enter the recruiter's name, email, phone number and company..."
  }
/>

          )}


          {/* ANALYZE */}

<button
  className="analyze-button"
  onClick={() => {

    if (!inputText.trim()) {
      alert("Please enter an offer first.");
      return;
    }

    const result = analyzeOffer(inputText);

    const company = findCompany(inputText);

    sessionStorage.setItem(
      "verificationResult",
      JSON.stringify(result)
    );

    sessionStorage.setItem(
      "companyData",
      JSON.stringify(company)
    );

    sessionStorage.setItem(
      "originalOffer",
      inputText
    );

    window.location.href = "/result";

  }}
>
  🔍 Analyze Offer
</button>

          <p className="form-note">
            Don't share passwords, OTPs or other authentication credentials.
          </p>

        </div>


        {/* WHAT WE CHECK */}

        <section className="checks">

          <h2>
            What VERIFYRE checks
          </h2>

          <div className="check-grid">

            <div className="check-card">
              <span>💰</span>
              <h3>Payment Requests</h3>
              <p>
                Registration, training or other upfront fees.
              </p>
            </div>

            <div className="check-card">
              <span>🔗</span>
              <h3>Website & Domain</h3>
              <p>
                Suspicious or mismatched company domains.
              </p>
            </div>

            <div className="check-card">
              <span>👤</span>
              <h3>Recruiter Details</h3>
              <p>
                Whether recruiter information matches the company.
              </p>
            </div>

            <div className="check-card">
              <span>🪪</span>
              <h3>Sensitive Information</h3>
              <p>
                Requests for identity or financial documents.
              </p>
            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Verify;