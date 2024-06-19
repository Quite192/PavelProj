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
} from "@mui/material";

import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

import styles from "./Information.module.scss";
import { ImportContacts } from "@mui/icons-material";

const Information = observer(() => {
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
          <h1>Информация поступающему</h1>
        </div>
      </div>
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <h1>Абитуриенту</h1>
        <Divider style={{ marginTop: "10px", marginBottom: "20px" }} />

        <h2>Добро пожаловать абитуриенту 2024 года!</h2>

        <h3>
          Академия ИМСИТ приглашает на День открытых дверей - 2 июня 2024г. в
          12.00
        </h3>
        <p>
          Получить информацию о приеме в 2024 году и ответы на все интересующие
          вас вопросы можно непосредственно в приемной комиссии, которая
          находится в главном корпусе Академии или по телефонам:
          8(861)278-22-70, 8-988-460-08-46, 8-988-460-05-46.
        </p>
        <p>Электронной почта приемной комиссии pk@imsit.ru.</p>
        <p>
          Документы, необходимые для поступления, принимаются в
          электронно-цифровой форме дистанционно через Личный кабинет
          абитуриента на официальном сайте Академии или лично без
          предварительной записи.
        </p>

        <Grid>
          <Stack direction="row" spacing={2} marginTop={"30px"}>
            <div>
              <h3>Подать документы</h3>
              <DemoPaper variant="outlined">
                <ul>
                  <li>- Информация о сроках проведения приёма</li>
                  <li>- Информация о местах приёма документов, необходимых для поступления</li>
                  <li>- Шаблоны документов, необходимые абитуриенту для отправки по электронной почте или через почтовые отделения связи</li> 
                  <li>- О почтовых адресах для направления документов, необходимых для поступления</li>
                </ul>
              </DemoPaper>
            </div>
            <div>
              <h3>План приема</h3>
              <DemoPaper variant="outlined">
                <ul>
                  <li>- Количество мест для приема на обучение</li>
                  <li>- Перечень направлений подготовки (специальностей), по которым организация будет осуществлять прием</li>
                  <li></li>
                </ul>
              </DemoPaper>
            </div>
            <div>
              <h3>Вступительные испытания</h3>
              <DemoPaper variant="outlined">
                <ul>
                  <li>- Перечень вступительных испытаний с указанием приоритетности вступительных испытаний при ранжировании списков поступающих</li>
                  <li>- Расписание вступительных испытаний, проводимых организацией самостоятельно</li>
                  <li>- Программы вступительных испытаний, проводимых организацией самостоятельно</li>
                </ul>
              </DemoPaper>
            </div>
            <div>
              <h3>Списки поступающих</h3>
              <DemoPaper variant="outlined">
                <ul>
                  <li>- Списки поступающих абитуриентов</li>
                  <li>- Списки лиц, подавших документы, необходимые для поступления</li>
                  <li>- Количество поданных заявлений</li>
                  <li>- Приказы о зачислении на обучение</li>
                </ul>
              </DemoPaper>
            </div>
          </Stack>
        </Grid>
      </Box>
    </>
  );
});

export default Information;
