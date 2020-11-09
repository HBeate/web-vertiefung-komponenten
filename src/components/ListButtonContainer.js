import React, { Component } from 'react';
import SuperList from './SuperList';
import SuperButton from './SuperButton';
import styles from './ListButtonContainer.module.css';

export default class ListButtonContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.drinks = [
            { "name": "beer" },
            { "name": "wine" },
            { "name": "schnaps" },
            { "name": "beer" },
            { "name": "wine" },
            { "name": "schnaps" },
            { "name": "schnaps" },
        ];
    }
    render() {
        return (
            <div className={styles.container}>
                <SuperList drinks={this.drinks} />
                <SuperButton name="Senden" />
            </div>
        );
    }
}
