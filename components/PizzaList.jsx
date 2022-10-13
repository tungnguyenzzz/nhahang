import { useState } from "react";
import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";
import { FacebookProvider, CustomChat } from 'react-facebook';
const PizzaList = ({ pizzaList }) => {
  const [query, setQuery] = useState("");
  return (
    <div className={styles.container}>
      <FacebookProvider appId="445580737497709" chatSupport>
        <CustomChat pageId="100085506585411" minimized={false} />
      </FacebookProvider>
      <a className={styles.btnCall} href="tel:0972583033"><img className={styles.imgCall} src="https://library.kissclipart.com/20180829/gwq/kissclipart-mobile-phone-icon-green-clipart-mobile-phones-comp-704b91b3d8e87f1a.png"></img></a>
      <input
        className={styles.search}
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />

      <label htmlFor="cars">Chọn bộ lọc</label>
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
