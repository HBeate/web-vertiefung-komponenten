import React, { Component } from 'react';
import styles from './Drink.module.css';

class Drink extends Component {

    constructor(props) {
        super(props);

        this.state = {
            amountOfClicks: 0,
/*             friend: "Paul" */
        }
    }

    incrementCounter = () => {
        this.setState({
            amountOfClicks: this.state.amountOfClicks + 1
        });

        if (this.state.amountOfClicks >= 5) {
            this.props.onAmountReached();
        }
    }

    render() {
        return (
            <li className={styles.list} onClick={this.incrementCounter}>
                <div>{this.props.name}</div>
                <div>{this.state.amountOfClicks}</div>
                <div>{this.state.friend}</div>{/* 
 */}            </li>
        );
    }
}

export default Drink;