import React from "react";
import { Table, Button, Col } from "reactstrap";
import "./BacklogTable.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const BacklogTable = (props) => {
    const gameTotals = props.backlog.map(game => Number(game.length)).reduce((prev, next) => prev + next, 0)
    return (
        <div>
            <Col lg={{size: 9, offset: 2}}>
                <div className="backLogHeader">
                    <h3>Video Game Backlog</h3>
                    <p> (your shame)</p>
                    <Button id="newGame" onClick={props.newGame} color="primary" className="float-right">Add new game</Button>
                </div>
                <Table striped bordered>
                    <thead>
                        <tr>
                            <th></th>
                            <th onClick={e => props.sort(e, "name")}style={{cursor:"pointer"}} >Name</th>
                            <th onClick={e => props.sort(e, "genre")}style={{cursor:"pointer"}}>Genre</th>
                            <th onClick={e => props.sort(e, "platform")}style={{cursor:"pointer"}}>Platform</th>
                            <th onClick={e => props.sort(e, "interest")}style={{cursor:"pointer"}}>Interest</th>
                            <th onClick={e => props.sort(e, "startedPlaying")}style={{cursor:"pointer"}}>Started playing</th>
                            <th onClick={e => props.sort(e, "length")}style={{cursor:"pointer"}}>Length(hrs.)</th>
                            {/* <th>Finished</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        { props.backlog.map((backlog, id) => {
                            return (
                                <tr key={id}>
                                    <th scope="row">
                                        <FontAwesomeIcon className="icons" icon={faTrashAlt} id={backlog.id} onClick={props.delete} style={{cursor:"pointer"}} />
                                        <FontAwesomeIcon className="icons" icon={faEdit} id={backlog.id} onClick={e => props.update(e, backlog)} style={{cursor:"pointer"}} /> 
                                    </th>
                                    <td>{backlog.name}</td>
                                    <td>{backlog.genre}</td>
                                    <td>{backlog.platform}</td>
                                    <td>{backlog.interest}</td>
                                    <td>{backlog.startedPlaying}</td>
                                    <td>{backlog.length}</td>
                                    {/* <td>{backlog.finished}</td> */}
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
                <p id="lengthTotal" className="float-right">Total length of backlog: { gameTotals } hrs.</p>
            </Col>
        </div>
    )
}

export default BacklogTable;