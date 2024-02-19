import Home from "./components/Home";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CaseRegister from "./components/CaseRegister";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/newcase" element={<CaseRegister />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
