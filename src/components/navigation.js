import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { NavItemLink } from 'react-router-bootstrap';

export default class Navigation extends Component {
    render() {
        return (
            <Navbar brand="My Recepies">
                <Nav>
                    <NavItemLink to="/">Link</NavItemLink>
                    <NavItemLink to="about">Link</NavItemLink>
                </Nav>
            </Navbar>
        );
    }
}
