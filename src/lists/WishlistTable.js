import React from "react";
import { Table, Button, Col } from "reactstrap";
import "./WishlistTable.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const WishlistTable = (props) => {
    return (
        <div>
            <Col lg={{size: 6, offset: 4}}>
                <div className="wishListHeader">
                    <h3>Wishlist</h3>
                    <p> (because your backlog isn't long enough)</p>
                    <Button id="newGame" onClick={props.newGame} color="primary" className="float-right">Add new game</Button>
                </div>
                <Table striped bordered>
                    <thead>
                        <tr>
                            <th></th>
                            <th onClick={e => props.sort(e, "name")}style={{cursor:"pointer"}} >Name</th>
                            <th onClick={e => props.sort(e, "genre")}style={{cursor:"pointer"}} >Genre</th>
                            <th onClick={e => props.sort(e, "platform")}style={{cursor:"pointer"}}>Platform</th>
                            <th onClick={e => props.sort(e, "interest")}style={{cursor:"pointer"}}>Interest</th>
                        </tr>
                    </thead>
                    <tbody>
                        { props.wishlist.map((wishlist, id) => {
                            return (
                                <tr key={id}>
                                    <th scope="row">
                                        <FontAwesomeIcon className="icons" icon={faTrashAlt} id={wishlist.id} onClick={props.delete} style={{cursor:"pointer"}} />
                                        <FontAwesomeIcon className="icons" icon={faEdit} id={wishlist.id} onClick={e => props.update(e, wishlist)} style={{cursor:"pointer"}} />
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