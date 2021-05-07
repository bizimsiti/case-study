import React from "react";
import styles from "./styles.module.css";
import { BiRename, BiPhone } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
function Contact() {
  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <div className={styles.formWrapper}>
        <form action="" className={styles.form}>
          <div className={styles.formItems}>
            <div className={styles.inputs}>
              <label htmlFor="name">Name</label>
              <div className={styles.inputWrapper}>
                <BiRename style={{ fontSize: "1.5rem" }} />
                <input type="text" placeholder="Enter name" />
              </div>

              <label htmlFor="name">E-mail</label>
              <div className={styles.inputWrapper}>
                <AiOutlineMail style={{ fontSize: "1.5rem" }} />
                <input type="email" placeholder="Enter email" />
              </div>
              <label htmlFor="name">Phone</label>
              <div className={styles.inputWrapper}>
                <BiPhone style={{ fontSize: "1.5rem" }} />
                <input type="tel" placeholder="Enter phone" />
              </div>
            </div>
            <div className={styles.textArea}>
              <label htmlFor="message">Message</label>
              <textarea
                style={{ resize: "none" }}
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Write message..."
              ></textarea>
            </div>
          </div>
          <button className={styles.formBtn}>Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
