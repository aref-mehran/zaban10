import { useSelector, useDispatch } from "react-redux";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";

import Paper from "@mui/material/Paper";

export default function App() {
  const gSate = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0
      }}
    >
      <div>
        {gSate.lessons.length}

        <button
          onClick={() => {
            dispatch({ type: "INCREMENT" });
          }}
        ></button>

        <BottomNavigation showLabels>
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
        </BottomNavigation>
      </div>
    </Paper>
  );
}
