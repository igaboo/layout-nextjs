import Footer from "../../components/Footer/Footer";
import Link from "next/link";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./404.module.scss";

export default function Page404() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1>Uh oh, it looks like we lost you!</h1>
        <Link href="/">
          <a className="btn">
            <h5>Here&apos;s a link back to the home page</h5>
          </a>
        </Link>
      </div>
      <div className={styles.bg}>
        <Footer />
      </div>
    </>
  );
}
