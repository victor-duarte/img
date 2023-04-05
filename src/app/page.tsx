import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs/app-beta";
import styles from "./page.module.css";

export default async function Home() {
  return (
    <>
      <header className="flex justify-between p-3">
        <nav>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <Link href="/sign-in">Sign in</Link>
          </SignedOut>
        </nav>
      </header>
      <main className={styles.main}>
        <h1>Welcome IMG</h1>
        <p>A tool to help international medical graduates in their journey.</p>
      </main>
    </>
  );
}
