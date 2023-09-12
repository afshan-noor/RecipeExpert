import styles from './Home.module.css'
import Product from './Product';
const Home=()=>{
    return(
        <>
      <section className={styles.banner}>
        <div>
            <h1 className={styles.red}>
            Search your food
            </h1>
            <h1 className={styles.white}>Best Recipes to Try for Your Every Day Meal</h1>
        </div>
      </section>
      <Product/>
        </>
    );
}
export default Home;