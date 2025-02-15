import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href="/">Home</Link>
    </footer>
  );
}
