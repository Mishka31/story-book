import NavigationItem from "./NavigationItem.js";
import { HiHome } from "react-icons/hi";

const Stories = {
  title: "NavigationItem",
  component: NavigationItem,
};
export default Stories;

const Template = (args) => <NavigationItem {...args} />;
export const Example = Template.bind({});

Example.args = {
  text: "Main",
  icon: <HiHome size="24" />,
};
