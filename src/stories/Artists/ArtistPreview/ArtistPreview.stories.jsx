import React from 'react';


import ArtistPreview from '../../../components/Artists/ArtistPreview/ArtistPreview';


export default {
  title: 'ArtistPreview',
  component: ArtistPreview,
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
};

const Template = (args) => <ArtistPreview {...args} />;

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
