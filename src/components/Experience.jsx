import Common from "./Common"
import { Grid,Typography,Link } from "@mui/material"
import Container from "./Container"
export default function Experience(){
    return(
        <>
<Container>
        <Common
        H1="our"
        main="Experience, Skills"
        H2="& Expertise."
        bold="Your Profit."
        paragraph="Office ipsum you must be muted. Conversation banner gave dive investigation chime usabiltiy whatever. Winning of crystallize another container reinvent stands. Left you viral relaxation unlock t-shaped. Ideal deck support attached waste highlights game synchronise."/>
        <Grid container spacing={2} sx={{ padding: "50px" }}>
          <Grid item xs={12} md={4}>
            <Typography style={{color:"#E95A0C" ,fontFamily:"Open Sans", fontWeight:"600",fontSize:"16px",}} > FIRST</Typography>
            <Typography
              variant="h4"
              sx={{
                color: "#001B2E",
                fontFamily: "Open Sans",
                    // py:"10px"
                }}
                >   
              <span><b>Dramatically</b></span><br />
               maintain solutions
              <Typography
                sx={{
                  color: "#001B2E",
                  borderColor: "#FFFF",
                  marginBottom: "10px",
                  fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "18px" },
                  py:"5%",
                  maxWidth: "500px",
                }}
              >
                Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower growth.
              </Typography>
            </Typography>
            <Link  style={{color:"#E95A0C" ,fontFamily:"Open Sans", fontWeight:"600",fontSize:"16px"}}> learn more ...</Link>
          </Grid>

          <Grid item xs={12} md={4}>
          <Typography style={{color:"#E95A0C" ,fontFamily:"Open Sans", fontWeight:"600",fontSize:"16px"}} > Second</Typography>
            <Typography
              variant="h4"
              sx={{
                color: "#001B2E",
                fontFamily: "Open Sans",
              }}
            >
              <span><b>Efficiently unleash</b></span><br />
              media information
              <Typography
                sx={{
                  color: "#001B2E",
                  borderColor: "#FFFF",
                  marginBottom: "10px",
                  fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "18px" },
                  py:"5%",
                  maxWidth: "500px",
                }}
              >
                Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower growth.
              </Typography>
            </Typography>
            <Link  style={{color:"#E95A0C" ,fontFamily:"Open Sans", fontWeight:"600",fontSize:"16px"}}> learn more ...</Link>

          </Grid>
          <Grid item xs={12} md={4}>
          <Typography style={{color:"#E95A0C" ,fontFamily:"Open Sans", fontWeight:"600",fontSize:"16px"}} > Third</Typography>

            <Typography
              variant="h4"
              sx={{
                color: "#001B2E",
                fontFamily: "Open Sans",
              }}
            >
               <span><b>Quickly maximize</b></span><br />
               timely deliverables
              <Typography
                sx={{
                  color: "#001B2E",
                  borderColor: "#FFFF",
                  marginBottom: "10px",
                  fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "18px" },
                  py:"5%",
                  maxWidth: "500px",
                }}
              >
               Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower growth.
              </Typography>
            </Typography>
          <Link  style={{color:"#E95A0C" ,fontFamily:"Open Sans", fontWeight:"600",fontSize:"16px"}}> learn more ...</Link>
          </Grid>

        </Grid>
        </Container>
        
        </>
    )
}