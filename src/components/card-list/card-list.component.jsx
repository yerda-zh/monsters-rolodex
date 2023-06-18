import './card-list.styles.css';
import CardContainer from "../card/card.component";

const CardList = ({monsters})=> (
    <div className="card-list">
        {monsters.map((monster) => {
            return (
                <CardContainer monster = {monster}/>    
            );
        })};
    </div>
);

export default CardList;