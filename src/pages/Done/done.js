import { Box, Container, Typography, Button, Link } from "@mui/material";

import React from "react";
import done from "../../assets/images/Done.svg";
import SendIcon from "@mui/icons-material/Send";

function Done() {
  return (
    <div>
      <Box
        display="flex"
        flexDirection="column"
        margin={5}
        justifyContent="space-around"
        alignItems="center"
        textAlign={"center"}
        height={"90vh"}
      >
        <Box width="60vw" height="60vw">
          <img src={done} alt="img" />
        </Box>
        <Container>
          <Typography
            align="center"
            fontSize="3.2rem"
            marginTop={".5rem"}
            gutterBottom
          >
            Account Created!
          </Typography>
          <Typography align="center" fontSize="1.5rem" margin={".5rem"}>
            Dear User, your account has been created successfully. Continue to
            start using app
          </Typography>
        </Container>

        <Button
          variant="contained"
          fullWidth
          style={{ marginBottom: "10px", fontWeight: 700 }}
        >
          Continue
        </Button>
      </Box>
    </div>
  );
}

export default Done;
