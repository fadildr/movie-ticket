import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import "./style.css";
export default function Booking() {
  const navigate = useNavigate();
  const [selectedSeat, setSelectedSeat] = useState([]);
  const [dataSeat, setDataSeat] = useState([
    {
      no: "A1",
      isActive: false,
    },
    {
      no: "A2",
      isActive: false,
    },
    {
      no: "A3",
      isActive: false,
    },
    {
      no: "A4",
      isActive: false,
    },
    {
      no: "A5",
      isActive: false,
    },
    {
      no: "B1",
      isActive: false,
    },
    {
      no: "B2",
      isActive: false,
    },
    {
      no: "B3",
      isActive: false,
    },
    {
      no: "B4",
      isActive: false,
    },
    {
      no: "B5",
      isActive: false,
    },
    {
      no: "C1",
      isActive: false,
    },
    {
      no: "C2",
      isActive: false,
    },
    {
      no: "C3",
      isActive: false,
    },
    {
      no: "C4",
      isActive: false,
    },
    {
      no: "C6",
      isActive: false,
    },
  ]);
  const handleSelectSeat = (no) => {
    setSelectedSeat([...selectedSeat, no]);
    const filteredSeat = dataSeat.map((seat) => {
      if (seat.no === no) {
        return { no: no, isActive: true };
      } else {
        return { no: seat.no, isActive: false };
      }
    });
    setDataSeat(filteredSeat);
  };
  // console.log(selectedSeat);

  console.log(selectedSeat);
  return (
    <div>
      <p onClick={() => navigate(-1)}>back</p>
      <div style={{ border: "1px solid grey" }}>
        <p style={{ textAlign: "center" }}>Screen</p>
      </div>
      {dataSeat.map((item) => (
        <div key={item.no} className="button-section">
          <button
            name="seats"
            type="button"
            onClick={() => handleSelectSeat(item.no)}
            style={{ backgroundColor: item.isActive ? "blue" : "white" }}
          >
            {item.no}
          </button>
        </div>
      ))}

      <div className="footer">
        <select
          id="profession"
          className="dropdown"
          // onChange={handleChangeForm}
          // name="profession"
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <button type="button" className="btn-select">
          Select
        </button>
      </div>
    </div>
  );
}
