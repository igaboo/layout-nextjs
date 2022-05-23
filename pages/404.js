import Link from "next/link";
import Navbar from "../components/Navbar/Navbar";
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
        <div className={styles.bg}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="var(--clr-a)"
              fillOpacity="1"
              d="M0,128L60,117.3C120,107,240,85,360,85.3C480,85,600,107,720,128C840,149,960,171,1080,154.7C1200,139,1320,85,1380,58.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
}
