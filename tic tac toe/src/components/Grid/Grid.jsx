import { useState } from "react";
import Card from "../Cards/Card";
import './Grid.css';

function Grid({numbersOfCards}){
    const [board,setBoard] =  useState(Array(numbersOfCards).fill(""));
    return (
        <div className="grid">
            {board.map((el,idx)=> <Card key={idx} />)}

        </div>
    );
}
export default Grid;