import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from "reactstrap";
import APIURL from "../helpers/environment";

class BacklogNew extends Component {
    constructor () {
        super()
        this.state = {
            dropdownOpen: false,
            id: "",
            name: "",
            genre: "",
            platform: "",
            interest: 0,
            startedPlaying: "no",
            length: 0
        };
    }

    toggle = () => {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/blmanager/backlog/create`, {
            method: "POST",
            body: JSON.stringify({ backlogGame: this.state }),
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": this.props.token
            })
        })
        .then((res) => res.json())
        .then((blogData) => {
            this.props.updateBacklogArray()
        })
        .then(this.props.closeModal)
    }

    render() {
        return(
            <div>
                <Modal isOpen={true}>
                    <ModalHeader>Enter new game info</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label for="name" hidden>Name</Label>
                                <Input id="name" type="text" name="name" value={this.state.name} placeholder="enter name" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="genre" hidden>Genre</Label>
                                <Input type="text" id="genre" name="genre" value={this.state.genre} onChange={this.handleChange} placeholder="genre" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="platform" hidden>Platform</Label>
                                <Input type="text" id="platform" name="platform" value={this.state.platform} placeholder="platform" onChange={this.handleChange}>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="interest">Interest level</Label>
                                <Input type="select" name="interest" id="interest" value={this.state.interest} onChange={this.handleChange} placeholder="interest">
                                    <option></option>
                                    <option value= "1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="startedPlaying">Started Playing?</Label>
                                <Input type="select" name="startedPlaying" id="startedPlaying" value={this.state.startedPlaying} onChange={this.handleChange}>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="length">Length</Label>
                                <Input id="length" type="text" name="length" value={this.state.length} onChange={this.handleChange} />
                            </FormGroup>
                            <Button type="submit" color="primary">Submit</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }

}

export default BacklogNew;