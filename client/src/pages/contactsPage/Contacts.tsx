import { observer } from "mobx-react-lite";
import { Box, Grid, Paper, Typography } from "@mui/material";

import styles from "./Contacts.module.scss";

const Contacts = observer(() => {
  return (
    <>
      <div className={styles.top}>
        <div>
          <h1>Контакты</h1>
        </div>
      </div>
      <Box sx={{ flexGrow: 1, padding: 3 }}>
        <h2 style={{ marginBottom: "10px" }}>Контакты</h2>
        <Grid>
          <Grid>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h6" gutterBottom>
                Телефон
              </Typography>
              <Typography variant="body1">+7 (861) 278-22-70</Typography>
            </Paper>
          </Grid>
          <Grid>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h6" gutterBottom>
                E-mail
              </Typography>
              <Typography variant="body1">
                info-imsit@mail.ru webmaster@imsit.ru
              </Typography>
            </Paper>
          </Grid>
          <Grid>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h6" gutterBottom>
                Адрес
              </Typography>
              <Typography variant="body1">
                г. Краснодар, ул. Зиповская 5
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <h2 style={{ marginTop: "20px", marginBottom: "10px" }}>
          Приёмная комиссия
        </h2>
        <Grid>
          <Grid>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h6" gutterBottom>
                Ответственный секретарь
              </Typography>
              <Typography variant="body1">Баум Ирина Дмитриевна</Typography>
            </Paper>
          </Grid>
          <Grid>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h6" gutterBottom>
                Телефон
              </Typography>
              <Typography variant="body1">+7 (861) 278-22-70</Typography>
            </Paper>
          </Grid>
          <Grid>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h6" gutterBottom>
                E-mail
              </Typography>
              <Typography variant="body1">pk@imsit.ru</Typography>
            </Paper>
          </Grid>
          <Grid>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h6" gutterBottom>
                Адрес
              </Typography>
              <Typography variant="body1">
                350016, г. Краснодар, ул. Зиповская, 5, ауд. 101
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
});

export default Contacts;
