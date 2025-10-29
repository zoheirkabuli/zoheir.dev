export default function Loading() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-jetbrains), monospace",
          color: "var(--accent)",
          fontSize: "24px",
        }}
      >
        Loading...
      </div>
    </div>
  );
}
