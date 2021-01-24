import React from 'react';
import {ButtonToolbar} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {CommentModal} from './CommentModal'
import {Card} from 'react-bootstrap';

const apiBaseUrl = "http://localhost:3069/api/";

const divStyle = {
    padding: '10px',
  };

export class RecipePage extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.location.state.recipe.recipe._id);
        this.state = {
            recipe: this.props.location.state.recipe.recipe,
            comments: [],
            commentModalShow: false
        }
    }

    refreshContent() {
        const headers = {
            'Access-Control-Allow-Origin': '*' 
        }
        fetch(apiBaseUrl + 'comment/' + this.state.recipe._id, headers)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({comments:data});
        });
    }

    componentDidMount() {
        this.refreshContent();
    }

    render() {
        const {recipe, comments} = this.state;
        let commentModalClose = () => this.setState({commentModalShow:false});
        return (
            <div style={divStyle}>
                <div style={divStyle}>
                <Card border="info" bg="light" >
                    <Card.Body>
                        <Card.Header as="h1">{recipe.name}</Card.Header>
                        <Card.Text>
                        <div style={divStyle}>
                            {recipe.description}
                        </div>
                        </Card.Text>
                        <Card.Footer>
                            
                            <small className="text-muted">Author: {recipe.author}</small>
                        </Card.Footer>
                    </Card.Body>
                </Card>
                </div>
                <div style={divStyle}>
                <ButtonToolbar>
                    <Button varian='primary' onClick={() => this.setState({commentModalShow: true})}>Add Comment</Button>
                    <CommentModal show={this.state.commentModalShow} onHide={commentModalClose} recipe={recipe._id} />
                </ButtonToolbar>
                </div>
                <div style={divStyle}>
                    {comments.map(comment=> 
                        <div style={divStyle}>
                        <Card bg="info" text="white" style={{ width: '28rem' }}>
                            <Card.Header>{comment.userName}</Card.Header>
                            <Card.Body>
                            <Card.Text>{comment.value}</Card.Text>
                            </Card.Body>
                        </Card>
                        </div>
                    )}
                    
                </div>
            </div>
        );
    }
}