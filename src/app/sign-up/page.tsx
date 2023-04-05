"use client";

import { SignUp } from "@clerk/nextjs";
import styles from "@/app/page.module.css";

const SignUpPage = () => (
  <main className={styles.main}>
    <h1>Sign up</h1>
    <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
  </main>
);

export default SignUpPage;
