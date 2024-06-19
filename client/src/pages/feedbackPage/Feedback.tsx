import { observer } from "mobx-react-lite";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { Send } from "@mui/icons-material";
import styles from "./Feedback.module.scss";

const Feedback = observer(() => {
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Добавьте здесь логику обработки отправки формы
  };

  return (
    <>
      <div className={styles.top}>
        <div>
          <h1>Обратная связь</h1>
        </div>
      </div>
      <Box sx={{ width: "100%", bgcolor: "background.paper", padding: 3 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField required fullWidth label="Имя" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Фамилия"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Номер телефона"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Адрес электронной почты"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                multiline
                rows={4}
                label="Комментарий"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                startIcon={<Send />}
              >
                Отправить
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </>
  );
});

export default Feedback;
