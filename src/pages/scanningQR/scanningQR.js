import { QrCodeScannerRounded } from "@mui/icons-material";
import { Button, CircularProgress, Typography, useTheme } from "@mui/material";
import React, { useState, useEffect } from "react";
import { QrReader } from "react-qr-reader";
import QR from "../../assets/images/QR.svg";

function ScanningQR() {
  const theme = useTheme();

  const [data, setData] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {}, [show]);

  const buttonText = () => {
    if (show && !data) {
      return "Stop Scan";
    } else if (data) {
      return "Clear Address";
    } else {
      return "Start Scan";
    }
  };

  return (
    <div>
      <div
        style={{
          borderBottomLeftRadius: "50px",
          borderBottomRightRadius: "50px",
          backgroundColor: theme.palette.primaryBG.main,
          padding: "40px 50px 20px 50px",
        }}
      >
        {show && !data ? (
          <QrReader
            onResult={(result, error) => {
              if (!!result) {
                setData(result?.text);
              }

              if (!!error) {
                console.info(error);
              }
            }}
            style={{ width: "90%", margin: "30px" }}
          />
        ) : (
          <div style={{ width: "90%", margin: "30px 20px" }}>
            <img src={QR} alt="QR" />
          </div>
        )}
      </div>

      <div style={{ textAlign: "center", marginTop: "100px" }}>
        {!show && (
          <Typography>Tap button below to start QR scanning</Typography>
        )}
        {!data && show && <CircularProgress />}
        {!data && show && <Typography>Place the camera close to QR</Typography>}
        {data && (
          <Typography>Tap button below to clear the web address</Typography>
        )}
        <Typography color="primary">{data}</Typography>

        <Button
          variant="contained"
          fullWidth
          onClick={() => {
            setShow(!show);
            if (data) {
              setData();
            }
          }}
          style={{ marginTop: "10px" }}
        >
          {buttonText()}
        </Button>
      </div>
    </div>
  );
}

export default ScanningQR;
