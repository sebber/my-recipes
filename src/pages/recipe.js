import React, { Component, PropTypes } from 'react';

import { Link } from 'react-router';
import { ButtonLink } from 'react-router-bootstrap';

import { recipes } from '../stores/recipes';

class RecipeListItem extends Component {
    render() {
        const { recipe, actions } = this.props;

        return (
            <li>
                <Link to="show-recipe" params={{id: recipe.index}}>
                    {recipe.recipe.name}
                </Link>
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

    constructor(props) {
        super(props);
        const { recipes, actions, params } = this.props;
        const { id } = params;

        this.state = {
            recipe: recipes[id] || { name: 'No recipe found' }
        };
    }

    render() {
        return (
            <div>
                <h1>{this.state.recipe}</h1>
            </div>
        )
    }
}
