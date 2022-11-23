import {
  Box,
  IconButton,
  Typography,
  useTheme,
  LinearProgress,
  Button,
  BottomNavigation,
  BottomNavigationAction,
  Paper,
} from "@mui/material";

import React from "react";
import ReactApexChart from "react-apexcharts";
import LockIcon from "@mui/icons-material/Lock";
import GiftIcon from "@mui/icons-material/CardGiftcard";
import ThreeDOts from "@mui/icons-material/MoreVert";
import GiftItems from "../../assets/icons/gift.png"

import {
  ArrowBackIosNewRounded,
  HomeRounded,
  QrCodeRounded,
} from "@mui/icons-material";

const state = {
  series: [34, 55, 41],
  options: {
    series: [34, 55, 41],
    labels: ["Apple", "Banana", "Grapes"],
    chart: {
      type: "donut",
    },

    plotOptions: {
      pie: {
        donut: {
          size: "45%",
          labels: {
            show: true,
            total: {
              show: true,
              showAlways: true,
              label: "Balance",
            },
          },
        },
      },
    },

    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 370,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  },
};

function Rewords() {
  const theme = useTheme();

  const [value, setValue] = React.useState(0);

  return (
    <>
      <div
        style={{
          backgroundColor: theme.palette.primaryBG.main,
        }}
      >
        <Box
          paddingTop={"5vh"}
          paddingBottom={"3vh"}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <ReactApexChart
            options={state.options}
            series={state.series}
            type="donut"
          />
        </Box>
        <div
          style={{
            borderTopLeftRadius: "50px",
            borderTopRightRadius: "50px",
            backgroundColor: theme.palette.white.main,
            marginBottom: "100px",
          }}
        >
          <div style={{ marginTop: "5px", padding: "8px" }} />

          <Box
            borderRadius="20px"
            bgcolor={(theme) => theme.palette.primaryBG.main}
            padding={"15px"}
            marginTop="30px"
            marginLeft={"40px"}
            marginRight={"40px"}
            borderRight={"12px solid #00617D"}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                color={'black'}
                fontWeight="fontWeightMedium"
                fontSize={"1.5rem"}
              >
                Rewards
              </Typography>
              {/* <IconButton>
                <ThreeDOts sx={{ fontSize: 20 }} />
              </IconButton> */}
            </Box>

            <Box
              display={"flex"}
              justifyContent="space-between"
              alignItems={"center"}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                {/* <GiftIcon
                  sx={{ fontSize: 30, marginRight: "9px" }}
                  color="secondary"
                /> */}
                <img src={GiftItems} alt="gif-img" />
                <div>
                  <Typography
                    color={'black'}
                    fontWeight="fontWeightMedium"
                    fontSize={"1.2rem"}
                  >
                    Free coffee
                  </Typography>
                  <Typography fontSize={"1rem"}>Need 100 points</Typography>
                </div>
              </div>

              <IconButton color={'black'}>
                <LockIcon sx={{ fontSize: 30 }} />
              </IconButton>
            </Box>
            <Box
              display={"flex"}
              justifyContent="space-between"
              alignItems={"center"}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                {/* <GiftIcon
                  sx={{ fontSize: 30, marginRight: "9px" }}
                  color="secondary"
                /> */}
                <img src={GiftItems} alt="gif-img" />
                <div>
                  <Typography
                    color={'black'}
                    fontWeight="fontWeightMedium"
                    fontSize={"1.2rem"}
                  >
                    Sandwich
                  </Typography>
                  <Typography fontSize={"1rem"}>Need 150/300 points</Typography>
                </div>
              </div>

              <Box display="flex" alignItems="center">
                <Box width="45px" mr={1}>
                  <LinearProgress
                    variant="determinate"
                    value={35}
                    style={{ height: "9px", borderRadius: "10px" }}
                  />
                </Box>
                <Typography
                  variant="body2"
                  color="primary"
                >{`${35}%`}</Typography>
              </Box>
            </Box>
            <Box textAlign={"center"} marginTop="1.4rem" >
              <Button variant="contained" padding={'0px'}>Show more</Button>
            </Box>
          </Box>

          <Box
            borderRadius="20px"
            bgcolor={(theme) => theme.palette.primaryBG.main}
            padding={"15px"}
            marginTop="30px"
            marginLeft={"40px"}
            marginRight={"40px"}
            borderRight={"12px solid #00617D"}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                color={'black'}
                fontWeight="fontWeightMedium"
                fontSize={"1.5rem"}
              >
                Get extra points
              </Typography>
              {/* <IconButton>
                <ThreeDOts sx={{ fontSize: 20 }} />
              </IconButton> */}
            </Box>

            <Box
              display={"flex"}
              justifyContent="space-between"
              alignItems={"center"}
            >
              <div>
                <Typography
                  color={'black'}
                  fontWeight="fontWeightMedium"
                  fontSize={"1.2rem"}
                >
                  We love feedback!
                </Typography>
                <Typography fontSize={"1rem"}>
                  Let us know how we did
                </Typography>
              </div>

              <Box
                bgcolor={theme.palette.primaryBGDark.main}
                padding="5px"
                borderRadius={"7px"}
                textAlign="center"
              >
                <Typography color={theme.palette.primary.main}>+40</Typography>
                <Typography color={theme.palette.primary.main}>
                  points
                </Typography>
              </Box>
            </Box>
            <Box
              marginTop={".5rem"}
              display={"flex"}
              justifyContent="space-between"
              alignItems={"center"}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <div>
                  <Typography
                    color={'black'}
                    fontWeight="fontWeightMedium"
                    fontSize={"1.2rem"}
                  >
                    Enjoy with friends
                  </Typography>
                  <Typography fontSize={"1rem"}>
                    Share with your friends & earn gifts
                  </Typography>
                </div>
              </div>

              <Box
                bgcolor={theme.palette.primaryBGDark.main}
                padding="5px"
                borderRadius={"7px"}
                textAlign="center"
              >
                <Typography color={theme.palette.primary.main}>+20</Typography>
                <Typography color={theme.palette.primary.main}>
                  points
                </Typography>
              </Box>
            </Box>
          </Box>
        </div>
      </div>

      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
        }}
        elevation={3}
      >
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            icon={<HomeRounded sx={{ fontSize: "30px" }} />}
          />

          <BottomNavigationAction
            icon={
              <QrCodeRounded
                sx={{
                  fontSize: "50px",
                  position: "absolute",
                  borderRadius: "500px",
                  border: "2px solid",
                  padding: ".8rem",
                  color: theme.palette.primary.main,
                  bgcolor: "white",
                }}
              />
            }
          />

          <BottomNavigationAction
            icon={<ArrowBackIosNewRounded sx={{ fontSize: "30px" }} />}
          />
        </BottomNavigation>
      </Paper>
    </>
  );
}

export default Rewords;
