export default function Home() {
  return (
    <main>
      {/* ================= HERO ================= */}
      <section className="section hero">
        <div className="container">
          <div className="heroCard glass">
            <span className="pill">NEXT-GEN CREATOR AGENCY</span>

            <h1 className="heroTitle">
              Building <span>Influence</span>
              <br />
              That Actually Converts
            </h1>

            <p className="heroText">
              CloutChain is a premium influencer & campus growth agency.
              We connect creators, student ambassadors, and brands through
              structured systems, transparency, and performance-driven execution.
            </p>

            <div className="heroActions">
              <a className="primaryBtn" href="/influencers">
                Join as Creator
              </a>
              <a className="secondaryBtn" href="/ambassadors">
                Become Ambassador
              </a>
            </div>

            <p className="heroTrust">
              Trusted by creators, campus leaders, and emerging brands
            </p>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="section">
        <div className="container">
          <div className="servicesHeader">
            <h2>What We Do</h2>
            <p>
              We operate at the intersection of creators, campuses, and culture —
              turning attention into measurable growth.
            </p>
          </div>

          <div className="serviceGrid">
            <ServiceCard
              icon="🎥"
              title="Influencer Marketing"
              text="Verified creators matched with brands that respect audience trust and creator value."
            />
            <ServiceCard
              icon="🎓"
              title="Campus Ambassador Programs"
              text="College-wise ambassadors driving grassroots reach and authentic adoption."
            />
            <ServiceCard
              icon="🤝"
              title="Brand Partnerships"
              text="Performance-based collaborations designed for scale, not vanity metrics."
            />
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------- Components ---------- */

function ServiceCard({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="serviceCard">
      <div className="serviceIcon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
