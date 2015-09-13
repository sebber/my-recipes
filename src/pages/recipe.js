import React, { Component, PropTypes } from 'react';

import { ButtonLink } from 'react-router-bootstrap';

import { recipes } from '../stores/recipes';

class RecipeListItem extends Component {
    render() {
        const { recipe, actions } = this.props;

        console.log(recipe);
        return (
            <li>
                <ButtonLink to="show-recipe" params={{id: recipe.index}}>
                    {recipe.recipe.name}
                </ButtonLink>
            </li>
        );
    }
}

export class RecipeList extends Component {
    eachRecipe(recipes) {
        return recipes.map(
            (recipe, index) => <RecipeListItem recipe={{index:index, recipe: recipe}} />
        );
    }

    render() {
        const { recipes, actions } = this.props;

        return (
            <ul>
                {this.eachRecipe(recipes)}
            </ul>
        );
    }
}

export class RecipePresentation extends Component {
    render() {
        const { recipe, actions } = this.props;
        return (
            <div>
                {recipe.name}
            </div>
        )
    }
}
