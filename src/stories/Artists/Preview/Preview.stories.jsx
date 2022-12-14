import React from 'react';


import Preview from '../../../components/Artists/Preview/Preview';


export default {
  title: 'Preview',
  component: Preview,
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
};

const Template = (args) => <Preview {...args} />;

export const Default = Template.bind({});
Default.args = {
};

export const ShortName = Template.bind({});
ShortName.args = {
    name: "Prince"
};

export const LongName = Template.bind({});
LongName.args = {
    name: "King Gizzard & The Lizard Wizard"
};
