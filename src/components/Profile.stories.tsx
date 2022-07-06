import React from 'react';
import {Profile} from "./Profile";

export default {
    title: 'Profile',
    component: Profile,
}

const profileStory = () => <Profile newPostText={'123456'} changePostText={x => x} posts={[]} addPost={x => x}/>;

