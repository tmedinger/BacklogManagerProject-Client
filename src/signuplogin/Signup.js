import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody } from "reactstrap";

class Signup extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            email: "",
            password: ""
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit = (event) => {
        fetch("http://localhost:3000/blmanager/user/create", {
            method: "POST",
            body: JSON.stringify({ user: this.state}),
            headers: new Headers({
                "Content-Type": "application/json"
            })
        }).then((response) => response.json()
        ).then((data)=> {
            this.props.setToken(data.sessionToken)
        }).then(this.props.modalToggle)
        event.preventDefault()
    }

    render() {
        return(
            <div>
                <Modal isOpen={true}>
                    <ModalHeader>Create new account</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label for="username" hidden>enter username</Label>
                                <Input id="username" type="text" name="username" placeholder="New username" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="email" hidden>enter email</Label>
                                <Input id="email" type="email" name="email" placeholder="Enter email" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="password" hidden>enter password</Label>
                                <Input id="password" type="password" name="password" placeholder="Enter password" onChange={this.handleChange} />
                            </FormGroup>
                            <Button type="submit">Signup</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }

}

export default Signup;