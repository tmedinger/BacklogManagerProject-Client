import React, { Component } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Container } from "reactstrap";
import classnames from "classnames";
import BacklogTable from "./BacklogTable";
import WishlistTable from "./WishlistTable";
import BacklogEdit from "./BacklogEdit";
import WishlistEdit from "./WishlistEdit";
import BacklogNew from "./BacklogNew";
import WishlistNew from "./WishlistNew";
import APIURL from "../helpers/environment";

class Listspage extends Component {
    constructor() {
        super()
        this.state = {
            backlog: [],
            wishlist: [],
            activeTab: "1",
            updateBLogPressed: false,
            updateWListPressed: false,
            addNewBLogPressed: false,
            addNewWListPressed: false,
            backlogToUpdate: {},
            wishlistToUpdate: {}
        };
    }

    sortBacklog = (event, sortColumn) => {
        const backlog = this.state.backlog
        backlog.sort((a, b) => a[sortColumn].toString().localeCompare(b[sortColumn]))
        this.setState(backlog)
    }

    sortWishlist = (event, sortColumn) => {
        const wishlist = this.state.wishlist
        wishlist.sort((a, b) => a[sortColumn].toString().localeCompare(b[sortColumn]))
        this.setState(wishlist)
    }

    componentDidMount() {
        this.fetchBacklog()
        this.fetchWishlist()
    }

    fetchBacklog = () => {
        fetch(`${APIURL}/blmanager/backlog/getall`, {
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
        fetch(`${APIURL}/blmanager/wishlist/getall`, {
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

    addNewBLogToggle = () => {
        if (this.state.addNewBLogPressed === false) {
            this.setState({ addNewBLogPressed: true });
        } else {
            this.setState({ addNewBLogPressed: false });
        }
    }

    addNewWListToggle = () => {
        if (this.state.addNewWListPressed === false) {
            this.setState({ addNewWListPressed: true });
        } else {
            this.setState({ addNewWListPressed: false });
        }
    }

    backlogUpdate = (event, backlog) => {
        fetch (`${APIURL}/blmanager/backlog/update/${backlog.id}`, {
            method: "PUT",
            body: JSON.stringify({ backlogGame: backlog }),
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": this.props.token
            })
        })
        .then((res) => {
            this.setState({ updateBLogPressed: false })
            this.fetchBacklog();
        })
    }

    wishlistUpdate = (event, wishlist) => {
        fetch (`${APIURL}/blmanager/wishlist/update/${wishlist.id}`, {
            method: "PUT",
            body: JSON.stringify({ wishlistGame: wishlist }),
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": this.props.token
            })
        })
        .then((res) => {
            this.setState({ updateWListPressed: false })
            this.fetchWishlist();
        })
    }

    setBacklogUpdate = (event, backlog) => {
        this.setState({
            backlogToUpdate: backlog,
            updateBLogPressed: true
        })
    }

    setWishlistUpdate = (event, wishlist) => {
        this.setState({
            wishlistToUpdate: wishlist,
            updateWListPressed: true
        })
    }

    backlogDelete = (event) => {
        fetch (`${APIURL}/blmanager/backlog/delete/${event.target.id}`, {
            method: "DELETE",
            body: JSON.stringify({ backlogGame: { id: event.target.id } }),
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": this.props.token
            })
        })
        .then((res) => this.fetchBacklog())
    }

    wishlistDelete = (event) => {
        fetch (`${APIURL}/blmanager/wishlist/delete/${event.target.id}`, {
            method: "DELETE",
            body: JSON.stringify({ wishlistGame: { id: event.target.id } }),
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": this.props.token
            })
        })
        .then((res) => this.fetchWishlist())
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
                                <BacklogTable newGame={this.addNewBLogToggle} backlog={this.state.backlog} update={this.setBacklogUpdate} delete={this.backlogDelete} sort={this.sortBacklog} sortNum={this.sortBacklogNum}></BacklogTable>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col sm="10">
                                <WishlistTable newGame={this.addNewWListToggle} wishlist={this.state.wishlist} update={this.setWishlistUpdate} delete={this.wishlistDelete} sort={this.sortWishlist}></WishlistTable>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
                <Container>
                    <Row>
                        <Col md="12">
                            {this.state.updateBLogPressed ? <BacklogEdit t={this.state.updateBLogPressed} update={this.backlogUpdate} backlog={this.state.backlogToUpdate} /> : <div></div>}
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col md="12">
                            {this.state.updateWListPressed ? <WishlistEdit t={this.state.updateWListPressed} update={this.wishlistUpdate} wishlist={this.state.wishlistToUpdate} /> : <div></div>}
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col md="12">
                            {this.state.addNewBLogPressed ? <BacklogNew t={this.state.addNewBLogPressed}
                            token={this.props.token}
                            closeModal={this.addNewBLogToggle} updateBacklogArray={this.fetchBacklog}/> : <div></div>}
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col md="12">
                            {this.state.addNewWListPressed ? <WishlistNew t={this.state.addNewWListPressed}
                            token={this.props.token}
                            closeModal={this.addNewWListToggle} updateWishlistArray={this.fetchWishlist}/> : <div></div>}
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}


export default Listspage;