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
    "https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1635369244~hmac=331aa59cf2c330370104207a96b23bd7",
  navItems,
};
export const Minimized = Template.bind({});
Minimized.args = {
  ...Default.args,
  minimized: true,
};
