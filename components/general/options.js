import { Typography, makeStyles } from "@material-ui/core";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Menu } from "@mui/material/Menu";
import {useState} from "react";
import { url } from "../../fetch/constans";

const useStyles = makeStyles({
  title: {
    color: "rgba(0, 0, 0, 0.87)",
    padding: "6px 8px",
    fontSize: "0.875rem",
    minWidth: "64px",
    boxSizing: "border-box",
    fontWeight: 500,
    lineHeight: 1.75,
    borderRadius: "4px",
    letterSpacing: "0.02857em",
    textTransform: "uppercase",
  },
  form: {
    padding: "0 8px",
  },
  root: {
    height: "44px",
  },
  input: {
    padding: "10px 14px",
  },
  label: {
    fontSize: "0.875rem",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
  }
});

export const Options = () => {
  const classes = useStyles();

  const [options, setOptions] = useState({
    type: 'Movie',
    genre: 'action',
    yearStart: '2009',
    yearEnd: '2019'
  });

  const handleChange = (key, value) => {
    setOptions(prev => ({
      ...prev,
      [key]:value
    }))
  };

  return (
    <>
      <Typography className={classes.title}>Options</Typography>
      <div className={classes.form}>
        {/* type */}
        <Typography className={classes.label}>Type</Typography>
        <FormControl sx={{ width: "100%", marginBottom: '17px' }}>
          <Select
            sx={{ width: "100%" }}
            value={options.type}
            onChange={(e) => handleChange('type', e.target.value)}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            MenuProps={{
              getContentAnchorEl: null,
              anchorOrigin: {
                vertical: "bottom",
                horizontal: "right",
              },
            }}
            className={classes.root}
          >
            <MenuItem value={"Movie"} sx={{ width: "100%" }}>
              Movie
            </MenuItem>
            <MenuItem value={"Series"} sx={{ width: "100%" }}>
              Series
            </MenuItem>
          </Select>
        </FormControl>





        {/*genre */}
        <Typography className={classes.label}>Genre</Typography>
        <FormControl sx={{ width: "100%", marginBottom: '17px' }}>
          <Select
            sx={{ width: "100%" }}
            value={options.genre}
            onChange={(e) => handleChange('genre', e.target.value)}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            MenuProps={{
              getContentAnchorEl: null,
              anchorOrigin: {
                vertical: "bottom",
                horizontal: "right",
              },
            }}
            className={classes.root}
          >
            <MenuItem value={"horror"} sx={{ width: "100%" }}>
              Ten
            </MenuItem>
            <MenuItem value={20} sx={{ width: "100%" }}>
              Twenty
            </MenuItem>
            <MenuItem value={30} sx={{ width: "100%" }}>
              Thirty
            </MenuItem>
          </Select>
        </FormControl>


        <Typography className={classes.label}>Year</Typography>
        <div className={classes.row}>
        <FormControl sx={{ width: "45%" }}>
          <Select
            sx={{ width: "100%" }}
            value={options.type}
            onChange={(e) => handleChange('type', e.target.value)}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            MenuProps={{
              getContentAnchorEl: null,
              anchorOrigin: {
                vertical: "bottom",
                horizontal: "right",
              },
            }}
            className={classes.root}
          >
            <MenuItem value={"horror"} sx={{ width: "100%" }}>
              Ten
            </MenuItem>
            <MenuItem value={20} sx={{ width: "100%" }}>
              Twenty
            </MenuItem>
            <MenuItem value={30} sx={{ width: "100%" }}>
              Thirty
            </MenuItem>
          </Select>
        </FormControl>



        <FormControl sx={{ width: "45%" }}>
          <Select
            sx={{ width: "100%" }}
            value={options.type}
            onChange={(e) => handleChange('type', e.target.value)}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            MenuProps={{
              getContentAnchorEl: null,
              anchorOrigin: {
                vertical: "bottom",
                horizontal: "right",
              },
            }}
            className={classes.root}
          >
            <MenuItem value={"horror"} sx={{ width: "100%" }}>
              Ten
            </MenuItem>
            <MenuItem value={20} sx={{ width: "100%" }}>
              Twenty
            </MenuItem>
            <MenuItem value={30} sx={{ width: "100%" }}>
              Thirty
            </MenuItem>
          </Select>
        </FormControl>

        </div>
      </div>
    </>
  );
};


