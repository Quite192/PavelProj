import { observer } from "mobx-react-lite";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
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

import photo from "../../assets/главнй корпус.png";
import photo2 from "../../assets/главный вход.png";
import photo3 from "../../assets/лекционный кабинет.png";
import photo4 from "../../assets/комп класс с маками.png";
import photo5 from "../../assets/кабинет киберспорта.png";
import photo6 from "../../assets/кабинет творчества.png";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

import styles from "./Tours.module.scss";
import { ImportContacts } from "@mui/icons-material";

const Tours = observer(() => {
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
          <h1>Виртуальные туры</h1>
        </div>
      </div>
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <Grid container>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                maxWidth: 345,
                marginLeft: "150px",
                marginTop: "50px",
              }}
            >
              <CardMedia
                component="img"
                height="194"
                image={photo}
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Главный корпус Академии Имсит находящийся по адресу ул. Зиповская 5.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                maxWidth: 345,
                marginLeft: "150px",
                marginTop: "50px",
              }}
            >
              <CardMedia
                component="img"
                height="194"
                image={photo2}
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Главый вход главного корпуса, вход находится слева, если смотреть на здание со стороный Зиповской улицы
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                maxWidth: 345,
                marginLeft: "150px",
                marginTop: "50px",
              }}
            >
              <CardMedia
                component="img"
                height="194"
                image={photo3}
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Одна из лекционных аудиторий Академии Имсит. Аудитория №109.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                maxWidth: 345,
                marginLeft: "150px",
                marginTop: "50px",
              }}
            >
              <CardMedia
                component="img"
                height="194"
                image={photo4}
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Аудитория № 114 представляет собой аудиторию для графических дизайнеров, оборудованна современной переферией.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                maxWidth: 345,
                marginLeft: "150px",
                marginTop: "50px",
              }}
            >
              <CardMedia
                component="img"
                height="194"
                image={photo6}
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Творческая аудитория.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                maxWidth: 345,
                marginLeft: "150px",
                marginTop: "50px",
              }}
            >
              <CardMedia
                component="img"
                height="194"
                image={photo5}
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Кабинет № 120 представляет собой зону киберспорта, а также проведения обычных пар.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
});

export default Tours;
