import styles from "../CSS/Home.module.css";

// components/Home.tsx
import React from "react";
import {
  AiOutlineHome,
  AiOutlineQuestionCircle,
  AiOutlineMessage,
  AiOutlineRead,
} from "react-icons/ai";

const Home: React.FC = () => {
  return (
    <div className={styles.homeContainer}>
      <header className={styles.header}>
        <h1>LeetCode</h1>
        <nav className={styles.navbar}>
          <ul className={styles.navLinks}>
            <li>
              <a href="/">
                <AiOutlineHome />
              </a>
            </li>
            <li>
              <a href="/problems">
                <AiOutlineQuestionCircle />
              </a>
            </li>
            <li>
              <a href="/discuss">
                <AiOutlineMessage />
              </a>
            </li>
            <li>
              <a href="/articles">
                <AiOutlineRead />
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h2>Sharpen your coding skills.</h2>
          <p>
            Solve coding challenges, prepare for interviews, and compete with
            other developers.
          </p>
          <a href="/signup" className={styles.ctaButton}>
            Get Started
          </a>
        </div>
      </section>
      <section className={styles.featuresSection}>
        <div className={styles.feature}>
          <AiOutlineQuestionCircle className={styles.featureIcon} />
          <h3>Problem Bank</h3>
          <p>
            Access a vast collection of coding problems across various domains
            and difficulty levels.
          </p>
        </div>
        <div className={styles.feature}>
          <AiOutlineMessage className={styles.featureIcon} />
          <h3>Discussion Forum</h3>
          <p>
            Engage with a community of developers, ask questions, and share
            knowledge.
          </p>
        </div>
        <div className={styles.feature}>
          <AiOutlineRead className={styles.featureIcon} />
          <h3>Editorial Articles</h3>
          <p>
            Read articles and tutorials on coding techniques, algorithms, and
            best practices.
          </p>
        </div>
      </section>
      <footer className={styles.footer}>
        <p>&copy; 2023 LeetCode. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
