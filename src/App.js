import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/home";
import AboutUs from "./screens/about";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Register from "./screens/register";
import Login from "./screens/login";
import StoryDetails from "./screens/storydetails";
import StoryReading from "./screens/story-reading";
import Categories from "./screens/categories";
import Category from "./screens/category";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/story/:id" element={<StoryDetails />} />
        <Route path="/story/reading/:id" element={<StoryReading />} />
        <Route path="/category" element={<Category />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:cateName" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
