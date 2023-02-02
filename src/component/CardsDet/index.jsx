import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
const CardsDet = () => {
  const cardsItem = [
    {
      img: "./images/image33.png",
      title: "Swiss Apls",
      rating: "4.7",
      star: <StarIcon />,
      day: "3Days 4Nights",
      text1: "Tour combo with return airport transter",
      text2: "City Tour",
      text3: "Curios Center",
      type1: "₹88,952",
      type2: "₹88,952",
      type3: "Per person",
      iconname: "2 Flights",
      iconURL: "/images/icon1.png",
      iconnametwo: "1 Hotel",
      icontwoURL: "/images/icon2.png",
      iconnamethree: "2 Transfers",
      iconthreeURL: "/images/icon3.png",
      iconnamefour: "4 Activities",
      icontourURL: "/images/icon4.png",
    },
    {
      img: "./images/image34.png",
      title: "Swiss Apls",
      rating: "4.7",
      star: <StarIcon />,
      day: "3Days 4Nights",
      text1: "Tour combo with return airport transter",
      text2: "City Tour",
      text3: "Curios Center",
      type1: "₹88,952",
      type2: "₹88,952",
      type3: "Per person",
      iconname: "2 Flights",
      iconURL: "/images/icon1.png",
      iconnametwo: "1 Hotel",
      icontwoURL: "/images/icon2.png",
      iconnamethree: "2 Transfers",
      iconthreeURL: "/images/icon3.png",
      iconnamefour: "4 Activities",
      icontourURL: "/images/icon4.png",
    },
    {
      img: "./images/image35.png",
      title: "Swiss Apls",
      rating: "4.7",
      star: <StarIcon />,
      day: "3Days 4Nights",
      text1: "Tour combo with return airport transter",
      text2: "City Tour",
      text3: "Curios Center",
      type1: "₹88,952",
      type2: "₹88,952",
      type3: "Per person",
      iconname: "2 Flights",
      iconURL: "/images/icon1.png",
      iconnametwo: "1 Hotel",
      icontwoURL: "/images/icon2.png",
      iconnamethree: "2 Transfers",
      iconthreeURL: "/images/icon3.png",
      iconnamefour: "4 Activities",
      icontourURL: "/images/icon4.png",
    },
    {
      img: "./images/image36.png",
      title: "Swiss Apls",
      rating: "4.7",
      star: <StarIcon />,
      day: "3Days 4Nights",
      text1: "Tour combo with return airport transter",
      text2: "City Tour",
      text3: "Curios Center",
      type1: "₹88,952",
      type2: "₹88,952",
      type3: "Per person",
      iconname: "2 Flights",
      iconURL: "/images/icon1.png",
      iconnametwo: "1 Hotel",
      icontwoURL: "/images/icon2.png",
      iconnamethree: "2 Transfers",
      iconthreeURL: "/images/icon3.png",
      iconnamefour: "4 Activities",
      icontourURL: "/images/icon4.png",
    },
  ];
  return (
    <Grid
      sx={{
        padding: "20px ",
        borderRadius: "16px",
        boxShadow: "0px 4px 16px rgba(158, 158, 158, 0.25)",
        background: "#FFFFFF",
        zIndex: "5",
      }}
    >
      <Box sx={{ marginBottom: "4%" }}>
        <img src={`${cardsItem.img}`} alt="" width={360} height={310} />
      </Box>
      <Box>
        {" "}
        <Box
          sx={{
            color: "dark",
            fontSize: "28px",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box> {cardsItem.title}</Box>

            <Box>
              {cardsItem.star}
              {cardsItem.rating}
            </Box>
          </Box>

          <Box sx={{ opacity: 0.5, fontSize: "18px", marginBottom: "5%" }}>
            {" "}
            {cardsItem.day}
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
            <img src={`${cardsItem.iconURL}`} alt="" width={30} height={30} />
            <Box sx={{ color: "black" }}>{card.iconname}</Box>
          </Box>
          <Box>
            <img
              src={`${cardsItem.icontwoURL}`}
              alt=""
              width={30}
              height={30}
            />
            <Box sx={{ color: "black" }}>{card.iconnametwo}</Box>
          </Box>
          <Box>
            <img
              src={`${cardsItem.iconthreeURL}`}
              alt=""
              width={30}
              height={30}
            />
            <Box sx={{ color: "black" }}>{card.iconnamethree}</Box>
          </Box>
          <Box>
            <img src={`${cardsItem.iconURL}`} alt="" width={30} height={30} />
            <Box sx={{ color: "black" }}>{card.iconnamefour}</Box>
          </Box>
        </Box>
        <Box
          sx={{
            opacity: "0.5",
            fontSize: "18px",
            marginBottom: "5%",
          }}
        >
          <li>{cardsItem.text1}</li>
          <li>{cardsItem.text2}</li>
          <li>{cardsItem.text3}</li>
        </Box>
        <Box
          sx={{
            display: "flex",

            gap: "20% ",
          }}
        >
          <Box>{cardsItem.type1}</Box>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Box sx={{ fontSize: "24px", fontWeight: "700" }}>
              {cardsItem.type2}
            </Box>
            <Box sx={{ opacity: "0.5", marginTop: "7%" }}>
              {cardsItem.type3}
            </Box>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};
export default CardsDet;
