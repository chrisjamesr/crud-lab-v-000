import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput'


class Restaurant extends Component {

  handleClick = (event)=>{
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id,
    })
  }

  render() {
    // const reviews = this.props.restaurant.reviews.map(r=> <Reviews />)
    return (
      <li>
        {this.props.restaurant.text}
        <button onClick={this.handleClick} />
        <ReviewInput store={this.props.store} restaurantId={this.props.restaurant.id}/>
      </li>
    );
  }
};

export default Restaurant;