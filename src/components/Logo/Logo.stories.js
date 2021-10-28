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
    "https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1635369244~hmac=331aa59cf2c330370104207a96b23bd7",
};
