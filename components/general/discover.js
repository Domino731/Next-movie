import { Button, makeStyles } from "@material-ui/core";
import { useState, useCallback } from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import DownloadIcon from "@mui/icons-material/Download";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Link from 'next/link'
import ListItem from '@mui/material/ListItem'

const DiscoverListItem = ({ icon: Icon, title, color }) => {

/** styles for DiscoverListItem */
const useStyles = makeStyles(() => ({
  icon: {},
  listItemWrapper: {
      fontWeight: 'bold',
    "&:hover": {
        cursor: "pointer",
      color: color,
      backgroundColor: '#F8F8FF'
    },
  },
}));

  const classes = useStyles();

  return (
    <Link href='/'>
    <ListItem
      style={{ width: "100%" }}
    >
      <ListItemIcon>{<Icon />}</ListItemIcon>
      <ListItemText primary={title} />
    </ListItem>
    </Link>
  );
};





export const DiscoverList = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleChangeIsOpen = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <>
      <Button
        onClick={handleChangeIsOpen}
        align="left"
        style={{ display: "flex", justifyContent: "start" }}
      >
       Discover {isOpen ? <ExpandLess /> : <ExpandMore />} 
      </Button>
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <List component="ul" disablePadding>
          <DiscoverListItem
            title="Discover"
            icon={() => (
              <ManageSearchIcon
                style={{ fill: "#ef476f" }}
              />
            )}
            color="#ef476f"
          />

          <DiscoverListItem
            title="Subscriptions"
            icon={() => (
              <SubscriptionsIcon
                style={{ fill: "#ffd166" }}
              />
            )}
            color="#ffd166"
          />
          <DiscoverListItem
            title="Downloads"
            icon={() => (
              <DownloadIcon
                style={{ fill: "#06d6a0" }}
              />
            )}
            color="#06d6a0"
          />
          <DiscoverListItem
            title="Favorite"
            icon={() => (
              <FavoriteIcon
                style={{ fill: "#118ab2" }}
              />
            )}
            color="#118ab2"
          />
          <DiscoverListItem
            title="Notifications"
            icon={() => (
              <NotificationsIcon
                style={{ fill: "#8338ec" }}
              />
            )}
            color="#8338ec"
          />
        </List>



      </Collapse>
    </>
  );
};
