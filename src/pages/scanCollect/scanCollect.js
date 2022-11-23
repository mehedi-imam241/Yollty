import { CardGiftcard } from "@mui/icons-material";
import { Button, Typography, Box } from "@mui/material";

import React from "react";
import coffeeShop from "../../assets/images/coffeeShop.svg";

function ScanCollect() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-around"
      alignItems="center"
      margin="3rem"
      height="80vh"
    >
      <div style={{ width: "80%", marginTop: "10%" }}>
        <img src={coffeeShop} alt="" srcset="" />
      </div>
      <Typography
        marginTop={"2rem"}
        fontWeight="fontWeightMedium"
        fontSize="20px"
      >
        Scan and collect 1 stamp
      </Typography>
      <Button variant="contained" fullWidth startIcon={<CardGiftcard />}>
        Claim a gift
      </Button>
    </Box>
  );
}

export default ScanCollect;
