import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";

import Paper from "@mui/material/Paper";

import { Link } from "react-router-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LessonSection from "./Components/LessonSection";
import LessonList from "./Components/LessonList";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/list" element={<LessonList />} />
        <Route path="/section" element={<LessonSection />} />
        <Route path="/schedule" element={LessonSection} />
      </Routes>

      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0
        }}
      >
        <BottomNavigation showLabels>
          <Link to="/list">
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
