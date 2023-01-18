import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Authpage from "./pages/Auth";
import Home from "./pages/Home";
function App() {
  return (
    <Router>
      <CssBaseline />
      <Routes>
        <Route path="/Auth" element={<Authpage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
export default App;
