import React, { Component } from "react";
import Drink from "./Drink";
import styles from './SuperList.module.css';

export default class SuperList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amountOfDrinks: 0,
            amountReached:false
        }
    }

    increment = () => {

        this.setState({
            amountOfDrinks: this.state.amountOfDrinks + 1
        })

    }

    reachedAmount = ()=>{
        this.setState({
            amountReached:true
        })
    }

    getElements(){
        let widgets = [];

        this.props.drinks.forEach(drink => {
            widgets.push(<Drink name={drink.name} onAmountReached={this.reachedAmount} ></Drink>);
        });
        return widgets;
    }

    
    render() {
        return (

            /*  TODO           onClick={this.incremenr} -> Wohin damit? muss jedes item in der Liste dann eine eigene Komponente sein?
             */

            <div className={styles.container} >
                <div className={styles.content} >
                    <ul >
                        {this.getElements()}
                    </ul>
                    {this.state.amountReached?<div>super</div>:<div>looser</div>}
                </div>
                
            </div>
        )
    }
}