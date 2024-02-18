import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import NotFound from "./components/NotFound/NotFound";
import MealSingle from "./components/Meal/MealSingle";
import MealList from "./components/Meal/MealList";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<MealList />} />
        <Route path="/:id" element={<MealSingle />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
