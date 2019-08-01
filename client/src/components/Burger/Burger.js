import React from 'react'
import classes from './Burger.scss'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const Burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
           return <BurgerIngredient key={igKey + i} type={igKey}/>
    });
    })
    .reduce((array, element)=> {
        return array.concat(element)
    }, []);

    if(transformedIngredients.length === 0 ){
        transformedIngredients = <p> Please Start Adding Ingredients</p>
    }
    console.log(transformedIngredients)
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'/>
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom'/>
        </div>
    )
}



export default Burger
