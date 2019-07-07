import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from "reactstrap";

class BacklogEdit extends Component {
    constructor() {
        super()
        this.state = {
            id: "",
            name: "",
            genre: "",
            platform: "",
            interest: 0,
            startedPlaying: "no",
            length: 0
        };
    }

    componentDidMount() {
        this.setState({
            id: this.props.backlog.id,
            name: this.props.backlog.name,
            genre: this.props.backlog.genre,
            platform: this.props.backlog.platform,
            interest: this.props.backlog.interest,
            startedPlaying: this.props.backlog.startedPlaying,
            length: this.props.backlog.length
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.update(event, this.state)
    }

    render() {
        return (
            <div>
                <Modal isOpen={true}>
                    <ModalHeader>Edit game info</ModalHeader>
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
                                <Input type="text" id="platform" name="platform" value={this.state.platform} placeholder="platform" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="interest">Interest</Label>
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
                                <Label for="length">Length(hrs.)</Label>
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

export default BacklogEdit;