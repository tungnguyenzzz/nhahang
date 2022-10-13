import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            SABAY THAI - KHÔNG GIAN THÁI, TINH HOA ẨM THỰC THÁI
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>TÌM CÁC NHÀ HÀNG CỦA CHÚNG TÔI</h1>
          <p className={styles.text}>
            127 Văn Cao, Quận Ba Đình,
            <br /> Hanoi, 100000
            <br /> Vietnam
          </p>
          <p className={styles.text}>
            127 Văn Cao, Quận Ba Đình,
            <br /> Hanoi, 100000
            <br /> Vietnam
          </p>
          <p className={styles.text}>
            127 Văn Cao, Quận Ba Đình,
            <br /> Hanoi, 100000
            <br /> Vietnam
          </p>

        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>GIỜ LÀM VIỆC</h1>
          <p className={styles.text}>
            Thứ Hai ĐẾN Chủ Nhật
            <br /> 9:00 – 23:00
          </p>
          {/* <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
