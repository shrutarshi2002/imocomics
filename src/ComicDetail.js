// src/pages/ComicDetail.js
import React from "react";
import { useParams, Link } from "react-router-dom";
import comicsData from "./data";

function ComicDetail() {
  const { id } = useParams();
  const comic = comicsData.find((c) => c.id === parseInt(id));

  if (!comic) {
    return <h2 style={{ textAlign: "center" }}>Comic Not Found!</h2>;
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>{comic.title}</h2>
      <img
        src={comic.imgsrc}
        alt={comic.title}
        style={{ width: "400px", borderRadius: "10px", margin: "20px 0" }}
      />
      <p style={{ maxWidth: "600px", margin: "0 auto", fontSize: "18px" }}>
        {comic.story}
      </p>

      <Link to="/">
        <button
          style={{
            marginTop: "20px",
            padding: "10px 16px",
            border: "none",
            borderRadius: "6px",
            background: "tomato",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          🔙 Back to Home
        </button>
      </Link>
    </div>
  );
}

export default ComicDetail;
