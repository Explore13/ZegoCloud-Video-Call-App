import "./App.css";
import Home from "./components/Home";
import Video from "./components/Video";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:roomID" element={<Video />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
