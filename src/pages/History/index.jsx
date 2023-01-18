import React from "react";
import Back from "../../components/backButton";
import { useSelector } from "react-redux";
export default function History() {
  const dataHistory = useSelector((state) => state.history.data);
  console.log(dataHistory);
  return (
    <div>
      <Back title="history" />
      {dataHistory.length > 0 ? (
        dataHistory.map((item) => (
          <div key={item.imdbID}>
            <div style={{ display: "flex", marginBottom: "20px" }}>
              <img
                src={item.Poster}
                alt=""
                style={{ width: "40%", marginRight: "15px", height: "220px" }}
              />
              <div>
                <h2>{item.Title}</h2>
                <h2>Seats : </h2>{" "}
                <div style={{ display: "flex" }}>
                  {item.selected.map((item, index) => (
                    <h2 key={index}>{item},</h2>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center">
          <h3>....</h3>
        </div>
      )}
    </div>
  );
}
