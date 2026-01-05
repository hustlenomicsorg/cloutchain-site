export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.1)",
        padding: "40px 24px",
        marginTop: "120px",
        textAlign: "center",
        color: "var(--text-muted)",
      }}
    >
      <p>© {new Date().getFullYear()} CloutChain</p>
      <p style={{ marginTop: "8px", fontSize: "14px" }}>
        Connecting Clout. Creating Growth.
      </p>
    </footer>
  );
}
