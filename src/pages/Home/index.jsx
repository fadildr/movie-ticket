import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css";
export default function Home() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const result = await axios.get(
      "http://www.omdbapi.com/?apikey=31ccf49&s=batman"
    );

    setData(result.data.Search);
  };
  const getDetailMovie = (id) => {
    navigate(`/detail/${id}`);
  };
  return (
    <div>
      <div className="container">
        <h1 style={{ textAlign: "center" }}>Movie</h1>
        <div className="row">
          {data.length > 0 ? (
            data.map((item) => (
              <div
                key={item.imdbID}
                className="column"
                onClick={() => getDetailMovie(item.imdbID)}
              >
                <img
                  src={item.Poster}
                  alt=""
                  className="img-card"
                  style={{ height: 200 }}
                />
                <p>{item.Title}</p>
              </div>
            ))
          ) : (
            <div className="text-center">
              <h3>....</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
