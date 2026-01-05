export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="section hero">
        <div className="container">
          <div className="heroCard">
            <span className="pill">CREATOR × CAMPUS × BRAND</span>

            <h1 className="heroTitle">
              We Build <span>Influence</span>
              <br />
              That Converts
            </h1>

            <p className="heroText">
              CloutChain is a next-gen creator & campus growth agency connecting
              influencers, student ambassadors, and brands through structured,
              transparent, performance-driven collaborations.
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

      {/* TRUST STRIP */}
      <section className="section">
        <div className="container">
          <div className="trustGrid">
            <TrustItem title="Verified Creators" />
            <TrustItem title="Campus Networks" />
            <TrustItem title="Brand-Safe Deals" />
            <TrustItem title="Transparent Payouts" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="container">
          <div className="glass services">
            <Service
              title="Influencer Marketing"
              text="We match creators with brands that align with audience trust, not just reach."
            />
            <Service
              title="Campus Ambassador Programs"
              text="College-wise ambassadors driving grassroots adoption and authentic growth."
            />
            <Service
              title="Brand Partnerships"
              text="Performance-based collaborations designed for scale and long-term value."
            />
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------- Components ---------- */

function TrustItem({ title }: { title: string }) {
  return <div className="trustItem">{title}</div>;
}

function Service({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="serviceCard">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
