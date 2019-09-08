import React, { Component } from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component{

    constructor(props){
        super(props);
        
    }

    /*
    renderDish method displays the selected dish in card format
    */
    renderDish(dish){
        if(dish != null)
            return(
            <div className = "col-12 col-md-5 m-1">
               <Card>
                    <CardImg width="100%" object src={dish.image} alt={dish.name} />
                    <CardTitle>{dish.name}</CardTitle>
                    <CardBody>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
            );
        else
        return(
            <div>

            </div>
        );
        
    }

    /*
    To render the comment section for each dish
    */
    renderComment(comments)
    {
        if(comments == null){
            return(
                <div></div>
            )
        }
        const com = comments.map(comment => {
            return(
                <li key = {comment.id}> 
                <p>{comment.comment} </p>
                <p>-- {comment.author},
                &nbsp;
                {
                    new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: '2-digit'
                    }).format(new Date(comment.date))
                }
                </p>
                </li>
            )
        })
        return(
                <div className = "col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className='list-unstyled'>
                    {com}
                </ul>
                </div>
        );
    }

    render(){
        const dish = this.props.dish
        if(dish ==  null){
            return (<div></div>)
        }

        const dishItem = this.renderDish(dish);
        const comment = this.renderComment(dish.comments);
     
        return(
            <div className = "row">
                {dishItem}
                {comment}
            </div>
        );
    }
}
export default DishDetail;