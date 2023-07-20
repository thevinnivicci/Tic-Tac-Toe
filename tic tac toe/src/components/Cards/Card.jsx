import Icon from "../Icon/Icon";
import "./Card.css";
function Card({player}){
    let icon = <Icon/>
    if (player =='X'){
        icon = <Icon name="cross"/>
        console.log("cross");
    }else if (player == 'O'){
        icon = <Icon name="circle"/>
        console.log("cross");
    }
    return(
        <div className="card">
            {icon}
        </div>
    )
}
export default Card;