import * as React from "react";
import main_image from "../images/main_image.jpg";

import styles from "./Index.module.css";

const reservations =
  "https://reserve1.resnexus.com/resnexus/reservations/lodging/5888F13B-7306-4082-89C2-B6F42CC9CD92";

const IndexPage = () => {
  return (
    <main className={styles.main}>
      <title>Home Page</title>
      <header className={styles.header}>
        <div>
          <h1 className={styles.h1}>Union Gables Inn Saratoga Springs</h1>
          <h2>Sorry, we're down for maintenance.</h2>
          <h3>
            You can still make <a href={reservations}>reservations here.</a>
          </h3>
        </div>
        <footer className={styles.footer}>
          <p className={styles.p}>55 Union Ave</p>
          <p className={styles.p}>Saratoga Springs, NY 12866</p>
          <p className={styles.p}>518-584-1558</p>
          <a
            className={`${styles.p} ${styles.email}`}
            href="mailto:stay@uniongables.com"
          >
            stay@uniongables.com
          </a>
        </footer>
      </header>
      <div className={styles.div}>
        <img className={styles.img} src={main_image} alt="Night Time Inn" />
      </div>
    </main>
  );
};

export default IndexPage;
