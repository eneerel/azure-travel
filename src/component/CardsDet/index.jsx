import React from "react";
import { Box, Grid } from "@mui/material";


const CardsDet = ({cardItem}) => {
  console.log("card data:",cardItem);
  return (
    <Grid
      sx={{
        padding: "2rem ",
        borderRadius: "2rem",
        boxShadow: "0px 4px 24px  rgba(159, 158, 158, 0.25)",
        background: "#FFFFFF",
        zIndex: "5",
      }}
    >
      <Box sx={{ marginBottom: "4%" }}>
        <img src={`${cardItem.img}`} alt="" width={360} height={200} />
      </Box>
      <Box>
        {" "}
        <Box
          sx={{
            color: "dark",
            fontSize: "2rem",
            fontWeight:"700"
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box> {cardItem.title}</Box>

            <Box>
              {cardItem.star}
              {cardItem.rating}
            </Box>
          </Box>

          <Box sx={{ opacity: 0.5, fontSize: "18px", marginBottom: "5%" }}>
            {" "}
            {cardItem.day}
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            opacity: "0.5",
            textAlign: "center",
            marginBottom: "5%",
          }}
        >
          <Box>
            <img src={`${cardItem.iconURL}`} alt="" width={30} height={30} />
            <Box sx={{ color: "black" }}>{cardItem.iconname}</Box>
          </Box>
          <Box>
            <img
              src={`${cardItem.icontwoURL}`}
              alt=""
              width={30}
              height={30}
            />
            <Box sx={{ color: "black" }}>{cardItem.iconnametwo}</Box>
          </Box>
          <Box>
            <img
              src={`${cardItem.iconthreeURL}`}
              alt=""
              width={30}
              height={30}
            />
            <Box sx={{ color: "black" }}>{cardItem.iconnamethree}</Box>
          </Box>
          <Box>
            <img src={`${cardItem.iconURL}`} alt="" width={30} height={30} />
            <Box sx={{ color: "black" }}>{cardItem.iconnamefour}</Box>
          </Box>
        </Box>
        <Box
          sx={{
            opacity: "0.5",
            fontSize: "1.5rem",
            marginBottom: "5%",
          }}
        >
          <li>{cardItem.text1}</li>
          <li>{cardItem.text2}</li>
          <li>{cardItem.text3}</li>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "20% ",
          }}
        >
          <Box>{cardItem.type1}</Box>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Box sx={{ fontSize: "1.5rem", fontWeight: "700" }}>
              {cardItem.type2}
            </Box>
            <Box sx={{ opacity: "0.5", marginTop: "7%" }}>
              {cardItem.type3}
            </Box>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};
export default CardsDet;
