import "./App.css";

function App() {
  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          VERIFYRE
        </div>

        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Verify</a>
          <a href="#">Report Scam</a>
          <a href="#">Scam Intelligence</a>
        </div>

        <button className="nav-button">
          Get Started
        </button>
      </nav>


      {/* HERO */}
      <main className="hero">

        <div className="badge">
          🛡️ Scam-Verification Toolkit for Students
        </div>

        <h1>
          Before you trust it,
          <br />
          <span>VERIFYRE it.</span>
        </h1>

        <p className="hero-text">
          Check a job or internship offer for scam warning signs
          and verify it through the company's official source.
        </p>


        {/* SEARCH AREA */}
        <div className="verify-area">

          <div className="input-box">

            <span className="search-icon">
              🔍
            </span>

            <input
              type="text"
              placeholder="Paste a job offer, email, recruiter details or URL..."
            />

          </div>

          <button className="verify-button">
            Verify Offer
          </button>

        </div>


        <p className="privacy-text">
          Your information is used only to verify the opportunity.
        </p>


        {/* FEATURES */}
        <div className="features">

          <div className="feature-card">

            <div className="feature-icon blue">
              🔍
            </div>

            <div>
              <h3>Detect</h3>

              <p>
                Identify payment requests,
                suspicious domains and scam patterns.
              </p>
            </div>

          </div>


          <div className="feature-card">

            <div className="feature-icon green">
              🌐
            </div>

            <div>
              <h3>Verify</h3>

              <p>
                Find the company's genuine website
                and official careers portal.
              </p>
            </div>

          </div>


          <div className="feature-card">

            <div className="feature-icon purple">
              🧠
            </div>

            <div>
              <h3>Learn</h3>

              <p>
                Verified student reports help
                discover new scam patterns.
              </p>
            </div>

          </div>

        </div>

      </main>


      {/* HOW IT WORKS */}
      <section className="how-section">

        <p className="section-label">
          HOW IT WORKS
        </p>

        <h2>
          One check. Three layers of protection.
        </h2>

        <div className="steps">

          <div className="step">
            <span>01</span>
            <h3>Detect</h3>
            <p>
              We analyze the offer for known
              scam indicators.
            </p>
          </div>

          <div className="step">
            <span>02</span>
            <h3>Verify</h3>
            <p>
              We help you find the company's
              real official source.
            </p>
          </div>

          <div className="step">
            <span>03</span>
            <h3>Learn</h3>
            <p>
              Verified student reports help
              improve future detection.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default App;