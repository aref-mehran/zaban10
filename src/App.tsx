import { useSelector, useDispatch } from "react-redux";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";

import Paper from "@mui/material/Paper";

import { Link } from "react-router-dom";

import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

import LessonSection from "./LessonSection";
export default function App() {
  const gSate = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0
        }}
      >
        <Switch>
          <Route exact path="/s" component={LessonSection} />
          <Route path="/section" component={LessonSection} />
          <Route path="/schedule" component={LessonSection} />
        </Switch>

        <BottomNavigation showLabels>
          <Link to="/salam">
            <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          </Link>
          <Link to="/section">
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          </Link>
          <Link to="/hh">
            <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
          </Link>
        </BottomNavigation>
      </Paper>
    </BrowserRouter>
  );
}
