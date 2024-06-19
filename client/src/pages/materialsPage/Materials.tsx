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
  Typography,
} from "@mui/material";

import styles from "./Materials.module.scss";
import { ImportContacts } from "@mui/icons-material";

const Materials = observer(() => {
  return (
    <>
      <div className={styles.top}>
        <div>
          <h1>Учебные материалы</h1>
        </div>
      </div>
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <nav aria-label="main mailbox folders">
          <List>
            <ListItem>
              <ListItemButton href="https://elibrary.ru/">
                <ListItemIcon>
                  <ImportContacts />
                </ListItemIcon>
                <p style={{ color: "black" }}>Ресурсы ИБЦ.
Научная электронная библиотека eLIBRARY.RU – это крупнейший российский информационный портал в области науки, технологии, медицины и образования, содержащий рефераты и полные тексты более 12 млн научных статей и публикаций. На платформе eLIBRARY.RU доступны электронные версии более 1400 российских научно-технических журналов, в том числе более 700 журналов в открытом доступе. https://elibrary.ru/

</p>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton href="https://znanium.com/">
                <ListItemIcon>
                  <ImportContacts />
                </ListItemIcon>
                <p style={{ color: "black" }}>ЭБС znanium.com издательства «ИНФРА-М» – это учебники и учебные пособия диссертации и авторефераты монографии и статьи сборники научных трудов, энциклопедии научная периодика, профильные журналы справочники, законодательно-нормативные документы доступные в едином виртуальном пространстве библиотекам, студентам, аспирантам, профессорско-преподавательскому составу. https://znanium.com/</p>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton href="https://elsevier.com/">
                <ListItemIcon>
                  <ImportContacts />
                </ListItemIcon>
                <p style={{ color: "black" }}>«Эльзевир» (Elsevier) – крупнейшее в мире издательство, предлагающее продукты и инновационные решения в области науки, образования и медицины. https://elsevier.com/</p>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton href="https://ibooks.ru/">
                <ListItemIcon>
                  <ImportContacts />
                </ListItemIcon>
                <p style={{ color: "black" }}>ibooks.ru – электронная библиотечная система учебной и научной литературы. Основная задача – обеспечение читателей библиотек доступом к самым сосвременным электронным книгам ведущих издательств России. https://ibooks.ru/</p>
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
        <Divider />
      </Box>
    </>
  );
});

export default Materials;
