import styles from "./OurMission.module.css";

const OurMission = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src="/images/profile-250.png" />
      </div>
      <div className={styles.label}>
        <h1>Our Mission</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in
          ornare augue, sed fermentum libero. In finibus felis non quam
          vulputate porta.
        </p>
      </div>
    </div>
  );
};

export default OurMission;
