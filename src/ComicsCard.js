// src/components/ComicCard.js
import React from "react";
import { Link } from "react-router-dom";

function ComicCard({ id, title, image, description }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "10px",
        width: "250px",
        margin: "10px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <h3 style={{ marginTop: "10px" }}>{title}</h3>
      <p>{description}</p>
      <Link to={`/comic/${id}`}>
        <button
          style={{
            marginTop: "10px",
            padding: "8px 12px",
            border: "none",
            borderRadius: "6px",
            background: "#007BFF",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Read More
        </button>
      </Link>
    </div>
  );
}

export default ComicCard;
