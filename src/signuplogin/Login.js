import React, { Component } from "react";
import { Form, Label, Input, Button, FormGroup, Container, Col, Row } from "reactstrap";
import Signup from "./Signup";
import "./Login.css";

class Login extends Component {
    constructor(){
        super()
        this.state = {
            username: "",
            password: "",
            signupPressed: false
        };
    }

    modalToggle = () => {
        if (this.state.signupPressed === false) {
            this.setState({ signupPressed: true });
        } else {
            this.setState({ signupPressed: false });
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        fetch("http://localhost:3000/blmanager/user/login", {
            method: "POST",
            body: JSON.stringify({user:this.state}),
            headers: new Headers({
                "Content-Type": "application/json"
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            this.props.setToken(data.sessionToken)
        })
        event.preventDefault()
    }

    render() {
        return(
            <div>
                <Container className="loginContainer">
                    <Row>
                        <Col sm={{ size: 3, offset: 4}}>
                            <h1>Login</h1>
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup>
                                    <Label for="username" hidden>enter username</Label>
                                    <Input type="username" name="username" id="username" placeholder="Username" onChange={this.handleChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="password" hidden>enter password</Label>
                                    <Input type="password" name="password" id="password" placeholder="Password" onChange={this.handleChange}/>
                                </FormGroup>
                                <FormGroup className="logsignbuttons">
                                    <Button type="submit">Login</Button>
                                    <Button id="signB" onClick={this.modalToggle}>Signup</Button>
                                    <Label for="signup">or if you don't have an account.</Label>
                                </FormGroup>
                            </Form>
                        </Col>
                    </Row>
                    <Col md="12">
                        {this.state.signupPressed ? <Signup t={this.state.signupPressed} setToken={this.props.setToken} modalToggle={this.modalToggle} />
                        : <div></div>} 
                    </Col>
                </Container>
            </div>
        );
    }
}

export default Login;