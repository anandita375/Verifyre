import "./App.css";

function Result() {

  const storedResult =
    sessionStorage.getItem("verificationResult");
    const storedCompany =
  sessionStorage.getItem("companyData");

const company = storedCompany
  ? JSON.parse(storedCompany)
  : null;

  const result = storedResult
    ? JSON.parse(storedResult)
    : {
        score: 0,
        level: "NO RESULT",
        warnings: []
      };

  return (
    <div className="result-page">

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


      {/* RESULT CONTENT */}
      <main className="result-content">

        <div className="result-heading">

          <p className="section-label">
            VERIFICATION RESULT
          </p>

          <h1>
            Here's what we found.
          </h1>

          <p>
            VERIFYRE checked the offer against
            known scam warning patterns.
          </p>

        </div>


        {/* RISK CARD */}
        <section className="risk-card">

          <div className="risk-score">

            <div className="score-circle">

              <strong>
                {result.score}
              </strong>

              <span>
                /100
              </span>

            </div>


            <div className="risk-label">

              <span>
                RISK LEVEL
              </span>

              <h2>
                {result.level}
              </h2>

              <p>
                {result.warnings.length === 0
                  ? "No known warning signs were detected."
                  : `${result.warnings.length} warning sign(s) detected.`}
              </p>

            </div>

          </div>


          {/* SUMMARY */}
          <div className="risk-summary">

            <div>
              <span>
                ANALYSIS
              </span>

              <strong>
                Scam pattern detection
              </strong>
            </div>

            <div>
              <span>
                WARNING SIGNS
              </span>

              <strong>
                {result.warnings.length} detected
              </strong>
            </div>

          </div>

        </section>


        {/* WARNING SIGNS */}
        <section className="warning-section">

          <div className="section-title">

            <div>

              <p className="section-label">
                DETECTION
              </p>

              <h2>
                Why we flagged it
              </h2>

            </div>

            <span className="warning-count">
              {result.warnings.length} warning signs
            </span>

          </div>


          <div className="warning-list">

            {result.warnings.length === 0 ? (

              <div className="safe-message">

                <div className="safe-icon">
                  ✓
                </div>

                <div>

                  <h3>
                    No known scam patterns detected
                  </h3>

                  <p>
                    This does not guarantee that the opportunity
                    is genuine. Always verify through the company's
                    official website.
                  </p>

                </div>

              </div>

            ) : (

              result.warnings.map((warning, index) => (

                <div
                  className={`warning-card ${warning.severity}`}
                  key={index}
                >

                  <div className="warning-icon">
                    ⚠
                  </div>

                  <div>

                    <h3>
                      {warning.title}
                    </h3>

                    <p>
                      {warning.description}
                    </p>

                  </div>

                </div>

              ))

            )}

          </div>

        </section>


        {/* VERIFY THE REAL WAY */}
        <section className="real-way">

  <div className="real-way-header">

    ...

  </div>


  <div className="job-match">

  <div className="match-icon">
    {company ? "✓" : "?"}
  </div>

  <div>

    {company ? (

      <>
        <h3>
          {company.name} found in our verified database
        </h3>

        <p>
          Official domain: {company.domain}
        </p>
      </>

    ) : (

      <>
        <h3>
          Company not found
        </h3>

        <p>
          We do not currently have this company in our
          verified company database.
        </p>
      </>

    )}

  </div>

</div>
{company && (

  <div className="official-sources">

    <div className="source-card">

      <span className="source-icon">
        🌐
      </span>

      <div>

        <span className="small-label">
          OFFICIAL WEBSITE
        </span>

        <h3>
          {company.name}
        </h3>

        <p>
          {company.domain}
        </p>

      </div>

      <a
        href={`https://${company.domain}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit →
      </a>

    </div>


    <div className="source-card">

      <span className="source-icon">
        💼
      </span>

      <div>

        <span className="small-label">
          OFFICIAL CAREERS
        </span>

        <h3>
          Careers Portal
        </h3>

        <p>
          Official company careers page
        </p>

      </div>

      <a
        href={company.careersUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit →
      </a>

    </div>

  </div>

)}

</section>


        {/* RECOMMENDATION */}
        <section className="recommendation">

          <div className="recommendation-icon">
            🛡️
          </div>

          <div>

            <p className="section-label">
              OUR RECOMMENDATION
            </p>

            <h2>
              {result.level === "HIGH RISK"
                ? "Do not pay or share sensitive information."
                : "Verify the opportunity before proceeding."}
            </h2>

            <p>
              A risk result is an indicator, not a guarantee.
              Always verify the opportunity through the
              company's genuine source.
            </p>

          </div>

        </section>


        {/* ACTIONS */}
        <div className="result-actions">

          <button
            className="report-button"
            onClick={() =>
              window.location.href = "/report"
            }
          >
            🚨 Report this offer
          </button>

          <button
            className="back-button"
            onClick={() =>
              window.location.href = "/verify"
            }
          >
            ← Verify another offer
          </button>

        </div>


        {/* DISCLAIMER */}
        <p className="disclaimer">

          VERIFYRE provides risk indicators and verification
          assistance. A low-risk result does not guarantee that
          an opportunity is genuine.

        </p>

      </main>

    </div>
  );
}

export default Result;