import React from "react";
import { Jumbotron, Container, Col } from "reactstrap";
import "./Jumbotron.css";

const Header = (props) => {
    return (
        <div>
            <Jumbotron fluid>
                <Container fluid>
                    <Col xl={{ size: 10, offset: 2 }}>
                        <h1 className="jumboheader">Video Game Backlog Manager</h1>
                        <Col sm={{ size: 10 }}>
                        <p className="tagline">Because you'll feel less ashamed if you have it organized.</p>
                        </Col>
                    </Col>
                </Container>
            </Jumbotron>
        </div>
    )
};

export default Header;