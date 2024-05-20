import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Anilak</div>
      <div className={styles.text}>
        Anil creative thoughts agency &#169; All rights reserved.
      </div>
    </div>
  )
}

export default Footer;