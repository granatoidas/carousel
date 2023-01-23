export default {
  title: 'grnt/Carousel',
  argTypes: {
    label: { control: 'text' },
  },
};

const Template = (args) => {
  return `<button>${args.label}</button>`;
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Test',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Test2',
};
