"use client";

import { SignIn } from "@clerk/nextjs";
import styles from "@/app/page.module.css";

const SignInPage = () => (
  <main className={styles.main}>
    <h1>Sign in</h1>
    <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
  </main>
);

export default SignInPage;
