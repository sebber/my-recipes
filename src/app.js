import React, { Component } from 'react';

import { Grid, Row, Col, PageHeader } from 'react-bootstrap';

import { RouteHandler, Link } from 'react-router';

import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { NavItemLink } from 'react-router-bootstrap';


export default class App extends Component {
    render() {
        const { recipes, actions } = this.props;
        return (
            <div>
                <Navbar brand="My Recepies">
                    <Nav>
                        <NavItemLink to="/">Start</NavItemLink>
                        <NavItemLink to="recipes">Recepten</NavItemLink>
                        <NavItemLink to="about">About</NavItemLink>
                    </Nav>
                </Navbar>
                <Grid>
                    <Row>
                        <Col xs={12} md={8}>
                            <PageHeader>
                                <h1>Receptbanken</h1>
                            </PageHeader>
                            <RouteHandler {...this.props} />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}


import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as RecipeActions from './actions';

function mapState(state) {
  return {
    recipes: state.recipes
  };
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(RecipeActions, dispatch)
  };
}

export default connect(mapState, mapDispatch)(App);
