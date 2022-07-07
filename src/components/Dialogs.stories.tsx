import React from 'react';
import {Profile} from "./Profile";
import {Dialogs} from "./Dialogs";

export default {
    title: 'Dialogs',
    component: Dialogs,
}

const dialogStory = () => <Dialogs dialogs={[]} newMessage={'1234'} addMessage={x => x} messages={[]}
                                   changeMessageText={x => x}/>;

