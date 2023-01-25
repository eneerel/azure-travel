import React from "react";
import Navbar from "../../components/Header/NavBar";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import Search from "../../components/Header/Search";
import Categories from "../../components/Hero/Categories";
import ImgCard from "../../components/Hero/ImgCard";
import Footer from "../../components/Footer";

const Home = ({ changeMode }) => {
  return (
    <Grid
      sx={{
        background: "url(/pic/1.png) no-repeat ",
        backgroundSize: "cover",
        width: "100%",
        height: "100vh",
        fill: "linearGradi1`ent rgba(255, 255, 255, 0)",
        zIndex: "-1",
      }}
    >
      <Box>
        <Grid sx={{ marginLeft: "10%", marginRight: "10%" }}>
          <Navbar changeMode={changeMode} />
          <Grid sx={{ marginBottom: "5%" }}>
            <Search/>
            <Categories/>
          </Grid>
        </Grid>
        <Grid sx={{ marginLeft: "10%", marginBottom: "5%" }}>
          <ImgCard />
        </Grid>

        <Grid sx={{ marginLeft: "10%" }}>
        
          <Mainsec />
          <Grid sx={{ marginRight: "10%" }}>
            <Maintwo />
          </Grid>
          <Mainthree />
        </Grid>
        <Boxshadow />
        <Mainfour />

        <Footer />
      </Box>
    </Grid>
  );
};

export default Home;