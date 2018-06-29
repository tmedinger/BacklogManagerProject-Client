import React from "react";
import { Table, Button, Col } from "reactstrap";
import "./BacklogTable.css";

const BacklogTable = (props) => {
    return (
        <div>
            <Col lg={{size: 10, offset: 1}}>
                <div className="backLogHeader">
                    <h3>Video Game Backlog</h3>
                    <p> (your shame)</p>
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
                            <th>Length</th>
                            <th>Finished</th>
                        </tr>
                    </thead>
                    <tbody>
                        { props.backlog.map((backlog, id) => {
                            return (
                                <tr key={id}>
                                    <th scope="row">
                                        <Button id={backlog.id} color="warning" size="sm">delete</Button>
                                        <Button id={backlog.id}color="success" size="sm">edit</Button></th>
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
            </Col>
        </div>
    )
}

export default BacklogTable;