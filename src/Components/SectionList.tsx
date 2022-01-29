import { useSelector, useDispatch } from "react-redux";

import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Link, useLocation } from "react-router-dom";

const SectionList = () => {
  const gSate = useSelector((state) => state);

  let location = useLocation();

  const sections = location.state.sections;

  return (
    <List>
      {sections.map((section, idx) => {
        return (
          <>
            {/* <Divider variant="inset" component="li" /> */}
            <ListItem alignItems="flex-start">
              <Link to="/section/" state={section}>
                <ListItemAvatar>
                  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                </ListItemAvatar>
                <ListItemText primary={section.title} />
              </Link>
            </ListItem>
          </>
        );
      })}
    </List>
  );
};
export default SectionList;
