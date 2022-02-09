//@ts-ignore//@ts-ignore
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import ListIcon from "@mui/icons-material/List";

import Paper from "@mui/material/Paper";

import { Link } from "react-router-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import {Workbox} from 'workbox-window';



import Lesson from "./Components/Lesson.tsx";
import LessonList from "./Components/LessonList.tsx";

export default function App() {
    if ('serviceWorker' in navigator) {
        const wb = new Workbox('%PUBLIC_URL%/sw.js');

        wb.addEventListener("waiting", event => {
            window.location.reload();
            wb.messageSW({type: "SKIP_WAITING"});
        });
        wb.register();
    }


  return (
    <BrowserRouter
      basename={process.env.NODE_ENV === "development" ? "/" : "/zaban10/build"}
    >
      <Routes>
        <Route path="/list" element={<LessonList />} />
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
