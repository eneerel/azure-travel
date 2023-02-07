import React from "react";
import HeaderDet from "../../component/HeaderDet";
import Card from "../../component/Cards" 
import Recently from "../../component/CardsDet/recently";
import { Grid } from "@mui/material";
const Stays = () => {
  return (
    <Grid>
      <HeaderDet />
      <Card/>
      <Recently />
    </Grid>
  );
};

export default Stays;
