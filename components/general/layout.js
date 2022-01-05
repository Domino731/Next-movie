import {
  Drawer,
  Grid,
  Typography,
  makeStyles,
  Avatar,
} from "@material-ui/core";
import avatar from "../../images/profile.jpg";
const useStyles = makeStyles({
  paperWidth: {
    width: "20%",
  },
  drawer: {
    width: 250,
  },
  drawerPaper: {},
});
export const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item md={10}>
        {children}
      </Grid>

      <Grid item md={2}>
        <Drawer variant='permanent'>
          <Typography variant="h5" className={classes.drawer}>
            Will Smith
          </Typography>
        </Drawer>
      </Grid>
    </Grid>
  );
};
