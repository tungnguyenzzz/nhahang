import { useState } from "react";
import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = ({ pizzaList }) => {
  const [query, setQuery] = useState("");
  return (
    <div className={styles.container}>
      <a href="tel:0972583033">0812165826</a>
      <input
        className={styles.search}
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />

      <label for="cars">Chọn bộ lọc</label>
      <select name="cars" id="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <div className={styles.wrapper}>
        {pizzaList.filter((asd) =>
          asd.title.toLowerCase().includes(query)
        ).map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
