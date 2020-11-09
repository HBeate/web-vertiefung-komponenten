import React, { Component } from "react";
import styles from './SuperButton.module.css';

export default class SuperButton extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (<div className={styles.container}>
            <button className={styles.button}> {this.props.name} </button>

        </div>

        )
    }

}
