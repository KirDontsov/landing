import News from "./pages/news";
import Home from "./pages/home";

export const routes = [
	{
		isNavBar: true,
		isExact: true,
		path: "/",
		name: "Home",
		component: Home
	},
	{
		isNavBar: true,
		path: "/news",
		name: "News",
		component: News
	}
];
