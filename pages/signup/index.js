import { faApple, faGoogle } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faEnvelope,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Input from "../../components/Input/Input";
import Link from "next/link";
import { Logo } from "../../components/Svg";
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";
import { UserContext } from "../../lib/UserContext";
import styles from "./signup.module.scss";
import { useRouter } from "next/router";

export default function SignUp() {
  const router = useRouter();
  const { signUp, loginWithGoogle } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ProtectedRoute userAllowed={false}>
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <header>
            <Link href="/">
              <a>
                <div className={styles.logo}>
                  <Logo />
                  <h2>Layout</h2>
                </div>
              </a>
            </Link>
          </header>
          <div className={styles.body}>
            <h1>
              The first step to a <span className="highlight">stronger</span>{" "}
              portfolio
            </h1>
            <p>
              Already have an account?{" "}
              <Link href="/login">
                <a>Login here.</a>
              </Link>
            </p>
            <div className={styles.buttons}>
              <Input
                placeholder="Email"
                type="email"
                icon={faEnvelope}
                value={email}
                setValue={setEmail}
              />
              <Input
                placeholder="Password"
                type="password"
                icon={faLock}
                value={password}
                setValue={setPassword}
              />
            </div>
          </div>
          <footer>
            <button
              className="btn-i"
              onClick={() => {
                signUp(email, password)
                  .then(() => router.push("/dashboard"))
                  .catch((err) => alert(err.message));
              }}
            >
              Sign Up <FontAwesomeIcon icon={faArrowRight} />
            </button>
            <div className={styles.altButtons}>
              <button className="btn-i">
                Sign up with Apple <FontAwesomeIcon icon={faApple} />
              </button>
              <button onClick={() => loginWithGoogle()} className="btn-i">
                Sign up with Google <FontAwesomeIcon icon={faGoogle} />
              </button>
            </div>
          </footer>
        </div>
      </div>
    </ProtectedRoute>
  );
}
