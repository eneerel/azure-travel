import React from "react";
import Navbar from "../../components/Header/NavBar";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import SearchInput from "../../components/Header/Search";
import Footer from "../../components/Footer";

const Detail = () => {
  return (
    <Grid
      sx={{
        background: "url(/pic/38.png) no-repeat ",
        backgroundSize: "cover",
        width: "100%",
        height: "100vh",
        fill: "linearGradient rgba(255, 255, 255, 0)",
      }}
    >
      <Box>
        <Grid sx={{ marginLeft: "10%", marginRight: "10%" }}>
          <Navbar />
          <Grid sx={{ marginBottom: "5%" }}>
            {/* title */}
            <SearchInput />
           {/* maintitle */}
           {/* Crads */}
          </Grid>
        </Grid>
        <Footer />
      </Box>
    </Grid>
  );
};

export default Detail;