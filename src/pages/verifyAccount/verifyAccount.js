import {
  Box,
  TextField,
  Typography,
  Link,
  Button,
  Container,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import SendIcon from "@mui/icons-material/Send";

function VerifyAccount() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        display="flex"
        flexDirection="column"
        margin={5}
        justifyContent="space-around"
        height={"91vh"}
      >
        <Container>
          <Typography
            align="center"
            marginTop="15vh"
            marginBottom="3vh"
            fontSize="2.7rem"
            color={'black'}
          >
            Verify Account!
          </Typography>
          <Typography align="center" fontSize="1.5rem">
            Enter 4 digit Code sent to your mail
          </Typography>
          {/* <Typography gutterBottom align="center" fontSize="1.5rem">
            <Link href="#">abcd@test.com</Link>
          </Typography> */}

          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-around"
            marginTop={5}
          >
            <TextField
              variant="outlined"
              inputProps={{
                maxLength: 1,
                style: { fontSize: 25, padding: 15 },
              }}
              style={{ width: "5rem" }}
              {...register("L1", {
                required: "Empty Field",
              })}
            />
            <TextField
              variant="outlined"
              inputProps={{
                maxLength: 1,
                style: { fontSize: 25, padding: 15 },
              }}
              style={{ width: "5rem" }}
              {...register("L2", {
                required: "Empty Field",
              })}
            />
            <TextField
              variant="outlined"
              inputProps={{
                maxLength: 1,
                style: { fontSize: 25, padding: 15 },
              }}
              style={{ width: "5rem" }}
              {...register("L3", {
                required: "Empty Field",
              })}
            />
            <TextField
              variant="outlined"
              inputProps={{
                maxLength: 1,
                style: { fontSize: 25, padding: 15 },
              }}
              style={{ width: "5rem" }}
              {...register("L4", {
                required: "Empty Field",
              })}
            />
            {console.log(errors)}
          </Box>

          <Typography align="center" fontSize="1.5rem" marginTop={5}>
            Didn't recieve any code?
          </Typography>
          <Typography gutterBottom align="center" fontSize="1.5rem">
            <Link href="#">Resend code</Link>
          </Typography>
        </Container>

        <Container>
          {Object.keys(errors).length !== 0 && (
            <Typography
              align="center"
              fontSize="1.3rem"
              gutterBottom
              color="#e91e63"
            >
              Empty field exists
            </Typography>
          )}
          <Button
            variant="contained"
            // endIcon={<SendIcon />}
            fullWidth
            type="submit"
            style={{ fontSize: "1.4rem", padding: "1.2rem 2rem" }}
          >
            Proceed
          </Button>

          {/* <Typography align="center" fontSize="1.2rem" marginTop={".8rem"}>
            By clicking proceed, you agree to our
            <Link href="#"> Privacy Policy</Link> and
            <Link href="#"> Terms and Conditions</Link>
          </Typography> */}
        </Container>
      </Box>
    </form>
  );
}

export default VerifyAccount;
