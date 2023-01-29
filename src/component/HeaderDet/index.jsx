import { Box, Button, Grid, InputBase } from "@mui/material";
import React from "react";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import PersonIcon from "@mui/icons-material/Person";
import { styled } from "@mui/material/styles";
const HeaderDet = ({ clicked, index }) => {
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "white",
  }));
  return (
    <Box
      sx={{
        backgroundImage: "url(./images/Back.png)",
        backgroundSize: "cover",
        height: { xs: "80vh", md: "90vh" },
        padding: "10%",
        boxShadow: "inset 0 -120px 60px -50px rgb(255,255,255)",
      }}
    >
      <Box sx={{ height: "fit-content" }}>
        <Typography
          variant="h1"
          component="div"
          sx={{
            color: "#fff",
            fontSize: { xs: "32px", sm: "50px", md: "72px" },
            width: "65%",
            margin: { md: "1% 0", xs: "3% 0" },
            fontWeight: "700",
          }}
        >
          The whole world awaits.
        </Typography>
        <Grid
          container
          sx={{
            alignItems: "center",
            borderRadius: "1rem",
            backgroundColor: { md: "rgba(255, 255, 255, 0.4)", xs: "none" },
            padding: { xs: "8px 0", md: "8px 16px" },
          }}
        >
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              minHeight: "36px",
              margin: { xs: "5px 0", md: "0" },
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
              backgroundColor: {
                xs: "rgba(255, 255, 255, 0.4)",
                md: "transparent",
              },
              borderRadius: { xs: "2rem", md: "none" },
            }}
          >
            <SearchIcon
              sx={{ color: "white", opacity: "0.7", alignSelf: "center" }}
            />
            <StyledInputBase
              sx={{
                background: "transparent",
                minWidth: "300px",
              }}
              type="search"
              placeholder="Search destinations, hotels"
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              minHeight: "36px",
              margin: { xs: "5px 0", md: "0" },
              display: "flex",
              justifyContent: "space-around",
              backgroundColor: {
                xs: "rgba(255, 255, 255, 0.4)",
                md: "transparent",
              },
              borderRadius: { xs: "2rem", md: "none" },
            }}
          >
            <Grid sx={{ display: "flex", alignItems: "center" }}>
              <CalendarTodayOutlinedIcon
                sx={{ color: "white", opacity: "0.7" }}
              />
              <Typography sx={{ color: "white", opacity: "0.7" }}>
                Check in
              </Typography>
            </Grid>
            <Box
              sx={{
                fontSize: "20px",
                fontWeight: "lighter",
                color: "white",
                opacity: "0.7",
                display: { xs: "block", md: "none" },
              }}
            >
              &#124;
            </Box>
            <Grid sx={{ display: "flex", alignItems: "center" }}>
              <CalendarTodayOutlinedIcon
                sx={{ color: "white", opacity: "0.7" }}
              />
              <Typography sx={{ color: "white", opacity: "0.7" }}>
                Check out
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={2}
            sx={{
              minHeight: "36px",
              margin: { xs: "5px 0", md: "0" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: {
                xs: "rgba(255, 255, 255, 0.4)",
                md: "transparent",
              },
              borderRadius: { xs: "2rem", md: "none" },
            }}
          >
            <PersonIcon sx={{ color: "white", opacity: "0.7" }} />
            <Typography
              sx={{ lineHeight: "1rem", color: "white", opacity: "0.7" }}
            >
              1 room, 2 adults
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={2}
            sx={{ minHeight: "36px", margin: { xs: "5px 0", md: "0" } }}
          >
            <Button
              variant="contained"
              sx={{
                "&:hover": { color: "white" },
                color: "#2659C3",
                backgroundColor: "white",
                textTransform: "none",
                fontWeight: "bold",
                borderRadius: "2rem",
                width: "100%",
                boxShadow: "none",
              }}
            >
              Search
            </Button>
          </Grid>
        </Grid>
        <Typography
          sx={{
            fontWeight: "bold",
            color: "#fff",
            fontSize: { xs: "28px", md: "32px" },
            margin: "3% 0",
          }}
        >
          Popular Beach Destinations
        </Typography>
      </Box>
    </Box>
  );
};

export default HeaderDet;
