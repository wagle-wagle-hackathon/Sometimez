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
      <body style={{ backgroundColor: "#FCEADC" }}>
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
            style={{width: "100%", height: "50%", position:"absolute", top : "25%"}}
          />
        </div>
      </body>
  );
}