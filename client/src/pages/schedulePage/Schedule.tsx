import { observer } from "mobx-react-lite";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { GetApp, ImportContacts } from "@mui/icons-material";
import styles from "./Schedule.module.scss";

const Schedule = observer(() => {
  const handleDownloadPdf1 = () => {
    // Симуляция загрузки PDF файла
    // В реальном приложении замените этот код на загрузку файла с сервера
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "/assets/1"; // Здесь укажите путь к вашему PDF файлу
      link.download = "1.pdf"; // Здесь укажите имя файла для скачивания
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1000);
  };
  const handleDownloadPdf2 = () => {
    // Симуляция загрузки PDF файла
    // В реальном приложении замените этот код на загрузку файла с сервера
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "/assets/2.pdf"; // Здесь укажите путь к вашему PDF файлу
      link.download = "2.pdf"; // Здесь укажите имя файла для скачивания
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1000);
  };
  const handleDownloadPdf3 = () => {
    // Симуляция загрузки PDF файла
    // В реальном приложении замените этот код на загрузку файла с сервера
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "/assets/3.pdf"; // Здесь укажите путь к вашему PDF файлу
      link.download = "3.pdf"; // Здесь укажите имя файла для скачивания
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1000);
  };
  const handleDownloadPdf4 = () => {
    // Симуляция загрузки PDF файла
    // В реальном приложении замените этот код на загрузку файла с сервера
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "/assets/4.pdf"; // Здесь укажите путь к вашему PDF файлу
      link.download = "4.pdf"; // Здесь укажите имя файла для скачивания
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1000);
  };

  return (
    <>
      <div className={styles.top}>
        <div>
          <h1>Онлайн расписание</h1>
        </div>
      </div>
      <Box sx={{ width: "100%", bgcolor: "background.paper", padding: 2 }}>
        <div className={styles.pdfContainer}>
          <List>
            <ListItem
              style={{ border: "1px solid blue", borderRadius: "5px" }}
              onClick={handleDownloadPdf1}
            >
              <ListItemButton>
                <ListItemIcon>
                  <GetApp />
                </ListItemIcon>
                <p style={{ color: "black" }}>Расписание для студентов 1 курса</p>
              </ListItemButton>
            </ListItem>
            <ListItem
              style={{ border: "1px solid blue", borderRadius: "5px" }}
              onClick={handleDownloadPdf2}
            >
              <ListItemButton>
                <ListItemIcon>
                  <GetApp />
                </ListItemIcon>
                <p style={{ color: "black" }}>Расписание для студентов 2 курса</p>
              </ListItemButton>
            </ListItem>
            <ListItem
              style={{ border: "1px solid blue", borderRadius: "5px" }}
              onClick={handleDownloadPdf3}
            >
              <ListItemButton>
                <ListItemIcon>
                  <GetApp />
                </ListItemIcon>
                <p style={{ color: "black" }}>Расписание для студентов 3 курса</p>
              </ListItemButton>
            </ListItem>
            <ListItem
              style={{ border: "1px solid blue", borderRadius: "5px" }}
              onClick={handleDownloadPdf4}
            >
              <ListItemButton>
                <ListItemIcon>
                  <GetApp />
                </ListItemIcon>
                <p style={{ color: "black" }}>Расписание для студентов 4 курса</p>
              </ListItemButton>
            </ListItem>
          </List>
        </div>
      </Box>
    </>
  );
});

export default Schedule;
