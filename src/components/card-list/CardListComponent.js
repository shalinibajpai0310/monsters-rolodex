import { Component } from "react";
import './cardList.style.css';
import CardComponent from '../card/CardComponent';

class CardListComponent extends Component{
    render(){
        console.log("render from card list",this.props)
        const {monsters} = this.props;
        return  <div className="card-list">
        { 
          monsters.map((monster) => {
            const {id,name,email} = monster;
            return(<CardComponent id={id} name={name} email={email}/>)}
        )}
      </div>
    }
}

export default CardListComponent;