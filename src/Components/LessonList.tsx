import { useSelector, useDispatch } from "react-redux";

import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const LessonList = () => {
  const gSate = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <List>
      {gSate.lessons.map((lesson) => {
        return (
          <>
            {/* <Divider variant="inset" component="li" /> */}
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              </ListItemAvatar>
              <ListItemText primary={lesson.title} />
            </ListItem>
          </>
        );
      })}
    </List>
  );
};
export default LessonList;
