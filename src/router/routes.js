import Home from "pages/Home/Loadable";
import HomeTitle from "pages/Home/Title";

import NumberFormatting from "pages/NumberFormatting/Loadable";
import NumberFormattingTitle from "pages/NumberFormatting/Title";

import RelativeFormatting from "pages/RelativeFormatting/Loadable";
import RelativeFormattingTitle from "pages/RelativeFormatting/Title";

import DateFormatting from "pages/DateFormatting/Loadable";
import DateFormattingTitle from "pages/DateFormatting/Title";

export default [
	{
		id: "home",
		path: "/",
		component: Home,
		title: HomeTitle
	},
	{
		id: "numbers",
		path: "/numbers",
		component: NumberFormatting,
		title: NumberFormattingTitle
	},
	{
		id: "relative",
		path: "/relative",
		component: RelativeFormatting,
		title: RelativeFormattingTitle
	},
	{
		id: "date",
		path: "/date",
		component: DateFormatting,
		title: DateFormattingTitle
	}
];
