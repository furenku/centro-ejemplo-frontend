import React from 'react';


import ArtistList from '../../../components/Artists/ArtistList/ArtistList';


export default {
  title: 'ArtistList',
  component: ArtistList,
};

const Template = (args) => <ArtistList {...args} />;

export const Default = Template.bind({});
Default.args = {
    elements: [
        {
            name: "Prince"
        },
        {
            name: "King Gizzard & The Lizard Wizard"
        },
        {
            name: "Taylor Swift"
        },
    ]
};

export const Empty = Template.bind({});
Empty.args = {
    elements: []
};