import Image from 'next/image';
import styles from './contact.module.css';

export const metadata={
  title:"Contact Page",
  description:"contact page"
}

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src='/contact.png' alt="contact image" fill />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder='Name and Surname' />
          <input type="text" placeholder='Email Address' />
          <input type="text" placeholder='Phone Number (Optional)'/>
          <textarea name="" cols='30' rows='10' placeholder='Message' id=""></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage;