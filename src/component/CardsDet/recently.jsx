import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
const Recently = ({ cardsItem, CardsDet }) => {
  return (
    <Grid sx={{ marginBottom: "10%", marginTop: "40%" }}>
      <Typography
        variant="h3"
        sx={{
          color: "black",
          fontWeight: "700",
          width: "900px",
          marginBottom: "2%",
          marginTop: "3%",
        }}
      >
        Recently Viewed
      </Typography>
      <Box sx={{ display: "flex", gap: "2% ", zIndex: "2" }}>
        {cardsItem.map((index) => (
          <CardsDet key={index} CardsDet={CardsDet} />
        ))}
        <Card
          sx={{
            background: "./images/recently.png",
            backgroundSize: "cover",
            padding: "3%",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "white",
              fontWeight: "700",
            }}
          >
            Summer Bonanza!
          </Typography>
          <Typography
            sx={{
              color: "white",

              width: "300px",
            }}
          >
            Enjoy confortable transfers in shared coaches
          </Typography>
          <Typography
            sx={{
              color: "white",

              width: "300px",
            }}
          >
            Choose from 5 flights per week
          </Typography>
          <Typography
            sx={{
              color: "white",
              width: "300px",
            }}
          >
            Get a free Rapid Antigen Test at selected hotels
          </Typography>
        </Card>
      </Box>
    </Grid>
  );
};

export default Recently;
