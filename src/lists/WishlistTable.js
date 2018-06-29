import React from "react";
import { Table, Button, Col } from "reactstrap";
import "./WishlistTable.css";

const WishlistTable = (props) => {
    return (
        <div>
            <Col lg={{size: 6, offset: 1}}>
                <div className="wishListHeader">
                    <h3>Wishlist</h3>
                    <p> (because your backlog isn't long enough already)</p>
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
                                        <Button id={wishlist.id}color="warning" size="sm">delete</Button>
                                        <Button id={wishlist.id} color="success" size="sm">edit</Button>
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