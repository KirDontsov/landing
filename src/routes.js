import Home from "./pages/Home";
import News from "./pages/News";
import Delivery from "./pages/Delivery";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Err from "./pages/Err";
import ORings from "./categories/ORings";
import Cuffs from "./categories/Cuffs";
import RVD from "./categories/RVD";
import Belts from "./categories/Belts";

export const routes = [
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
		path: "/o-rings",
		name: "Уплотнительные кольца",
		className: "category-link",
		component: ORings
	},
	{
		id: 12,
		isFooter: true,
		isExact: true,
		path: "/cuffs",
		name: "Гидравлические манжеты",
		className: "category-link",
		component: Cuffs
	},
	{
		id: 13,
		isFooter: true,
		isExact: true,
		path: "/rvd",
		name: "Рукава высокого давления",
		className: "category-link",
		component: RVD
	},
	{
		id: 14,
		isFooter: true,
		isExact: true,
		path: "/belts",
		name: "Конвейерные ленты",
		className: "category-link",
		component: Belts
	},
	{
		id: 15,
		isExact: true,
		component: Err,
		status: 404
	}
];
