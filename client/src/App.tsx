import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "./layout/main-layout/MainLayout";
import AuthLayout from "./layout/auth-layout/AuthLayout";
import Goods from "./pages/goods/Goods";
import Categories from "./pages/categories/Categories";
import Map from "./pages/map/Map";
import NotFound from "./pages/not-found/NotFound";
import categoriesStore from "./stores/categories-store";

import "./utils/scss/global.scss";
import Materials from "./pages/materialsPage/Materials";
import Information from "./pages/informationPage/Information";
import Tours from "./pages/toursPage/Tours";
import AboutUs from "./pages/aboutUsPage/AboutUs";
import Schedule from "./pages/schedulePage/Schedule";
import Feedback from "./pages/feedbackPage/Feedback";
import Contacts from "./pages/contactsPage/Contacts";
import Login from "./pages/loginPage/LoginPage";
import userStore from "./stores/user-store";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(userStore.outh);

  useEffect(() => {
    categoriesStore.loadCategories();

    // Подписка на изменения в userStore
    const handleAuthChange = (authStatus: any) => {
      setIsAuthenticated(authStatus);
    };

    userStore.subscribe(handleAuthChange);

    return () => {
      userStore.subscribe(null); // Отписываемся при размонтировании
    };
  }, []);

  // Если пользователь не аутентифицирован, показываем страницу авторизации
  if (!isAuthenticated) {
    return (
      <Routes>
        <Route path="/login" element={<MainLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    );
  }

  // Если пользователь аутентифицирован, показываем основной макет
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="news" element={<Goods />} />
          <Route path="materials" element={<Materials />} />
          <Route path="information" element={<Information />} />
          <Route path="tour-de-france" element={<Tours />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
