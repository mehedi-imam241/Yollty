import React, { useState, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Box,
  TextField,
  Typography,
  Button,
  IconButton,
  MenuItem,
  Link,
} from "@mui/material";

import { MuiTelInput } from "mui-tel-input";
import { isValidPhoneNumber } from "react-phone-number-input";
import Back from "@mui/icons-material/ArrowBack";
import Upload from "@mui/icons-material/UploadFile";
import Send from "@mui/icons-material/Send";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

const gender = ["male", "female", "others"];
const country = ["USA", "Bangladesh", "India", "Pakistan"];

function EditProfile() {
  const [date, setDate] = useState(dayjs());

  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    console.log(selectedFile);
  };

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    setSelectedFile(e.target.files[0]);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box flexDirection="column" margin={5} position="relative">
        <IconButton
          color="primary"
          aria-label="go back"
          style={{ position: "absolute" }}
          href="/profile-details"
        >
          <Back
            style={{
              height: "2.5rem",
              width: "2.5rem",
              color: "gray",
            }}
          />
        </IconButton>
        <Typography align="center" fontSize="2.3rem" paddingTop="6px">
          Edit details
        </Typography>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
          marginTop={3}
        >
          <TextField
            variant="outlined"
            margin="normal"
            label="Name"
            error={!!errors.Name}
            helperText={errors?.Name?.message}
            {...register("Name", {
              required: "Empty Field",
            })}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Date of Birth"
              value={date || null}
              onChange={(newValue) => {
                setDate(newValue);
              }}
              renderInput={(params) => (
                <TextField
                  margin="normal"
                  {...params}
                  {...register("Date", {
                    required: "Empty Field",
                  })}
                  error={!!errors.Date}
                  helperText={errors?.Date?.message}
                />
              )}
            />
          </LocalizationProvider>
          <TextField
            variant="outlined"
            margin="normal"
            label="Email"
            error={!!errors.Email}
            helperText={errors?.Email?.message}
            {...register("Email", {
              required: "Empty Field",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />

          <Controller
            name="PhoneNo"
            control={control}
            rules={{
              required: "Field Empty",
              validate: (value) =>
                isValidPhoneNumber(value) || "Invalid phone number",
            }}
            render={({ field: { onChange, value } }) => (
              <MuiTelInput
                value={value}
                onChange={onChange}
                margin="normal"
                label="Phone No"
                defaultCountry={"US"}
                error={!!errors.PhoneNo}
                helperText={errors?.PhoneNo?.message}
              />
            )}
          />

          <div style={{ display: "flex", gap: "10px" }}>
            <TextField
              variant="outlined"
              select
              label="Country"
              fullWidth
              defaultValue={country[0]}
              style={{ marginTop: "7px" }}
              error={!!errors.Country}
              helperText={errors?.Country?.message}
              {...register("Country", {
                required: "Empty Field",
              })}
            >
              {country.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              variant="outlined"
              select
              label="Gender"
              fullWidth
              defaultValue={gender[0]}
              style={{ marginTop: "7px" }}
              error={!!errors.Gender}
              helperText={errors?.Gender?.message}
              {...register("Gender", {
                required: "Empty Field",
              })}
            >
              {gender.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <TextField
            variant="outlined"
            margin="normal"
            label="Address"
            error={!!errors.Address}
            helperText={errors?.Address?.message}
            {...register("Address", {
              required: "Empty Field",
            })}
          />
          <Button
            variant="outlined"
            component="label"
            endIcon={<Upload />}
            style={{ marginTop: "10px" }}
          >
            Upload your image
            <input type="file" onChange={onSelectFile} hidden />
          </Button>
          {selectedFile && (
            <Box
              margin={3}
              display="flex"
              justifyContent={"center"}
              alignItems="center"
              border={"blue"}
            >
              <img height={"150px"} width={"150px"} src={preview} alt="img" />
            </Box>
          )}
          <Button
            variant="contained"
            style={{ marginTop: "10px" }}
            endIcon={<Send />}
            type="submit"
            // to="/done"
            href="/done"
          >
            Submit
          </Button>
          <Typography align="center" fontSize="1rem" marginTop={".5rem"}>
            By filling details, you agree to our
            <Link href="#"> Privacy Policy</Link> and
            <Link href="#"> Terms and Conditions</Link>
          </Typography>
        </Box>
      </Box>
    </form>
  );
}

export default EditProfile;
