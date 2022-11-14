import styles from "./OurVision.module.css";

const OurVision = () => {
  return (
    <div className={styles.container}>
      <div className={styles.label}>
        <h1>Our Vision</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in
          ornare augue, sed fermentum libero. In finibus felis non quam
          vulputate porta.
        </p>
      </div>
      <div className={styles.image}>
        <img src="/images/profile-250.png" />
      </div>
    </div>
  );
};

export default OurVision;
