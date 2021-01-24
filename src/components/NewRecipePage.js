import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import axios from 'axios';

const apiBaseUrl = "http://localhost:8080/new-advertise";

export class NewRecipePage extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    
        this.state = {
          name: "",
          price: "",
          location: "",
          province: "",
          contactNumber: "",
          category: "",
          description : ""
        };
      }

    handleSubmit = event => {

        event.preventDefault();

        const headers = {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*' 
        }

        const payload = {
          "title": this.state.name,
          "price": this.state.price,
          "location": this.state.description,
          "province": this.state.province,
          "contactNumber": this.state.contactNumber,
          "category": this.state.category,
          "description": this.state.description
        }

        axios.post(apiBaseUrl, payload, {headers: headers})
        .then(function (response) {
            alert("Pomyślnie dodano nowe ogłoszenie");
        });

        this.setState({
            name: "",
            price: "",
            location: "",
            province: "",
            contactNumber: "",
            category: "",
            description : ""
          });
    }

    onValueChange = ({ target: { name, value } }) => {
        return this.setState({ [name]: value });
    };

    render() {
        return (
            <div>
                <h1>Dodaj nowe ogłoszenie</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formAuthor">
                        <Form.Label>Tytuł</Form.Label>
                        <Form.Control required type="text" name="name" onChange = {this.onValueChange} placeholder="Wprowadź tytuł ogłoszenia" />
                    </Form.Group>
                    <Form.Group controlId="formName">
                        <Form.Label>Cena</Form.Label>
                        <Form.Control required type="text" name="price" onChange = {this.onValueChange} placeholder="Podaj cene przedmiotu" />
                    </Form.Group>
                    <Form.Group controlId="formLocation">
                        <Form.Label>Lokalizacja</Form.Label>
                        <Form.Control required type="text" name="location" onChange = {this.onValueChange} placeholder= "Podaj lokalizację przedmiotu"/>
                    </Form.Group> 
    
                    <Form.Group controlId="formProvince">
                        <Form.Label>Województwo</Form.Label>
                        <Form.Control required type="text" name="province" onChange = {this.onValueChange} placeholder= "Wybierz województwo"/>
                    </Form.Group> 
                    <Form.Group controlId="formContactNumber">
                        <Form.Label>Numer kontaktowy</Form.Label>
                        <Form.Control required type="text" name="contactNumber" onChange = {this.onValueChange} placeholder= "Podaj numer telefonu"/>
                    </Form.Group> 
                    <Form.Group controlId="formCategory">
                        <Form.Label>Kategoria</Form.Label>
                        <Form.Control required type="text" name="category" onChange = {this.onValueChange} placeholder= "Podaj lokalizację przedmiotu"/>
                    </Form.Group> 
                    <Form.Group controlId="formDescription">
                        <Form.Label>Opis przedmiotu</Form.Label>
                        <Form.Control required as="textarea" rows="10" name="description" onChange = {this.onValueChange} />
                    </Form.Group>
                    <Button variant="primary" type="submit">Dodaj</Button>
                </Form>
            </div>
        );
    }
}