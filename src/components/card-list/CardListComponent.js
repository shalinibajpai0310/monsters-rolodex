import './cardList.style.css';
import CardComponent from '../card/CardComponent';

const CardListComponent = (props) => {
    const {monsters} = props;
    return  <div className="card-list">
    { 
      monsters.map((monster) => {
        const {id,name,email} = monster;
        return(<CardComponent id={id} name={name} email={email}/>)}
    )}
  </div>
}
export default CardListComponent;