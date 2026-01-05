export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="section hero">
        <div className="container">
          <div className="heroCard glass reveal">
            <span className="pill">INFLUENCE · CAMPUS · CULTURE</span>

            <h1 className="heroTitle">
              We Power the <span>Next Generation</span>
              <br />
              of Influence
            </h1>

            <p className="heroText">
              CloutChain is a modern influencer and campus-driven growth agency.
              We connect creators, student ambassadors, and brands through
              structured systems, transparent payouts, and performance-led
              collaborations.
            </p>

            <div className="heroActions">
              <a className="primaryBtn" href="/influencers">
                Join as Creator
              </a>
              <a className="secondaryBtn" href="/ambassadors">
                Become Ambassador
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND / SOCIAL PROOF */}
      <section className="section">
        <div className="container">
          <div className="brandStrip reveal">
            <Brand>Creators</Brand>
            <Brand>Startups</Brand>
            <Brand>EdTech</Brand>
            <Brand>Web3</Brand>
            <Brand>D2C Brands</Brand>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="section">
        <div className="container">
          <div className="infoGrid">
            <InfoCard
              title="Influencer Network"
              text="Verified creators matched with brands that respect audience trust and creator value."
            />
            <InfoCard
              title="Campus Ambassadors"
              text="College-wise ambassadors driving grassroots adoption and hyperlocal influence."
            />
            <InfoCard
              title="Brand Campaigns"
              text="Performance-based campaigns designed for scale, not vanity metrics."
            />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section">
        <div className="container">
          <div className="glass howItWorks reveal">
            <Step
              number="01"
              title="Onboard & Verify"
              text="Creators and ambassadors join through a structured onboarding and verification process."
            />
            <Step
              number="02"
              title="Match & Activate"
              text="We match creators and campuses with relevant brand campaigns."
            />
            <Step
              number="03"
              title="Execute & Scale"
              text="Campaigns are executed with tracking, reporting, and transparent payouts."
            />
          </div>
        </div>
      </section>
    </main>
  );
}

/* -------- COMPONENTS -------- */

function Brand({ children }: { children: string }) {
  return <div className="brandItem">{children}</div>;
}

function InfoCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="infoCard reveal">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function Step({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="step">
      <span className="stepNumber">{number}</span>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
