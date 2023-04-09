import React, {Component} from 'react';

export default class User extends Component{
  render(){
    const {name, surname, age, isSelected } = this.props;
    return(
      <article>
        <h2>{name} {surname}</h2>
        <p>age: {age}</p>
      </article>
    )
  }
}