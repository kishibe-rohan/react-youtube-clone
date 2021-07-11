import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./_categories.scss";

import {
  getPopularVideos,
  getVideosByCategory,
} from "../../redux/actions/videoActions";

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
  "Street Food",
  "Bring Me The Horizon",
  "CrossFit",
  "Subnautica: Below Zero",
];

const Categories = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState("All");

  const handleClick = (value) => {
    setCategory(value);
    if (value === "All") dispatch(getPopularVideos());
    else dispatch(getVideosByCategory(value));
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
