import React from 'react';
import {Table} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const apiBaseUrl = "http://localhost:3069/api/";

export class RecipesPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            recipes: []
        }
    }

    refreshList() {
        /*this.setState({
            recipes:[{"_id": "xd", "name": "name", "author": "author"}]
        })*/
        const headers = {
            'Access-Control-Allow-Origin': '*' 
        }
        fetch(apiBaseUrl + 'recipe', headers)
        .then(response => response.json())
        .then(data => {
            this.setState({recipes:data});
        });
    }

    componentDidMount() {
        this.refreshList();
    }

    handleClick = value => event => {
        console.log(value);
        this.props.history.push('/recipe', {
            recipe: value
        })
    }

    render() {
        const {recipes} = this.state;
        return (
            <div>
                <h1>Lista ogłoszeń</h1>
                <Table className="mt-4">
                    <thead>
                        <tr>
                            <th>Recipe Name</th>
                            <th>Author</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {recipes.map(recipe =>
                        <tr key={recipe._id}>
                            <td valign="middle">{recipe.name}</td>
                            <td valign="middle">{recipe.author}</td>
                            <td width="15%" align="center"><Button onClick={this.handleClick({recipe})}>Show recipe</Button></td>
                        </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        );
    }
}