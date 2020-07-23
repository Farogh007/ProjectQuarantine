import React from "react";
import { useOktaAuth } from "@okta/okta-react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

export default function Album() {
  const classes = useStyles();

  const { authService } = useOktaAuth();

  const login = async () => {
    authService.login("/");
  };

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="xl">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          The Things App
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Connect your things and sensors to IoT platform in just few minutes!
          Control your devices, store and Visulalize your sensors data in real
          time.
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button variant="contained" color="primary" onClick={login}>
                Lets' Login
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary">
                Register a New User
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}
