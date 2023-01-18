import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { dataHistory } from "../../stores/actions/history";
import Back from "../../components/backButton";
import "./style.css";
export default function Booking() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { state } = useLocation();
  const data = state;
  const [dataMovie, setDataMovie] = useState({
    Title: data.Title,
    Poster: data.Poster,
    imdbID: data.imdbID,
  });
  const [selectedSeat, setSelectedSeat] = useState([]);

  const [dropdownNumber, setDropdownNumber] = useState(1);
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

  const handleChangeDropdown = (e) => {
    const { value } = e.target;
    const number = parseInt(value);
    setDropdownNumber(number);
    setSelectedSeat([]);
    const filteredSeat = dataSeat.map((seat) => {
      if (seat.isActive === true) {
        return { no: seat.no, isActive: false };
      } else {
        return { ...seat };
      }
    });
    setDataSeat(filteredSeat);
  };
  const handleSelectSeat = (no) => {
    setSelectedSeat([...selectedSeat, no]);
    setDataMovie({ ...dataMovie, selected: [...selectedSeat, no] });
    const filteredSeat = dataSeat.map((seat) => {
      if (seat.no === no) {
        return { no: no, isActive: true };
      } else {
        return { ...seat };
      }
    });
    setDataSeat(filteredSeat);
  };
  const handleBooking = async () => {
    console.log("kilik booking");
    try {
      dispatch(dataHistory(dataMovie));
      navigate(`/history`);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(dataMovie);
  return (
    <div>
      <Back />
      <div style={{ border: "1px solid grey" }}>
        <p style={{ textAlign: "center" }}>Screen</p>
      </div>
      <div className="button-section">
        {dataSeat.map((item) => (
          <div key={item.no}>
            <button
              className="btn-select-seat"
              name="seats"
              type="button"
              onClick={() => handleSelectSeat(item.no)}
              style={{ backgroundColor: item.isActive ? "red" : "white" }}
              disabled={
                selectedSeat.length >= dropdownNumber &&
                selectedSeat.length !== 0
                  ? true
                  : false
              }
              // style={{}}
            >
              {item.no}
            </button>
          </div>
        ))}
      </div>
      <div className="footer">
        <select
          id="number"
          className="dropdown"
          onChange={handleChangeDropdown}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button
          type="button"
          className="btn-select"
          disabled={selectedSeat.length !== dropdownNumber ? true : false}
          style={{
            backgroundColor:
              selectedSeat.length !== dropdownNumber ? "grey" : "#605dec",
          }}
          onClick={handleBooking}
        >
          Select
        </button>
      </div>
    </div>
  );
}
