import React, { Component } from 'react';
import styles from './SuperCard.module.css';

export default class SuperCard extends Component {
  
    constructor(props){
        super(props);
        this.state = {
            amountOfClicks: 0 
        }

    }

    incrementCounter = () =>{
this.setState({
    amountOfClicks: this.state.amountOfClicks + 2
})

    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.content}>
                    <img className={styles.avatar} src={this.props.imgUrl} alt={this.props.superCardAlt} onClick={this.incrementCounter}/>
                    <div className={styles.name}><h1>{this.props.name}</h1></div>
                    <div>Increment by 2: {this.state.amountOfClicks}</div>
                    <div className={styles.profession}><h2>{this.props.profession}</h2></div>
                </div>
            </div>
        )
    }
}
