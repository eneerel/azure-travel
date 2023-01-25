
import "./App.css";
import { Grid } from "@mui/material";
import Home from "./pages/Home";
import Detail from "./pages/Details";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Grid className="App">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/Detail" element={<Detail />} />
      </Routes>
    </Grid>
  );
}

export default App;
