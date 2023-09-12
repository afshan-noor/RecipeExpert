import React from "react";
import styles from './MainNavigation.module.css';
const RecipeIndex = ({ alphaIndex }) => {
    const categories = ["Starter", "Dessert", "Seafood"]; // Update the categories

    return (
        <>
       
            {categories.map((category, index) => (
                <div className={styles.numBox} key={index} onClick={() => alphaIndex(category)}>
                    <h3 className={styles.box}>
                        <span>
                        {category}
                        </span>
                    </h3>
                </div>
            ))}
            
        </>
    );
};

export default RecipeIndex;
