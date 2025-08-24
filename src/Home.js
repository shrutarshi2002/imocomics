// src/pages/Home.js
import React from "react";
import comicsData from "./data";
import ComicCard from "./ComicsCard";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      {comicsData.map((comic) => (
        <ComicCard
          key={comic.id}
          id={comic.id}
          title={comic.title}
          image={comic.imgsrc}
          description={comic.story}
        />
      ))}
    </div>
  );
}

export default Home;
