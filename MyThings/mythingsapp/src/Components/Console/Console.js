import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  dividerFullWidth: {
    margin: `5px 0 0 ${theme.spacing(2)}px`,
  },
  dividerInset: {
    margin: `5px 0 0 ${theme.spacing(9)}px`,
  },
}));

export default function Console() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <li>
        <Typography
          className={classes.dividerInset}
          color="textSecondary"
          display="block"
          variant="caption"
        >
          TEMPERATURE
        </Typography>
      </li>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="31 C" secondary="July 20, 2014" />
      </ListItem>
      <Divider component="li" variant="inset" />
      <li>
        <Typography
          className={classes.dividerInset}
          color="textSecondary"
          display="block"
          variant="caption"
        >
          Water-Level
        </Typography>
      </li>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="88%" secondary="July 20, 2014" />
      </ListItem>
    </List>
  );
}
