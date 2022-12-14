// css format
import "./App.css";

// Imports the paths
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Favorites from "./pages/Favorites";
import Dietpage from "./pages/Dietpage";
import Login from "./pages/Login";
import Test from "./pages/test.js";

// Routing
import { Route, Routes } from "react-router-dom";

//the home/... might be the incorrect way of formatting cuz its not a folder
function App() {

  return (
    <div className="home">
      <Routes>
        <Route  path="/" element={<Login />} />
        <Route  path="/home" element={<Home />} />
        <Route  path="/recipes" element={<Recipes />} />
        <Route  path="/dietpage" element={<Dietpage />} />
        <Route  path="/favorites" element={<Favorites />} />
        <Route path="/test" element = {<Test/>}/>
      </Routes>
    </div>
  );
}

export default App;
