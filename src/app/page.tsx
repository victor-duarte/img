import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello world.</h1>
      <p>A tool to help international medical graduates in their journey.</p>
    </main>
  );
}
