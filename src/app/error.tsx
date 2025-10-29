"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "20px",
        padding: "20px",
      }}
    >
      <h2 style={{ color: "var(--accent)", fontSize: "32px" }}>
        Something went wrong!
      </h2>
      <button
        onClick={() => reset()}
        style={{
          padding: "14px 30px",
          fontFamily: "var(--font-jetbrains), monospace",
          fontSize: "14px",
          borderRadius: "4px",
          border: "1px solid var(--accent)",
          background: "transparent",
          color: "var(--accent)",
          cursor: "pointer",
        }}
      >
        Try again
      </button>
    </div>
  );
}
