import React, { Component } from 'react';
import ListButtonContainer from './ListButtonContainer';

import SuperCard from './SuperCard';
import styles from './ListButtonAvatarContainer.module.css';

export default class ListButtonAvatarContainer extends Component {

    render() {
        return (
            <div className={styles.container}>

                <ListButtonContainer  />
                <SuperCard  imgUrl="https://www.w3schools.com/howto/img_avatar.png" superCardAlt="user_img" name="Max Muster" profession="Chemist"/>
            
            </div>


        );
    }
}

