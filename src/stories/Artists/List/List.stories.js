import React from 'react';


import List from '../../../components/Artists/List/List';


export default {
  title: 'List',
  component: List,
};

const Template = (args) => <List {...args} />;

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