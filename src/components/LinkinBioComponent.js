import React from "react";
import profile from "../images/sirenaalyce.png";
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Button,
  Avatar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import EmailIcon from "@material-ui/icons/Email";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

const useStyles = makeStyles((theme) => ({
  root: {},
  avatarstyle: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    left: theme.spacing(10),
  },
  paperstyle: {
    padding: 20,
    background: "rgba( 255, 255, 255, 0.25 )",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur( 4px )",
    borderRadius: "10px",
  },
  linksbuttons: {
    marginTop: 10,
    marginBottom: 10,
  },
  socialgrid: {
    marginTop: 10,
  },
  socialicons: {
    margin: theme.spacing(1),
    borderRadius: 50,
  },
}));

function LinkinBio() {
  const classes = useStyles();
  return (
    <Container maxWidth="xs">
      <Box component="div" my={5}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Paper className={classes.paperstyle}>
              <Avatar
                alt="Sirena Alyce"
                src={profile}
                className={classes.avatarstyle}
              />
              <Typography variant="h2" color="primary" align="center">
                Sirena Alyce
              </Typography>
              <Typography variant="subtitle1" align="center">
                @sirenaalyce.io
              </Typography>
              <Typography variant="subtitle2" align="center">
                Freelance Web and Mobile App Developer
              </Typography>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.linksbuttons}
                    href="https://www.sirenaalyce.com/"
                  >
                    sirenaalyce.com
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.linksbuttons}
                    href="https://www.linkedin.com/in/sirenaalycegandy/"
                  >
                    LinkedIn
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.linksbuttons}
                    href="https://www.twitter.com/sirenaalyce"
                  >
                    Twitter
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.linksbuttons}
                    href="https://www.youtube.com/sirenaalyce"
                  >
                    YouTube
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.linksbuttons}
                    href="https://z1nes.com"
                  >
                    Shop z1nes
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.linksbuttons}
                    href="https://www.buymeacoffee.com/sirenaalyce"
                  >
                    Buy Me A Coffee! (or pizza)
                  </Button>
                </Grid>
              </Grid>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                className={classes.socialgrid}
              >
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.socialicons}
                  >
                    <EmailIcon fontSize="small" />
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.socialicons}
                  >
                    <YouTubeIcon fontSize="small" />
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.socialicons}
                  >
                    <TwitterIcon fontSize="small" />
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.socialicons}
                  >
                    <InstagramIcon fontSize="small" />
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default LinkinBio;
