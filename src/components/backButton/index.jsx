import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
export default function BackButton(props) {
  console.log(props);
  const navigate = useNavigate();
  const navigasi = () => {
    props.title === "history" ? navigate("/") : navigate(-1);
  };
  return (
    <div
      onClick={navigasi}
      className="icon"
      style={{ display: "flex", alignItems: "center", marginLeft: "10px" }}
    >
      <div className="arrow"></div>
      <p> Back</p>
    </div>
  );
}
