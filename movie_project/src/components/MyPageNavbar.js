import React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import MyPageDropdown from "../components/MyPageDropdown";

const StickyHeader = () => {
  const theme = useTheme();
  const isMiddleScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <AppBar position="fixed">
      <Toolbar
        style={{
          height: 70,
          background: "#212121",
        }}
      >
        {isSmallScreen ? (
          <Grid container>
            <Grid item xs={3}>
              <Typography
                noWrap
                component="a"
                href="/login"
                sx={{
                  mr: 2,
                  fontFamily: "helvetica",
                  fontWeight: 1000,
                  letterSpacing: ".1rem",
                  color: "red",
                  textDecoration: "none",
                  fontSize: "2.5em",
                }}
              >
                {isSmallScreen ? "N" : "NETFLIX"}
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <MyPageDropdown />
            </Grid>
          </Grid>
        ) : isMiddleScreen ? (
          <Grid container>
            <Grid item xs={6}>
              <Typography
                noWrap
                component="a"
                href="/login"
                sx={{
                  mr: 2,
                  fontFamily: "helvetica",
                  fontWeight: 1000,
                  letterSpacing: ".1rem",
                  color: "red",
                  textDecoration: "none",
                  fontSize: "2.5em",
                }}
              >
                {isSmallScreen ? "N" : "NETFLIX"}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <MyPageDropdown />
            </Grid>
          </Grid>
        ) : (
          <Grid container>
            <Grid item xs={9}>
              <Typography
                noWrap
                component="a"
                href="/login"
                sx={{
                  mr: 2,
                  fontFamily: "helvetica",
                  fontWeight: 1000,
                  letterSpacing: ".1rem",
                  color: "red",
                  textDecoration: "none",
                  fontSize: "2.5em",
                }}
              >
                {isSmallScreen ? "N" : "NETFLIX"}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <MyPageDropdown />
            </Grid>
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default StickyHeader;
