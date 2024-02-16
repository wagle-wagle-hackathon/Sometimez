import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SomeTimez from "../../pics/Sometimez.jpg";
export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/Introduction");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
      <body style={{ backgroundColor: "#F2E4D8" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <img
            src={SomeTimez}
            alt="SomeTimezLogo"
            style={{ margin: "30%", width: "100%", }}
          />
        </div>
      </body>
  );
}