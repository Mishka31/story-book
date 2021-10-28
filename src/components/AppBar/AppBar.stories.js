import AppBar from "./AppBar.js";
import { HiHome } from "react-icons/hi";
import { GrApple, GrAndroid } from "react-icons/gr";

const navItems = [
  {
    text: "Home",
    icon: <HiHome size="24" />,
  },
  {
    text: "Apple",
    icon: <GrApple size="24" />,
  },
  {
    text: "Photo",
    icon: <GrAndroid size="24" />,
  },
];

const Storeis = {
  title: "AppBar",
  component: AppBar,
};
export default Storeis;

const Template = (args) => <AppBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  logoImg:
    "https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png",
  navItems,
};
export const Minimized = Template.bind({});
Minimized.args = {
  ...Default.args,
  minimized: true,
};
