export default function Navbar() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(16px)",
        background: "rgba(0,0,0,0.6)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "20px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <strong style={{ fontSize: "20px" }}>CLOUTCHAIN</strong>

        <div style={{ display: "flex", gap: "24px" }}>
          <a href="/" style={link}>Home</a>
          <a href="/influencers" style={link}>Influencers</a>
          <a href="/ambassadors" style={link}>Ambassadors</a>
          <a href="/contact" style={link}>Contact</a>
        </div>
      </div>
    </nav>
  );
}

const link = {
  color: "white",
  textDecoration: "none",
  fontSize: "15px",
  opacity: 0.85,
};
