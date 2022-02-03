import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import RestoreIcon from "@mui/icons-material/Restore";
import ListIcon from "@mui/icons-material/List";
import ArchiveIcon from "@mui/icons-material/Archive";

import Paper from "@mui/material/Paper";

import { Link } from "react-router-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lesson from "./Components/Lesson";
import LessonList from "./Components/LessonList";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/list" element={<LessonList />} />
        <Route path="/lesson" element={<Lesson />} />
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
            <BottomNavigationAction
              label="Favorites"
              icon={<ListIcon />}
            ></BottomNavigationAction>
            دروس
          </Link>
        </BottomNavigation>
      </Paper>
    </BrowserRouter>
  );
}
