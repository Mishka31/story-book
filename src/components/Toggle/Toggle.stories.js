import Toggle from "./Toggle.js";

const Stories = {
  title: "Toggle",
  componant: Toggle,
  decorators: [
    (Story) => (
      <div style={{ position: "relative", width: 300 }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    onClick: { action: "onclick fn" },
  },
};

export default Stories;

const Template = (args) => <Toggle {...args} />;

export const Default = Template.bind({});
Default.args = {
  reversed: false,
};
