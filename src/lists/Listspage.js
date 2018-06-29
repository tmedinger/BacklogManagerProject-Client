import React, { Component } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink, Button, Row, Col } from "reactstrap";
import classnames from "classnames";
import BacklogTable from "./BacklogTable";
import WishlistTable from "./WishlistTable";

class Listspage extends Component {
    constructor() {
        super()
        this.state = {
            backlog: [],
            wishlist: [],
            activeTab: "1"
        };
    }

    componentDidMount() {
        this.fetchBacklog(),
        this.fetchWishlist()
    }

    fetchBacklog = () => {
        fetch("http://localhost:3000/blmanager/backlog/getall", {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": this.props.token
            })
        })
        .then((res) => res.json())
        .then((backlogData) => {
            return this.setState({ backlog: backlogData })
        })
    }

    fetchWishlist = () => {
        fetch("http://localhost:3000/blmanager/wishlist/getall", {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": this.props.token
            })
        })
        .then((res) => res.json())
        .then((wishlistData) => {
            return this.setState({ wishlist: wishlistData })
        })
    }

    toggle = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        return (
            <div>
                <Nav tabs>
                    <NavItem style={{cursor:"pointer"}}>
                        <NavLink className={classnames({ active: this.state.activeTab === "1" })} onClick={() => {this.toggle("1"); }}>Backlog</NavLink>
                    </NavItem>
                    <NavItem style={{cursor:"pointer"}}>
                        <NavLink className={classnames({ active: this.state.activeTab === "2" })} onClick={() => { this.toggle("2"); }}>Wishlist</NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="10">
                                <BacklogTable backlog={this.state.backlog}></BacklogTable>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col sm="10">
                                <WishlistTable wishlist={this.state.wishlist}></WishlistTable>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        )
    }
}


export default Listspage;