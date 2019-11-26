import Home from "./pages/Home";
import News from "./pages/News";
import Delivery from "./pages/Delivery";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Err from "./pages/Err";
import Gasoline from "./categories/Gasoline";
import HotWater from "./categories/HotWater";
import TehWater from "./categories/TehWater";
import Gas from "./categories/Gas";
import Fume from "./categories/Fume";
import Food from "./categories/Food";
import Abrasive from "./categories/Abrasive";

// import AboutMob from "./pages_mob/AboutMob";
// import ContactsMob from "./pages_mob/ContactsMob";

export const routes = [
  // --------------------------- isNavBar
  {
    id: 1,
    isNavBar: true,
    isExact: true,
    path: "/",
    name: "Рти-Торг",
    className: "logo",
    component: Home
  },
  {
    id: 2,
    isNavBar: true,
    isExact: true,
    path: "/about",
    name: "О Нас",
    className: "nav-link",
    component: About
  },
  {
    id: 3,
    isNavBar: true,
    isExact: true,
    path: "/delivery",
    name: "Доставка",
    className: "nav-link",
    component: Delivery
  },
  {
    id: 4,
    isNavBar: true,
    isExact: true,
    path: "/news",
    name: "Новости",
    className: "nav-link",
    component: News
  },
  {
    id: 5,
    isNavBar: true,
    isExact: true,
    path: "/contacts",
    name: "Контакты",
    className: "nav-link",
    component: Contacts
  },

  // --------------------------- isFooter

  {
    id: 6,
    isFooter: true,
    isExact: true,
    path: "/",
    name: "Рти-Торг",
    className: "logo",
    component: Home
  },
  {
    id: 7,
    isFooter: true,
    isExact: true,
    path: "/about",
    name: "О Нас",
    className: "footer-link",
    component: About
  },
  {
    id: 8,
    isFooter: true,
    isExact: true,
    path: "/delivery",
    name: "Доставка",
    className: "footer-link",
    component: Delivery
  },
  {
    id: 9,
    isFooter: true,
    isExact: true,
    path: "/news",
    name: "Новости",
    className: "footer-link",
    component: News
  },
  {
    id: 10,
    isFooter: true,
    isExact: true,
    path: "/contacts",
    name: "Контакты",
    className: "footer-link",
    component: Contacts
  },
  {
    id: 11,
    isFooter: true,
    isExact: true,
    path: "/gasoline",
    name: "Для бензина и минеральных масел",
    className: "category-link",
    component: Gasoline
  },
  {
    id: 12,
    isFooter: true,
    isExact: true,
    path: "/hot-water",
    name: "Для горячей воды",
    className: "category-link",
    component: HotWater
  },
  {
    id: 13,
    isFooter: true,
    isExact: true,
    path: "/teh-water",
    name: "Для технической воды",
    className: "category-link",
    component: TehWater
  },
  {
    id: 14,
    isFooter: true,
    isExact: true,
    path: "/gas",
    name: "Для газа",
    className: "category-link",
    component: Gas
  },
  {
    id: 15,
    isFooter: true,
    isExact: true,
    path: "/fume",
    name: "Для пара",
    className: "category-link",
    component: Fume
  },
  {
    id: 16,
    isFooter: true,
    isExact: true,
    path: "/food",
    name: "Для пищевых продуктов",
    className: "category-link",
    component: Food
  },
  {
    id: 17,
    isFooter: true,
    isExact: true,
    path: "/abrasive",
    name: "Для абразива",
    className: "category-link",
    component: Abrasive
  },


  // --------------------------- isMobile

  // --------------------------- 404
  {
    id: 18,
    isExact: true,
    component: Err,
    status: 404
  }
];
