import React from "react";
import "../Topcategories/Topcategories.scss";
import { BsThreeDots } from "react-icons/bs";
import { IconButton } from "@mui/material";
import { Categories } from "../../Dummies/Courses";

const TopCategories = () => {
  const categories = Categories;

  const container = {
    height: 7,
    maxWidth: "100%",
    backgroundColor: "#eee",
    margin: 50,
  };

  const bar = {
    height: "100%",
    width: `${categories.progress}%`,
    backgroundColor: "#90caf9",
    borderRadius: "2px",
  };

  return (
    <div className="topcategory">
      <div className="head">
        <div className="title">
          <div>Top Categories</div>
          <p>In the last 15 days buys and sells overview</p>
        </div>

        <div className="option">
          <div className="div">
            <IconButton>
              <BsThreeDots />
            </IconButton>
          </div>
        </div>
      </div>

      <div className="categories">
        {categories &&
          categories.map((data) => (
            <div className="wrapper">
              <div className="pro-gress">
                <div
                  style={{
                    height: 7,
                    maxWidth: "100%",
                    backgroundColor: `${data.backgroundColor}`,
                  }}
                  className="container"
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${data.progress}%`,
                      backgroundColor: `${data.color}`,
                    }}
                    role="progressbar"
                    aria-valuenow={data.progress}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </div>

              <div className="prog-name">
                <span
                  style={{
                    background: `${data.color}`,
                    height: 10,
                    width: 10,
                    borderRadius: 2,
                  }}
                ></span>
                <p>{data.category}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TopCategories;
