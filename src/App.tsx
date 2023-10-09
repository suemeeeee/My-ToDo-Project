import "./App.css";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import User from "./pages/User";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="mypage" element={<User />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
