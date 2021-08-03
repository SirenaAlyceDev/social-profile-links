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
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {},
  avatarstyle: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    left: theme.spacing(10),
  },
  paperstyle: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    background: "rgba( 255, 255, 255, 0.25 )",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur( 4px )",
    borderRadius: "10px",
  },
  subtitlestyle: {
    textShadow: "2px 2px 5px #f64c71",
  },
  linksbuttons: {
    marginTop: 10,
    marginBottom: 10,
    background: "rgba(33, 38, 178, 0.90)",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur( 4px )",
    borderRadius: "10px",
    border: "1px solid rgba( 33, 38, 178, 0.18 )",
  },
  link1: {
    "&:hover span": {
        display: "none",
      },
      "&:hover": {
        "&:before": {
          content: '"Check Out My Work"',
        },
      },
  },
  link2: {
    "&:hover span": {
        display: "none",
      },
      "&:hover": {
        "&:before": {
          content: '"Latest On The Blog"',
        },
      },
  },
  link3: {
    "&:hover span": {
        display: "none",
      },
      "&:hover": {
        "&:before": {
          content: '"connect"',
        },
      },
  },
  link4: {
    "&:hover span": {
        display: "none",
      },
      "&:hover": {
        "&:before": {
          content: '"tweet"',
        },
      },
  },
  link5: {
    "&:hover span": {
        display: "none",
      },
      "&:hover": {
        "&:before": {
          content: '"watch"',
        },
      },
  },
  link6: {
    "&:hover span": {
        display: "none",
      },
      "&:hover": {
        "&:before": {
          content: '"shop"',
        },
      },
  },
  link7: {
    "&:hover span": {
        display: "none",
      },
      "&:hover": {
        "&:before": {
          content: '"support"',
        },
      },
  },
  socialgrid: {
    marginTop: 10,
  },
  socialiconsbutton: {
    margin: theme.spacing(1),
    width: 65,
    height: 65,
    borderRadius: 50,
    background: "rgba( 246, 76, 113, 0.90)",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur( 4px )",
    border: "1px solid rgba(  246, 76, 113, 0.18 )",
  },
}));

function LinkinBio() {
  const classes = useStyles();
  return (
    <Container maxWidth="xs">
      <Box>
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
              <Typography
                variant="subtitle2"
                color="primary"
                align="center"
                className={classes.subtitlestyle}
              >
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
                    className={clsx(classes.linksbuttons, classes.link1)}
                    href="https://www.sirenaalyce.com/"
                  >
                    sirenaalyce.com
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={clsx(classes.linksbuttons, classes.link2)}
                    href="https://sirenaalyce.com/blog"
                  >
                    Techincolr.
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={clsx(classes.linksbuttons, classes.link3)}
                    href="https://www.linkedin.com/in/sirenaalycegandy/"
                  >
                    LinkedIn
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={clsx(classes.linksbuttons, classes.link4)}
                    href="https://www.twitter.com/sirenaalyce"
                  >
                    Twitter
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={clsx(classes.linksbuttons, classes.link5)}
                    href="https://www.youtube.com/channel/UCiNwAlYST2MDU4juLh5JbVQ"
                  >
                    YouTube
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={clsx(classes.linksbuttons, classes.link6)}
                    href="https://z1nes.com"
                  >
                    z1nes
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={clsx(classes.linksbuttons, classes.link7)}
                    href="https://www.buymeacoffee.com/sirenaalyce"
                  >
                    Buy Me A Coffee! (or pizza)
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
