import React, {useState} from "react";
import DataMeals from "./DataMeals";
import '../components/UI/ASSETS/style.scss';

const Meals = (props) =>{

 const [add, setAdd] = useState(0);

 const addButtonHandler = (event) =>{
    event.preventDefault();
 }

 
    
    return(
        <div>
        <h1>{props.burger}</h1>
         <p>{props.desc}</p>
         <p>{props.price}</p>
            <div className="meals2">
                <form>
                <label htmlFor="amount">Amount</label>
                <input type="text" id="amount" value={add} onChange={addButtonHandler}/>
                <button>+Add</button>
                </form>
            </div>
        </div>
    )
}

export default Meals;