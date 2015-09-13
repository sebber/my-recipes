import React from 'react';
import Router, { Route, DefaultRoute, NotFoundRoute } from 'react-router';

import App from './app';
import Index from './pages/index';
import About from './pages/about';
import { RecipeList, RecipePresentation } from './pages/recipe';


class NotFound extends React.Component {
    render() {
        return (
            <h1>Not Found yo</h1>
        );
    }
}

export default (
    <Route path="/" handler={App} >
        <DefaultRoute handler={Index} />
        <Route name="about" path="about" handler={About} />
        <Route name="recipes" path="recipes" handler={RecipeList}/>
        <Route name="show-recipe" path="recipes/:id" handler={RecipePresentation} />
        <NotFoundRoute handler={NotFound} />
    </Route>
);
