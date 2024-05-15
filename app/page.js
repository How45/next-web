import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <Link href="dashboard/"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            dashboard <span>-&gt;</span>
          </h2>
          <p>Testing to next board</p>
        </Link>
        <Link href="page_learn/"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            page_learn <span>-&gt;</span>
          </h2>
          <p>Testing to next board</p>
        </Link>
        <Link href="layout"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Layout <span>-&gt;</span>
          </h2>
          <p>layout.js board</p>
        </Link>
      </div>
    </main>
  );
}
