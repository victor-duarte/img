import styles from "./page.module.css";
import { SignIn } from "@clerk/nextjs/app-beta";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Welcome IMG</h1>
      <p>A tool to help international medical graduates in their journey.</p>
      <SignIn />
    </main>
  );
}
