import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Homepage from "./homepage/homepage";

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Homepage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
     

export default App;
