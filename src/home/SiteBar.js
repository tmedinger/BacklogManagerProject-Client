import React, { Component } from "react";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, Button } from "reactstrap";

class SiteBar extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false,
            username: ""
        };
    }

    componentWillMount() {
        this.setState({ username: this.props.userName })
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar color="info" light expand="md" fixed="top">
                    <NavbarBrand href="#">Video Game Backlog Manager</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button onClick={() => this.props.clickLogout()}>Logout</Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }

}

export default SiteBar;