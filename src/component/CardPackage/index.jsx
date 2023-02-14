import React from "react";
import { Box, Grid, Typography ,Card} from "@mui/material";
import { cardsItem } from "./data";
import CardsDet from "../CardsDet";
const CardP = () => {
  return (
    <Grid sx={{ marginBottom: "10%" }}>
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
        All Inclusive Packages!
      </Typography>
      <Box sx={{
          display: "flex",
          overflowX: "auto",
          gap: "20px",
          "&::-webkit-scrollbar": { display: "none" },
        }} >
        {cardsItem.map((cardItem, index) => {
          console.log("carduud", cardItem)
         return <CardsDet key={index} cardItem={cardItem} />
})}
      </Box>
    </Grid>
  );
};

export default CardP;