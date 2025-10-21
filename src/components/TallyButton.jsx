import { useEffect } from "react";

const TallyButton = ({ formId, text }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <button
      data-tally-open={formId}
      data-tally-layout="modal"
      style={{
        padding: "14px 28px",
        border: 0,
        borderRadius: "8px",
        background: "#ffffff",
        color: "#000",
        fontWeight: 600,
        fontSize: "16px",
        cursor: "pointer",
      }}
    >
      {text}
    </button>
  );
};

export default  TallyButton
 
