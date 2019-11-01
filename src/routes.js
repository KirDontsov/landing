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
		isNavBar: true,
		isExact: true,
		path: "/",
		name: "Рти-Торг",
		className: "logo",
		component: Home
	},
	{
		isNavBar: true,
		isExact: true,
		path: "/about",
		name: "О Нас",
		className: "nav-link",
		component: About
	},
	{
		isNavBar: true,
		isExact: true,
		path: "/delivery",
		name: "Доставка",
		className: "nav-link",
		component: Delivery
	},
	{
		isNavBar: true,
		isExact: true,
		path: "/news",
		name: "Новости",
		className: "nav-link",
		component: News
	},
	{
		isNavBar: true,
		isExact: true,
		path: "/contacts",
		name: "Контакты",
		className: "nav-link",
		component: Contacts
	},
	{
		isFooter: true,
		isExact: true,
		path: "/home",
		name: "Рти-Торг",
		className: "logo",
		component: Home
	},
	{
		isFooter: true,
		isExact: true,
		path: "/about",
		name: "О Нас",
		className: "footer-link",
		component: About
	},
	{
		isFooter: true,
		isExact: true,
		path: "/delivery",
		name: "Доставка",
		className: "footer-link",
		component: Delivery
	},
	{
		isFooter: true,
		isExact: true,
		path: "/news",
		name: "Новости",
		className: "footer-link",
		component: News
	},
	{
		isFooter: true,
		isExact: true,
		path: "/contacts",
		name: "Контакты",
		className: "footer-link",
		component: Contacts
	},
	{
		isExact: true,
		path: "/o-rings",
		className: "category-link",
		component: ORings
	},
	{
		isExact: true,
		path: "/cuffs",
		className: "category-link",
		component: Cuffs
	},
	{
		isExact: true,
		path: "/rvd",
		className: "category-link",
		component: RVD
	},
	{
		isExact: true,
		path: "/belts",
		className: "category-link",
		component: Belts
	},
	{
		isExact: true,
		component: Err,
		status: 404
	}
];
