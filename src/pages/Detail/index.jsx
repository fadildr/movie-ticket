import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css";
export default function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState({});
  useEffect(() => {
    getDetail();
  }, []);
  const getDetail = async () => {
    const result = await axios.get(
      `http://www.omdbapi.com/?apikey=31ccf49&i=${id}`
    );
    console.log(result);
    setData(result.data);
  };
  const handleBooking = () => {
    navigate("/Booking", {
      state: data,
    });
    // console.log("klik");
  };

  return (
    <div>
      <div>
        <p onClick={() => navigate(-1)}>back</p>
        <img
          src={data.Poster}
          alt=""
          className="img-card-detail"
          // style={{ height: 500 }}
        />
        <h2>{data.Title}</h2>
        <h4>{data.Plot}</h4>

        <button type="button" className="btn-book" onClick={handleBooking}>
          Booking
        </button>
      </div>
    </div>
  );
}
