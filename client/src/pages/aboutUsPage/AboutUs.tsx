import { observer } from "mobx-react-lite";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";

import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

import styles from "./AboutUs.module.scss";
import { ImportContacts } from "@mui/icons-material";

const AboutUs = observer(() => {
  const DemoPaper = styled(Paper)(({ theme }) => ({
    width: 300,
    height: 300,
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: "center",
  }));

  return (
    <>
      <div className={styles.top}>
        <div>
          <h1>О нас</h1>
        </div>
      </div>
      <Box
        sx={{ width: "100%", bgcolor: "background.paper", marginTop: "20px" }}
      >
        <Typography fontWeight={"bold"} fontSize={"22px"}>
          Академия маркетинга и социально-информационных технологий – ИМСИТ
          ведет набор абитуриентов по направлениям подготовки высшего и среднего
          профессионального образования. <br/>
          Академия ИМСИТ является ведущим учебным учереждением в Красноадре.
        </Typography>
      </Box>
    </>
  );
});

export default AboutUs;
