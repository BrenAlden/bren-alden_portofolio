import React from 'react';
import styles from '../styles/ContactMe.module.css';

function ContactMe() {
  return (
    <main className={styles['contact-container']}>
      <div className={styles['contact-box']}>
        <p className={styles['main-text']}>
          Please Email me Your WhatsApp Number
        </p>
        <p className={styles['email-text']}>
          here : <a href="mailto:brenalden1@gmail.com">brenalden1@gmail.com</a>
        </p>
        <p className={styles['thank-you-text']}>
          THANK YOU!
        </p>
      </div>
    </main>
  );
}

export default ContactMe;