import React from "react";
import { Box, Button, Grid, Typography ,Card, CardMedia} from "@mui/material";
import { cardsItem } from "./data";
import CardsDet from ".";
const Recently = () => {
  console.log(cardsItem);
  return (
    <Grid>
      <Typography
        variant="h3"
        sx={{
          color: "black",
          fontWeight: "700",
          width: "900px",
          marginBottom: "3%",
          marginTop: "3%",
        }}
      >
        Recently Viewed
      </Typography>
      <Box sx={{ display: "flex", gap: "2% ", zIndex: "2" }}>
        {cardsItem.map((cardItem, index) => {
          console.log("carduud", cardItem)
         return <CardsDet key={index} cardItem={cardItem} />
})}
        <Card
          sx={{
            background: "url(/images/recently.png)",
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
