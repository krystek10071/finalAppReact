import React from 'react';




export class RecipePage extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.location.state.advertise.advertise._id)
        this.state = {
            advertise: this.props.location.state.advertise.advertise,
        }
    }

    
    render() {
        const advertise = this.state;
        return (
            <div >
                <h1>{this.state.advertise.title}</h1>
                <h2>Cena wynosi: {this.state.advertise.price}  zł</h2>
                <h3>Opis przedmiotu: {this.state.advertise.description}</h3>
                <h4>Lokalizacja: {this.state.advertise.location}</h4>
                <h5>Numer kontaktowy: {this.state.advertise.contactNumber}</h5>

            </div>
        );
    }
}