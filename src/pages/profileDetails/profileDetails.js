import { Box, Container, Typography, Button, Link } from "@mui/material";

import React from "react";
import data from "../../assets/images/data.svg";
import SendIcon from "@mui/icons-material/Send";

function ProfileDetails() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      margin={5}
      justifyContent="space-around"
      alignItems="center"
      textAlign={"center"}
      height={"91vh"}
    >
      <Box width="60vw" height="60vw">
        <img src={data} alt="img" />
      </Box>
      <Container>
        <Button
          variant="contained"
          fullWidth
          href="/edit-profile"
          style={{ marginBottom: "10px", fontWeight: 700, padding: "1.1rem", fontSize: "1rem" }}
        >
          Fill Profile Details
        </Button>
        <Button
          variant="outlined"
          fullWidth
          href="/done"
          style={{ fontWeight: 700, padding: "1.1rem", fontSize: "1rem" }}
        >
          Skip
        </Button>
      </Container>

      {/* <Typography align="center" fontSize="1rem" marginTop={".5rem"}>
        By filling details, you agree to our
        <Link href="#"> Privacy Policy</Link> and
        <Link href="#"> Terms and Conditions</Link>
      </Typography> */}
    </Box>
  );
}

export default ProfileDetails;
