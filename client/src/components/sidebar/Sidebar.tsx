import React from "react";
import { Link } from "react-router-dom";
import InfoIcon from '@mui/icons-material/Info';
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import NewspaperIcon from '@mui/icons-material/Newspaper';
import WorkIcon from "@mui/icons-material/Work";
import PublicIcon from "@mui/icons-material/Public";
import MuseumIcon from '@mui/icons-material/Museum';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import styles from "./Sidebar.module.scss";
import TextsmsIcon from '@mui/icons-material/Textsms';
import ContactsIcon from '@mui/icons-material/Contacts';
import GroupsIcon from '@mui/icons-material/Groups';

interface Props {
  open?: boolean;
  handleSidebarToggle?: () => void;
}

type Anchor = "left";

const Sidebar = ({ open, handleSidebarToggle }: Props) => {
  const links = (text: string) => {
    if (text.toLowerCase() === "новости") {
      text = "news";
    } else if (text.toLowerCase() === "учебные материалы") {
      text = "materials";
    } else if (text.toLowerCase() === "информация поступающему") {
      text = "information";
    } else if (text.toLowerCase() === "виртуальные туры") {
      text = "tour-de-france";
    } else if (text.toLowerCase() === "онлайн расписание") {
      text = "schedule";
    } else if (text.toLowerCase() === "обратная связь") {
      text = "feedback";
    } else if (text.toLowerCase() === "о нас") {
      text = "about-us";
    } else if (text.toLowerCase() === "контакты") {
      text = "contacts";
    }

    console.log("text", text);
    return text;
  };
  const icons = [
    NewspaperIcon,
    WorkIcon,
    InfoIcon,
    MuseumIcon,
    CalendarMonthIcon,
    TextsmsIcon,
    ContactsIcon,

  ];
  const list = (anchor: Anchor) => (
    <>
      <div className={styles.title}>
        <h1>Академия ИМСИТ</h1>
      </div>
      <Divider sx={{ bgcolor: "#8D8D8D" }} />
      <List className={styles.list}>
        {[
          "Новости",
          "Учебные материалы",
          "Информация поступающему",
          "Виртуальные туры",
          "Онлайн расписание",
          "Обратная связь",
          "Контакты",
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <Link to={links(text)} style={{ width: "100%", maxWidth: "250px" }}>
              <ListItemButton onClick={handleSidebarToggle}>
                <ListItemIcon style={{ color: "#fff" }}>
                  {React.createElement(icons[index])}
                </ListItemIcon>
                <ListItemText primary={text} className={styles.text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <Link to={"about-us"} style={{ width: "100%" }}>
            <ListItemButton onClick={handleSidebarToggle}>
              <ListItemIcon style={{ color: "#fff" }}>
                {React.createElement(GroupsIcon)}
              </ListItemIcon>
              <ListItemText primary={"О нас"} className={styles.text} />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </>
  );

  return (
    <Box className={styles.sidebar}>
      <Drawer
        variant={window.innerWidth > 1024 ? "permanent" : "temporary"}
        classes={{ paper: styles.sidebar }}
        open={open}
        onClose={handleSidebarToggle}
      >
        {list("left")}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
