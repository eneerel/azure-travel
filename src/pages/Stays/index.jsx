import React from "react";
import HeaderDet from "../../component/HeaderDet";
import Card from "../../component/Cards" 
import CardP from "../../component/CardPackage";
import CardS from "../../component/CardSpecial";
import Recently from "../../component/CardsDet/recently";
import { Grid } from "@mui/material";
const Stays = () => {
  return (
    <Grid>
      <HeaderDet />
      <Card/>
      <Recently />
      <CardP/>
      <CardS/>
    </Grid>
  );
};

export default Stays;
