import React from "react";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import { mealSliceActions } from "../../store/Mealreducer";
import { useEffect } from "react";

import { Link, useParams } from "react-router-dom";

const MealList = ({ filteredMeals }) => {
  const { id } = useParams();
  const [meals, setMeals] = useState([]);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.meal.loading);
  const error = useSelector((state) => state.meal.error);
  useEffect(() => {
    const fechedData = async () => {
      dispatch(mealSliceActions.setLoading());
      try {
        const response = await fetch(
          //https://www.themealdb.com/api/json/v1/1/search.php?s=
          "https://www.themealdb.com/api/json/v1/1/search.php?s="
        );
        if (!response.ok) {
          throw new Error("something went wrong");
        }
        const data = await response.json();
        setMeals(data.meals);
        console.log(data);
        dispatch(mealSliceActions.setError());
        dispatch(mealSliceActions.setLoading());
      } catch (error) {
        dispatch(mealSliceActions.setError(error.message));
      }
    };
    fechedData();
  }, []);
  return (
    <div className="container row">
      {loading && <Loader />}
      {error && <p> {error}</p>}{" "}
      {meals.map((meal, index) => (
        <div className="container col-md-3" key={index}>
          <h1 className="text-dark fs-md-5" key={meal.idMeal}>
            {meal.strMeal}
          </h1>
          <Link to={`/${meal.idMeal}`} className="nav-link">
            {" "}
            <img
              src={meal.strMealThumb}
              alt="there is no image mach to that"
              className="img-fluid rounded-circle "
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MealList;
