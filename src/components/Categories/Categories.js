import React, { useState } from "react";
import "./_categories.scss";

const keywords = [
  "All",
  "Among Us",
  "Javascript",
  "Music",
  "React JS",
  "Computer Science",
  "Jojo's Bizarre Adventure",
  "Anime",
  "Podcasts",
  "Cricket",
  "Data Science",
  "Bodybuilding",
  "Comedy",
  "Woodworking",
  "Tools",
];

const Categories = () => {
  const [category, setCategory] = useState("All");

  const handleClick = (value) => {
    setCategory(value);
  };
  return (
    <div className="categories_bar">
      {keywords.map((value, index) => (
        <span
          className={category === value ? "active" : ""}
          onClick={() => handleClick(value)}
          key={index}
        >
          {value}
        </span>
      ))}
    </div>
  );
};

export default Categories;
