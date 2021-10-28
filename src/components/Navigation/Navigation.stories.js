import Navigation from "./Navigation.js";
import { HiHome } from "react-icons/hi";
import { GrApple, GrAndroid } from "react-icons/gr";

const navItems = [
  {
    text: "Main-new",
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

const Stories = {
  title: "Navigation",
  component: Navigation,
};

export default Stories;

const Template = (args) => <Navigation {...args} />;
export const Default = Template.bind({});

Default.args = {
  items: navItems,
};
