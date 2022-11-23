import { Box, Container, Typography, Button, Link } from "@mui/material";

import React from "react";
// import done from "../../assets/images/Done.svg";
import done from "../../assets/images/reg-done.png";
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
        <Box>
          <img src={done} alt="img" style={{ width: "250px" }} />
        </Box>
        <Container>
          <Typography
            align="center"
            fontSize="2.5rem"
            marginTop={".5rem"}
            color={"black"}
            padding={0}
            gutterBottom
          >
            Account Created!
          </Typography>
          <Typography align="center" fontSize="1.1rem" margin={".5rem"}>
            Dear User, your account has been created successfully. Continue to
            start using app
          </Typography>
        </Container>

        <Button
          variant="contained"
          fullWidth
          style={{ marginBottom: "10px", fontWeight: 700, padding: "1.1rem", fontSize: "1rem" }}
        >
          Continue
        </Button>
      </Box>
    </div>
  );
}

export default Done;
