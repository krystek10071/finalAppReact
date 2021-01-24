import React from 'react';
import {Table} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const apiBaseUrl = "http://localhost:8080/posts";

export class RecipesPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            advertises: []
        }
    }

    refreshList() {
        this.setState({
            advertises:[{"_id": "0", "name": "nazwa", "location": "lokalizacja", "price": "cena"}]
        })

        const headers = {
            'Access-Control-Allow-Origin': '*' 
        }

        fetch(apiBaseUrl + "?page=0", headers)
        .then(response => response.json())
        .then(data => {
            this.setState({advertises:data});
        });
    }

    componentDidMount() {
        this.refreshList();
    }

    handleClick = value => event => {
        console.log(value);

        this.props.history.push('/advertise', {
            advertise: value
        })
    }

    render() {
        const {advertises} = this.state;
        return (
            <div>
                <h1>Lista ogłoszeń</h1>
                <Table className="mt-4">
                    <thead>
                        <tr>
                            <th>Nazwa przedmiotu</th>
                            <th>Lokalizacja</th>
                            <th>Cena</th>
                        </tr>
                    </thead>
                    <tbody>
                        {advertises.map(advertise =>
                        <tr key={advertise.id}>
                            <td valign="middle">{advertise.title}</td>
                            <td valign="middle">{advertise.location}</td>
                            <td valign="middle">{advertise.price}</td>
                            <td width="15%" align="center"><Button onClick={this.handleClick({advertise})}>Pokaż szczegóły</Button></td>
                        </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        );
    }
}