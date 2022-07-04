import styles from "./SpinnerBounce.module.css";

const SpinnerBounce = () => {
  return (
    <div className={styles.container}>
      <div className={styles.spinner}>
        <div className={styles.bounce1} />
        <div className={styles.bounce2} />
        <div className={styles.bounce3} />
      </div>
    </div>
  );
};

export default SpinnerBounce;
