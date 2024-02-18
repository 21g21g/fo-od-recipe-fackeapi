import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mealSliceActions } from "../../store/Mealreducer";
import Loader from "../Loader/Loader";
import { useParams } from "react-router";

const MealSingle = () => {
  const { id } = useParams();
  const loading = useSelector((state) => state.meal.loading);
  const error = useSelector((state) => state.meal.error);
  const dispatch = useDispatch();
  const [meals, setMeals] = useState(null);

  useEffect(() => {
    const fetchedData = async () => {
      dispatch(mealSliceActions.setLoading());
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        if (!response.ok) {
          throw new Error("cannot fetch data");
        }
        const data = await response.json();
        console.log(data);

        setMeals(data.meals[0]);
        dispatch(mealSliceActions.setLoading());
        dispatch(mealSliceActions.setError());
      } catch (error) {
        dispatch(mealSliceActions.setError(error.message));
        dispatch(mealSliceActions.setLoading());
      }
    };
    fetchedData();
  }, [id]);
  return (
    <div className="container">
      {loading && <Loader />}
      {error && <p>{error}</p>}
      {meals && (
        <div className="container d-flex flex-column  align-item-center">
          <div className="container d-flex flex-row justify-content-between">
            <img
              src={meals.strMealThumb}
              alt="there is o image exist"
              className="img-fluid rounded-circle"
              style={{ maxHeight: "100px" }}
            />
            <div className="container d-flex flex-column align-item-center">
              <h1>{meals.strMeal}</h1>
              <h1>Catagory:{meals.strCategory}</h1>
              <h1>source:{meals.strSource}</h1>
              <h1>Tags:{meals.strTags}</h1>
              <div
                className="container d-flex flex-column  align-item-center"
                style={{ backgroundColor: "GrayText" }}
              >
                <h1>Ingrediants:</h1>
                <h2>1.{meals.strIngredient1}</h2>
                <h2>2.{meals.strIngredient2}</h2>
                <h2>3.{meals.strIngredient3}</h2>
                <h2>4.{meals.strIngredient4}</h2>
                <h2>5.{meals.strIngredient5}</h2>
                <h2>6.{meals.strIngredient6}</h2>
              </div>
            </div>
          </div>
          <div className="container d-flex flex-column">
            <h1>Measure:</h1>
            <div className="container d-flex flex-row justify-content-between">
              <div className="container d-flex flex-column ">
                <p>{meals.strMeasure1}</p>
                <p>{meals.strMeasure2}</p>
                <p>{meals.strMeasure3}</p>
                <p>{meals.strMeasure4}</p>
                <p>{meals.strMeasure5}</p>
              </div>
              <div className="container d-flex flex-column ">
                <p>{meals.strMeasure6}</p>
                <p>{meals.strMeasure7}</p>
                <p>{meals.strMeasure8}</p>
                <p>{meals.strMeasure9}</p>
                <p>{meals.strMeasure10}</p>
              </div>
            </div>
          </div>
          <div className="container d-flex flex-column">
            <h1>Instructions:</h1>
            <p>{meals.strInstructions}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MealSingle;
