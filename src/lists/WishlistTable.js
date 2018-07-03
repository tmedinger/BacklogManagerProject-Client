import React from "react";
import { Table, Button, Col } from "reactstrap";
import "./WishlistTable.css";

const WishlistTable = (props) => {
    return (
        <div>
            <Col lg={{size: 6, offset: 1}}>
                <div className="wishListHeader">
                    <h3>Wishlist</h3>
                    <p> (because your backlog isn't long enough)</p>
                    <Button id="newGame" onClick={props.newGame} color="primary" className="float-right">Add new game</Button>
                </div>
                <Table striped bordered>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Genre</th>
                            <th>Platform</th>
                            <th>Interest</th>
                        </tr>
                    </thead>
                    <tbody>
                        { props.wishlist.map((wishlist, id) => {
                            return (
                                <tr key={id}>
                                    <th scope="row">
                                        <Button id={wishlist.id} onClick={props.delete} color="warning" size="sm">delete</Button>
                                        <Button id={wishlist.id} onClick={e => props.update (e, wishlist)} color="success" size="sm">edit</Button>
                                    </th>
                                    <td>{wishlist.name}</td>
                                    <td>{wishlist.genre}</td>
                                    <td>{wishlist.platform}</td>
                                    <td>{wishlist.interest}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Col>
        </div>
    )
}

export default WishlistTable;