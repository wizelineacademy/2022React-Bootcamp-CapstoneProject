import styles from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div className={styles.sk_cube_grid}>
      <div className={`${styles.sk_cube} ${styles.sk_cube1}`} />
      <div className={`${styles.sk_cube} ${styles.sk_cube2}`} />
      <div className={`${styles.sk_cube} ${styles.sk_cube3}`} />
      <div className={`${styles.sk_cube} ${styles.sk_cube4}`} />
      <div className={`${styles.sk_cube} ${styles.sk_cube5}`} />
      <div className={`${styles.sk_cube} ${styles.sk_cube6}`} />
      <div className={`${styles.sk_cube} ${styles.sk_cube7}`} />
      <div className={`${styles.sk_cube} ${styles.sk_cube8}`} />
      <div className={`${styles.sk_cube} ${styles.sk_cube9}`} />
    </div>
  );
};

export default Spinner;
