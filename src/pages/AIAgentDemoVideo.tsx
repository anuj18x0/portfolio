import React from "react";
import { useNavigate } from "react-router-dom";

const AIAgentDemoVideo = () => {
  const navigate = useNavigate();
  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "#000",
      zIndex: 1000,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <button
        onClick={() => navigate(-1)}
        style={{
          position: "absolute",
          top: 24,
          right: 32,
          background: "rgba(0,0,0,0.5)",
          color: "#fff",
          border: "none",
          borderRadius: 8,
          padding: "8px 16px",
          fontSize: 18,
          cursor: "pointer",
          zIndex: 1100
        }}
      >
        Close
      </button>
      <iframe
        src="https://drive.google.com/file/d/1ULs6_8nAmrCLNRPaweGnpr7Mo0bzrAF8/preview"
        width="90%"
        height="90%"
        allow="autoplay"
        style={{
          borderRadius: 16,
          border: "none",
          maxWidth: 1200,
          maxHeight: 700
        }}
      />
    </div>
  );
};

export default AIAgentDemoVideo;