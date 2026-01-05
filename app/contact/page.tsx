export default function Contact() {
  return (
    <section className="section">
      <div className="container reveal">
        <h1 style={{ fontSize: "42px" }}>Contact CloutChain</h1>

        <p style={{ marginTop: "16px", color: "var(--text-muted)" }}>
          Reach out to collaborate, partner, or join our network.
        </p>

        <div
          className="glass"
          style={{
            marginTop: "40px",
            padding: "40px",
            maxWidth: "600px",
          }}
        >
          <p>
            📧 Email: <strong>thecloutchain@gmail.com</strong>
          </p>

          <p style={{ marginTop: "16px" }}>
            👉 Creator Onboarding Form:
          </p>

          <a
            href="https://forms.gle/YOUR_FORM_LINK"
            target="_blank"
            style={{
              display: "inline-block",
              marginTop: "16px",
              padding: "14px 28px",
              background: "var(--accent)",
              color: "#000",
              borderRadius: "999px",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            Open Form
          </a>
        </div>
      </div>
    </section>
  );
}
