import Button from "./Button";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div>
        <img src="/images/tupclogo.png" width="90" height="90" />
      </div>
      <div className={styles.navbarButtons}>
        <Button variant="secondary">Admission</Button>
        <Button variant="secondary">Careers</Button>
        <Button variant="secondary">Registrar</Button>
        <Button variant="secondary">Contact Us</Button>
        <Button variant="primary">Login</Button>
      </div>
    </div>
  );
};

export default Navbar;
