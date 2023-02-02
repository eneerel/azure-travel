import React from "react";
import HeaderDet from "../../component/HeaderDet";
import CardsDet from "../../component/CardsDet";
import Recently from "../../component/CardsDet/recently";
import { Grid } from "@mui/material";
const Stays = () => {
  return (
    <Grid>
      <HeaderDet />
      {/* <CardsDet /> */}
      <Recently />
    </Grid>
  );
};

export default Stays;
