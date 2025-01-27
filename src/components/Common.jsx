"use client"
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { useTheme } from "@mui/material";
import Container from "./Container";


const Common = ({ H1, main, H2,bold, paragraph, includingImage }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("600"));
  const isTabletScreen = useMediaQuery("(max-width:899px)");

  return (
    <>
      <Container>
        <Box
          sx={{
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "flex-start",
            py: "7%",
            px:isMobile?"10%": isTabletScreen?"7%" :"4%"
            // py: isLargeScreen ? "1%" : "8%", // Adjust the padding for large screens
          }}
        >
          <Grid container>
            <Grid item lg={6} xs={12} md={6} order={isTabletScreen ? 2 : 1}>
              <Typography>
                <span
                  style={{
                    color: "#001B2E",
                    fontFamily: "clash display",
                    fontSize: isTabletScreen ? "25px" : "45px",
                    fontStyle: "normal",
                    fontWeight: "300",
                    lineHeight: "normal",
                  }}
                >
                  {H1}
                </span>
                &nbsp;
                <span
                  style={{
                    color: "#001B2E",
                    fontFamily: "clash display",
                    fontSize: isTabletScreen ? "25px" : "50px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "normal",
                  }}
                >
                  {main}
                </span>
                <span
                  style={{
                    color: "#001B2E",
                    fontFamily: "clash display",
                    fontSize: isTabletScreen ? "25px" : "50px",
                    fontStyle: "normal",
                    fontWeight: "300",
                    lineHeight: "normal",
                  }}
                >
                  {H2}
                </span>
                <span
                  style={{
                    color: "#E95A0C",
                    fontFamily: "clash display",
                    fontSize: isTabletScreen ? "25px" : "50px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "normal",
                  }}
                >
                  {bold}
                </span>
                <Typography sx={{borderBottom:"5px solid #2D3C65" ,maxWidth:"30vh" , pb:"2%"}}> </Typography>
              </Typography>
              <Typography
                sx={{
                  color: "#001B2E",
                  fontFamily: "clash display",
                  fontSize: isTabletScreen ? "9px" : "18px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "normal",
                  marginTop: "5%",
                  // inline: "block",
                }}
              >
                {paragraph}
              </Typography>
              
              {/* <Typography
                // variant="h3"
                sx={{
                  color: "white",
                  marginTop: { lg: "300px", md: "200px", xs: "40px" },
                }}
              >
                <span
                  style={{
                    color: "#FFF",
                    fontFamily: "clash display",
                    fontSize: isTabletScreen ? "25px" : "45px",
                    fontStyle: "normal",
                    fontWeight: "300",
                    lineHeight: "normal",
                  }}
                >
                  {H3}
                </span>
              </Typography>
              <Typography
                // variant="h3"
                sx={{ color: "white" }}
              >
                <span
                  style={{
                    color: "#D0140F",
                    fontFamily: "clash display",
                    fontSize: isTabletScreen ? "25px" : "50px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "normal",
                  }}
                >
                  {H4}
                </span>
              </Typography> */}
            </Grid>

            {/* image part */}
            {includingImage && (
              <Grid
                item
                lg={6}
                xs={12}
                md={6}
                order={isTabletScreen ? 1 : 2}
                sx={{
                  [theme.breakpoints.up("md")]: {
                    display: "flex",
                    justifyContent: "flex-end",
                    // marginRight: isLargeScreen ? "2%" : 0, // Adjust the margin for large screens
                  },

                  [theme.breakpoints.down("md")]: {
                    display: "flex",
                    justifyContent: "right",
                  },
                }}
              >
                <Image
                  src="/assets/x.png"
                  //   height={500}
                  //   width={500}
                  height={isMobile ? 180 : isTabletScreen ? 250 : 600} // Adjust heights for different breakpoints
                  width={isMobile ? 130 : isTabletScreen ? 250 : 400}
                ></Image>
              </Grid>
            )}
          </Grid>
        </Box>
      </Container>
    </>
  );
};
export default Common;
