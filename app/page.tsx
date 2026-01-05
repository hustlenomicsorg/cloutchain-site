export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="section">
        <div className="container center">
          <div
            className="glass"
            style={{
              padding: "80px 60px",
              animation: "fadeUp 1s ease forwards",
            }}
          >
            <h1
              style={{
                fontSize: "64px",
                fontWeight: 800,
                letterSpacing: "-1px",
              }}
            >
              CLOUTCHAIN
            </h1>

            <p
              style={{
                marginTop: "24px",
                fontSize: "20px",
                color: "var(--text-muted)",
                maxWidth: "720px",
                marginInline: "auto",
                lineHeight: "1.7",
              }}
            >
              A premium creator & campus-driven growth network connecting
              influencers, student ambassadors, and brands through trust,
              performance, and scale.
            </p>

            <div
              style={{
                marginTop: "48px",
                display: "flex",
                justifyContent: "center",
                gap: "24px",
                flexWrap: "wrap",
              }}
            >
              <a
                href="#"
                style={{
                  padding: "16px 36px",
                  background: "var(--accent)",
                  color: "#000",
                  borderRadius: "999px",
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                Join as Creator
              </a>

              <a
                href="#"
                style={{
                  padding: "16px 36px",
                  border: "1px solid var(--border-glass)",
                  color: "#fff",
                  borderRadius: "999px",
                  textDecoration: "none",
                }}
              >
                Become Ambassador
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE SECTION */}
      <section className="section">
        <div className="container">
          <div
            className="glass"
            style={{
              padding: "64px",
              display: "grid",
              gap: "32px",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            }}
          >
            <Feature
              title="Influencer Network"
              text="Verified creators matched with high-intent brand campaigns."
            />
            <Feature
              title="Campus Ambassadors"
              text="College-wise ambassadors driving grassroots reach and trust."
            />
            <Feature
              title="Brand Partnerships"
              text="Transparent, performance-driven collaborations for brands."
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function Feature({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h3 style={{ fontSize: "22px", fontWeight: 700 }}>{title}</h3>
      <p
        style={{
          marginTop: "12px",
          color: "var(--text-muted)",
          lineHeight: "1.6",
        }}
      >
        {text}
      </p>
    </div>
  );
}
