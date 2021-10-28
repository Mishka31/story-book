import Logo from "./Logo.js";

const Stories = {
  title: "Logo",
  componant: Logo,
};

export default Stories;

const Template = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageUrl:
    "https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png",
};
