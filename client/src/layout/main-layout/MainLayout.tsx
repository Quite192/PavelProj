import { Outlet } from "react-router-dom";

import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/header/Header";
import { Box } from "@mui/material";

import styles from "./MainLayout.module.scss";

const MainLayout = () => {
  // Используем как обертку над всеми страницами
  return (
    <div>
      <Sidebar />
      <Header />
      <div>
        <Box
          sx={{
            position: "fixed",
            top: "0px",
            right: "0px",
            left: "250px",
            bottom: "0px",
            // borderRadius: "25px",
            backgroundColor: "#fff",
            "@media (max-width: 1024px)": {
              left: "20px",
              right: "20px",
            },
          }}
        >
          <div className={styles.inner}>
            <Outlet />
          </div>
        </Box>
      </div>
    </div>
  );
};

export default MainLayout;
