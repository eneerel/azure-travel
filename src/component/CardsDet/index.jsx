import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
const Cardsixdata = () => {
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
        <img src={`${card.imageURL}`} alt="" width={360} height={310} />
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
            <Box> {card.ner}</Box>
            <Box>
              <StarIcon />
              {card.rating}
            </Box>
          </Box>

          <Box sx={{ opacity: 0.5, fontSize: "18px", marginBottom: "5%" }}>
            {" "}
            {card.time}
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
            <img src={`${card.minimapURL}`} alt="" width={30} height={30} />
            <Box sx={{ color: "black" }}>{card.minimapname}</Box>
          </Box>
          <Box>
            <img src={`${card.minimaptwoURL}`} alt="" width={30} height={30} />
            <Box sx={{ color: "black" }}>{card.minimapnametwo}</Box>
          </Box>
          <Box>
            <img
              src={`${card.minimapthreeURL}`}
              alt=""
              width={30}
              height={30}
            />
            <Box sx={{ color: "black" }}>{card.minimapnamethree}</Box>
          </Box>
          <Box>
            <img src={`${card.minimaptourURL}`} alt="" width={30} height={30} />
            <Box sx={{ color: "black" }}>{card.minimapnamefour}</Box>
          </Box>
        </Box>
        <Box
          sx={{
            opacity: "0.5",
            fontSize: "18px",
            marginBottom: "5%",
          }}
        >
          <li>{card.typeone}</li>
          <li>{card.typetwo}</li>
          <li>{card.typethree}</li>
        </Box>
        <Box
          sx={{
            display: "flex",

            gap: "20% ",
          }}
        >
          <Box>{card.typefour}</Box>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Box sx={{ fontSize: "24px", fontWeight: "700" }}>
              {card.typefive}
            </Box>
            <Box sx={{ opacity: "0.5", marginTop: "7%" }}>{card.typesix}</Box>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
  };
  const Cardsix = () => {
    const coti = [
      {
        img: "./images/image33.png",
        title: "Swiss Apls",
        rating:"4.7",
        star:<StarIcon/>,
        day: "3Days 4Nights",
        text1: "Tour combo with return airport transter",
        text2:"City Tour",
        text3:"Curios Center",
        type1: "₹88,952",
        type2: "₹88,952",
        type3: "Per person",
        mininame: "2 Flights",
        miniURL: "/images/icon1.png",
        mininametwo: "1 Hotel",
        minitwoURL:"/images/icon2.png",
        mininamethree: "2 Transfers",
        minithreeURL: "/images/icon3.png",
        mininamefour: "4 Activities",
        minitourURL: "/images/icon4.png",
      },
      {
        img: "./images/image34.png",
        title: "Swiss Apls",
        rating:"4.7",
        star:<StarIcon/>,
        day: "3Days 4Nights",
        mininame: "2 Flights",
        miniURL: "/images/icon1.png",
        mininametwo: "1 Hotel",
        minitwoURL:"/images/icon2.png",
        mininamethree: "2 Transfers",
        minithreeURL: "/images/icon3.png",
        mininamefour: "4 Activities",
        minitourURL: "/images/icon4.png",
      },
      {
        img: "./images/image35.png",
        title: "Swiss Apls",
        rating:"4.7",
        star:<StarIcon/>,
        day: "3Days 4Nights",
        mininame: "2 Flights",
        miniURL: "/images/icon1.png",
        mininametwo: "1 Hotel",
        minitwoURL:"/images/icon2.png",
        mininamethree: "2 Transfers",
        minithreeURL: "/images/icon3.png",
        mininamefour: "4 Activities",
        minitourURL: "/images/icon4.png",
      },
      {
        img: "./images/image36.png",
        title: "Swiss Apls",
        rating:"4.7",
        star:<StarIcon/>,
        day: "3Days 4Nights",
        mininame: "2 Flights",
        miniURL: "/images/icon1.png",
        mininametwo: "1 Hotel",
        minitwoURL:"/images/icon2.png",
        mininamethree: "2 Transfers",
        minithreeURL: "/images/icon3.png",
        mininamefour: "4 Activities",
        minitourURL: "/images/icon4.png",
      },
     
    ];
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
          {coti.map((card, index) => (
            <Cardsixdata key={index} card={card} />
          ))}
          <Card
            sx={{
              background: "url(/pic/45.png) no-repeat ",
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
  
  export default Cardsix;