import React from 'react';
import {Modal, Button, Form} from 'react-bootstrap';

import axios from 'axios';

const apiBaseUrl = "http://localhost:3069/api/";

export class CommentModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: "",
            value: "",
        };
    }

    handleSubmit = event => {
        event.preventDefault();
        const headers = {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*' 
        }
        const payload = {
          "userName": this.state.userName,
          "value": this.state.value,
          "recipeId": this.props.recipe,
        }
        console.log(this.props);
        console.log(payload);
        axios.post(apiBaseUrl + 'comment', payload, {headers: headers})
        .then(function (response) {
            alert("New comment succesfully saved");
        });
        this.props.onHide();
    }

    onValueChange = ({ target: { name, value } }) => {
        return this.setState({ [name]: value });
    };

    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    Add Comment
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formAuthor">
                            <Form.Label>User name</Form.Label>
                            <Form.Control required type="text" name="userName" onChange = {this.onValueChange} placeholder="Enter recipe user name" />
                        </Form.Group>
                        <Form.Group controlId="formValue">
                            <Form.Label>Recipe comment</Form.Label>
                            <Form.Control required as="textarea" rows="3" name="value" onChange = {this.onValueChange} />
                        </Form.Group>
                        <Button variant="primary" type="submit">Save</Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}