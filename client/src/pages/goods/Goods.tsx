import { observer } from "mobx-react-lite";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import photo from "../../assets/георгивская.png";
import photo1 from "../../assets/огонь.png";
import photo2 from "../../assets/Screenshot_1.png";
import styles from "./Goods.module.scss";

const Goods = observer(() => {
  return (
    <>
      <div className={styles.top}>
        <div>
          <h1>Новости</h1>
        </div>
      </div>
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
              sx={{ height: 210 }}
              image={photo}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Всероссийская акция
              «Георгиевская ленточка»
              </Typography>
              <Typography variant="body2" color="text.secondary">
              В Академии ИМСИТ стало доброй традицией накануне великого праздника Дня Победы проводить акцию «Георгиевская ленточка». В этом году студенческий совет академии решил открыть акцию в Зале Боевой Славы, куда были приглашены лучшие студенты академии, победители Международных и Всероссийских олимпиад, стипендиаты Правительства Российской Федерации, стипендиаты администрации Краснодарского края и мэра города Краснодара, лучшие спортсмены и активисты молодежных движений. Эстафету приняли институты академии и отделения Академического колледжа ИМСИТ, к ним подключились кафедры и структурные подразделения.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small"></Button>
            </CardActions>
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
              sx={{ height: 210 }}
              image={photo1}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Возложение цветов к «Вечному Огню» на Площади Памяти Героев
              </Typography>
              <Typography variant="body2" color="text.secondary">
              В День Победы 9 мая волонтерский отряд «Крылья» первичного отделения «Движение Первых» Академического колледжа Академии ИМСИТ принял участие в организации возложения цветов к «Вечному Огню» на Площади Памяти Героев города Краснодара. Волонтеры помогали в координации посетителей, желающих выразить уважение и память героям Великой Отечественной войны. Это значимое событие объединило ветеранов, губернатора, мэра, спикера заксобрания и других представителей органов власти. Волонтерский отряд «Крылья» демонстрирует пример активной гражданской позиции и готовности помогать, что важно для формирования патриотических ценностей у молодежи. А также, для молодого поколения участие в таких церемониях – это не только возможность почтить память павших героев, но и шанс почувствовать себя частью истории, понять ценность мира и мирной жизни.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small"></Button>
            </CardActions>
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
              sx={{ height: 210 }}
              image={photo2}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Подкаст IMSITHIGHT. Рассоха Евгений Викторович, Искусственный интеллект, Лаборатория в Академии.
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Рассоха Евгений Викторович
Преподаватель Академии ИМСИТ, сооснователь лаборатории искусственного интеллекта в ИМСИТ
https://www.youtube.com/watch?v=aB0AeQ7idzU&t=2264s
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" href="https://www.youtube.com/watch?v=aB0AeQ7idzU&t=2264s">Смотреть</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          
        </Grid>
      </Grid>
    </>
  );
});

export default Goods;
