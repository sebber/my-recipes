import React, { Component } from 'react';
import Router from 'react-router';
import routes from './routes';
import { Provider } from 'react-redux';
import { recipes } from './stores/recipes';
import {combineReducers, createStore, compose} from 'redux';
import { ReduxRouter, routerStateReducer, reduxReactRouter } from 'redux-react-router';
import { devTools } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

/*
import { reduxRouteComponent, reduxReactRouter,
        routerStateReducer} from 'redux-react-router';
*/

import { createHistory } from 'history';

const reducer = combineReducers({
    router: routerStateReducer,
    recipes: recipes
});

//const store = createStore(reducer);
//const store = createStore(reducer);
const store = compose(
    devTools()
)(createStore)(reducer);

//React.render(<App />, document.getElementById('app'));

Router.run(routes, function(Handler, state) {
    React.render((
        <div>
            <Provider store={store} >
                {() => <Handler routerState={state} />}
            </Provider>
            <DebugPanel top right bottom>
                <DevTools store={store} monitor={LogMonitor} />
            </DebugPanel>
        </div>
    ), document.getElementById('app'));
});
