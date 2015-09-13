import React, { Component, PropTypes } from 'react';

import { recipes } from '../stores/recipes';

class RecipeListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipe: props.recipe
        }
    }

    render() {
        return (
            <li>{this.state.recipe.name}</li>
        );
    }
}

export class RecipeList extends Component {
    eachRecipe(recipes) {
        return recipes.map(
            recipe => <RecipeListItem recipe={recipe} />
        );
    }

    render() {
        const { recipes, actions } = this.props;
        console.log(this.props);

        console.log(recipes);

        return (
            <ul>
                {this.eachRecipe(recipes)}
            </ul>
        );
    }
}

export class RecipePresentation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipe: props.recipe
        };
    }

    render() {
        return (
            <div>
                {this.state.recipe.name}
            </div>
        )
    }
}
