import Image from 'next/image';
import styles from './home.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thougts Agency</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga facilis, aperiam impedit doloremque quia debitis illum ab rem eos? Et nisi eveniet omnis natus deserunt!</p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image className={styles.brandImage} fill src='/brands.png' alt=''/>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image className={styles.heroImg} src='/hero.gif' fill alt=''/>
      </div>
    </div>
  )
}

export default HomePage;