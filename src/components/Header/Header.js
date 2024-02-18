import React, { useState } from "react";
import Navbar from "./Navbar";
import back from "../../assets/images/header_image.jpg";
import SearchForm from "./SearchForm";
import MealList from "../Meal/MealList";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import { mealSliceActions } from "../../store/Mealreducer";
import { useEffect } from "react";

import { Link, useParams } from "react-router-dom";

const Header = () => {
  return (
    <div
      className="container-fluid header p-20"
      style={{
        backgroundImage: `URL(${back})`,
        minWidth: "100px",
        width: "100%",
        backgroundSize: "cover",
      }}
    >
      <Navbar />
      <div className="header-content flex align-center justify-center flex-column text-center">
        <SearchForm />

        <h1 className="text-dark header-title ls-2 p-2">
          What are your favorite cuisines?
        </h1>
        <p className="text-uppercase text-white my-3 ls-1 p-3">
          personalize your experience
        </p>
      </div>
    </div>
  );
};

export default Header;
