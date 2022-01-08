import {
  Drawer,
  Grid,
  Typography,
  makeStyles,
  Avatar,
  Badge,
} from "@material-ui/core";
import { DiscoverList } from "./discover";
import { Options } from "./options";
const useStyles = makeStyles({
  paperWidth: {
    width: "20%",
  },
  drawer: {
    width: 250,
  },
  drawerPaper: {},
  avatarWrapper: {
    minHeight: "100vh",
  },
  customBadge: {
    backgroundColor: "#70e000",
    color: "white"
  },
  username: {
   fontWeight: "bold",
   letterSpacing: "2px",
   marginTop: 7
  }
});
export const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item md={10}>
        {children}
      </Grid>

      <Grid item md={2}>
        <Drawer 
         variant="permanent"
         anchor="right"
         classes={{paper: classes.drawer}}
         >
          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ marginTop: "20px" }}
          >
            <Badge
              classes={{ badge: classes.customBadge }}
               color="primary"
              overlap="circular"
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar alt="Will Smith" />
            </Badge>

            <Typography 
            component='h2' 
             align="center"
            className={classes.username}
            >
              Will Smith
            </Typography>
          </Grid>


          <DiscoverList/>
          <Options/>
        </Drawer>
      </Grid>
    </Grid>
  );
};
