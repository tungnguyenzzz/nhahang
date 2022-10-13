import { useState } from "react";
import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";
import { FacebookProvider, CustomChat } from 'react-facebook';
const PizzaList = ({ pizzaList }) => {
  const [query, setQuery] = useState("");
  return (
    <div className={styles.container}>

      <input
        className={styles.search}
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />

      <label htmlFor="cars">Thực đơn chọn món</label>
      <select name="cars" id="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select>
      <h1 className={styles.title}>CÁC MÓN NỔI BẬT NHẤT TẠI SABAY</h1>
      <p className={styles.desc}>
        “Nhà hàng Sabay ngon, đẹp và trang trọng nhằm tạo ra không gian thưởng thức ẩm thực đỉnh cao, chính là mục tiêu mà Sabay chúng tôi thật sự cố gắng theo đuổi. Dẫu còn nhiều trăn trở và khó khăn, đội ngũ sáng lập của nhà hàng Sabay luôn lắng nghe và xem nguyện vọng của khách hàng lên hàng đầu. Bên cạnh đó, Sabay coi việc kết hợp tinh hoa ẩm thực từ các nguyên liệu của quê hương nhằm phục vụ cho du khách các món ngon đặc sản tuyệt vời nhất!
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
