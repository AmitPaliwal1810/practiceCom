import {
  Paper,
  Typography,
  Box,
  InputLabel,
  FormControl,
  NativeSelect,
} from "@mui/material";
import React from "react";
import BoardData from "./BoardData";
import ChartData from "./ChartData";
import Navbar from "./Navbar";

const DashBoard = () => {
  return (
    <React.Fragment>
      <Paper elevation={1}
        style={{
          overflowX: "hidden",
        }}
      >
        <Navbar />
        {/* navbar end */}

        {/* data value rendering from BoardData */}

        <Paper
          elevation={1}
          style={{
            margin: "50px 50px 50px 50px",
            padding: "10px 30px 0px 30px",
            background:
              "transparent linear-gradient(180deg, rgba(255, 236, 215, 1) 0%, rgba(255, 201, 201, 1) 100%) 0% 0% no-repeat padding-box",
              border: "1px solid #F88A12",
              borderRadius: "15px",
          }}
        >
          <BoardData />
        </Paper>

        <Paper
          elevation={1}
          style={{
            width: "93%",
            minHeigh: "100vh",
            backgroundColor: "white",
            display: "flex",
            justifyContent: "center",
            margin: "0px 0px 10px 50px",
            borderRadius: "15px",
            
          }}
        >
          <Paper elevation={1} style={{
            width: "100%",
            border: "2px solid #00000029",
            borderRadius: "15px",
            padding: "20px 0 0 0 ",
          }}>
            <Typography
              style={{
                fontSize: "25px",
                marginLeft: "20px",
                color: "#777777",
                fontWeight: "500",
              }}
            >
              Accepted and denied bookings graph
            </Typography>

            <Paper
              elevation={0}
              style={{
                backgroundColor: "white",
                display: "flex",
                padding: "20px",
                margin: "5px 0px 5px 20px"
              }}
            >
              <Box sx={{ minWidth: 150 }}>
                <FormControl fullWidth>
                  <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Age
                  </InputLabel>
                  <NativeSelect
                    defaultValue={1}
                    inputProps={{
                      name: "age",
                      id: "uncontrolled-native",
                    }}
                  >
                    <option value={1}>All Location</option>
                    <option value={2}>Delhi</option>
                    <option value={3}>Noida</option>
                    <option value={4}>Greater Noida</option>
                    <option value={5}>Ghaziabad</option>
                    <option value={6}>Almora</option>
                    <option value={7}>Ramanag</option>
                    <option value={8}>Nainital</option>
                  </NativeSelect>
                </FormControl>
              </Box>

              {/* days */}
              <Box sx={{ minWidth: 150, marginLeft: "20px" }}>
                <FormControl fullWidth>
                  <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Days
                  </InputLabel>
                  <NativeSelect
                    defaultValue={1}
                    inputProps={{
                      name: "age",
                      id: "uncontrolled-native",
                    }}
                  >
                    <option value={1}>Last Period</option>
                    <option value={2}>Last 7 Days</option>
                    <option value={3}>Last 14 Days</option>
                    <option value={4}>Last 21 Days</option>
                    <option value={5}>Last 28 Days</option>
                    <option value={6}>Last 1 Month</option>
                    <option value={7}>Last 2 Month</option>
                    <option value={8}>Last 1 Year</option>
                  </NativeSelect>
                </FormControl>
              </Box>
            </Paper>
            <ChartData />
          </Paper>
        </Paper>
      </Paper>
    </React.Fragment>
  );
};

export default DashBoard;
