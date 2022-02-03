import { useSelector, useDispatch } from "react-redux";

import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const LessonList = () => {
  const gState = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <List>
      {gState.lessons.map((lesson, idx) => {
        return (
          <>
            {/* <Divider variant="inset" component="li" /> */}
            <ListItem alignItems="flex-start">
              <Link to="/sections" state={lesson}>
                <ListItemAvatar>
                  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                </ListItemAvatar>
                <ListItemText primary={lesson.title} />
              </Link>
            </ListItem>
          </>
        );
      })}
    </List>
  );
};
export default LessonList;
