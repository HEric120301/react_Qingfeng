import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import './DishdetailComponent.css';


class DishDetail extends Component {

	constructor(props) {
		super(props);
		this.state = {
			dish: this.props.selectedDish
		};
	}

	render() {

		const comments = this.state.dish.comments.map((comment) => {
            			return (
            				<div>
	            				<div className="cmt">{comment.comment} {"\n"} </div>
	            				<div className="cmt"> -- {comment.author} {comment.date.split('T')[0]}</div>
            				</div>
            			)
            		})

		return (
            <div className="row">
	            <div className="col-12 col-md-5 m-1">
		            <Card>
		                <CardImg top src={this.state.dish.image} alt={this.state.dish.name} />
		                <CardBody>
		                  <CardTitle>{this.state.dish.name}</CardTitle>
		                  <CardText>{this.state.dish.description}</CardText>
		                </CardBody>
		            </Card>
	            </div>
	            <div className="col-12 col-md-5 m-1">
            		<h4>Comments</h4>
            		{comments}
				</div>	
	        </div>
		)
	}

}

export default DishDetail;