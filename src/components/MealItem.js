import React from "react";
import styles from './MealItem.module.css'
import { useNavigate } from "react-router-dom";
const MealItem=({data})=>{
    const navigate=useNavigate();
    console.log(data);
    return(
        <>
       {
        (!data)?"Not Found":data.map(item=>{
            return(
//              
                  <div className={styles.productmain} key={item.idMeal} onClick={()=>navigate('/restaurant/' + item.idMeal)}>
                    <div className={styles.productItem}>
                        <img src={item.strMealThumb} alt=""  />
                        <div className={styles.productInner}>
                            <div className={styles.flexBox}>
                                <h3>{item.strMeal}</h3>
                            </div>
                        </div>
                    </div>
                  
                </div>
                
            )
        })
       }
        </>
    )
}
export default MealItem;