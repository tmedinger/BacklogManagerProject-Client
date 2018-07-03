import React from "react";
import { Table, Button, Col } from "reactstrap";
import "./BacklogTable.css";

const BacklogTable = (props) => {
    const gameTotals = props.backlog.map(game => Number(game.length)).reduce((prev, next) => prev + next, 0)
    return (
        <div>
            <Col lg={{size: 10, offset: 1}}>
                <div className="backLogHeader">
                    <h3>Video Game Backlog</h3>
                    <p> (your shame)</p>
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
                            <th>Started playing</th>
                            <th>Length(hrs.)</th>
                            <th>Finished</th>
                        </tr>
                    </thead>
                    <tbody>
                        { props.backlog.map((backlog, id) => {
                            return (
                                <tr key={id}>
                                    <th scope="row">
                                        <Button id={backlog.id} onClick={props.delete} color="warning" size="sm">delete</Button>
                                        <Button id={backlog.id} onClick={e => props.update(e, backlog)} color="success" size="sm" >edit</Button></th>
                                    <td>{backlog.name}</td>
                                    <td>{backlog.genre}</td>
                                    <td>{backlog.platform}</td>
                                    <td>{backlog.interest}</td>
                                    <td>{backlog.startedPlaying}</td>
                                    <td>{backlog.length}</td>
                                    <td>{backlog.finished}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
                <p id="lengthTotal" className="float-right">Total length of backlog { gameTotals } hrs.</p>
            </Col>
        </div>
    )
}

export default BacklogTable;