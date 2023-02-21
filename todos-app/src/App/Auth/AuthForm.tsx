import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  User,
} from "firebase/auth";
import { auth } from "../Firebase/FirebaseConfig";
import "../css/Auth.css";

type Props = {
  updateUser(user: User | null): void;
  user: User | null;
};

const AuthForm = ({ updateUser, user }: Props) => {
  const [registerEmail, setRegisterEmail] = useState<string>("");
  const [registerPassword, setRegisterPassword] = useState<string>("");
  const [registerConfirmPassword, setRegisterConfirmPassword] =
    useState<string>("");
  const [loginEmail, setLoginEmail] = useState<string>("");
  const [loginPassword, setLoginPassword] = useState<string>("");

  //initialize auth state
  useEffect(() => {
    changeAuthState();
  }, []);

  const changeAuthState = () => {
    onAuthStateChanged(auth, (currentUser) => {
      updateUser(auth.currentUser);
    });
  };

  const register = async () => {
    if (registerPassword === registerConfirmPassword) {
      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          registerEmail,
          registerPassword
        );

        changeAuthState();

        console.log(user); //user info log
      } catch (error) {
        console.log(error); //error info log
        console.log("error register");
      }
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user); //user info log
    } catch (error) {
      console.log(error); //error info log
    }
    changeAuthState();
  };

  return (
    <div className="wrapper">
      <div className="title-text">
        <div className="title login">Sign In</div>
        <div className="title signup">Sign Up</div>
      </div>
      <div className="form-container">
        <div className="slide-controls">
          <input type="radio" name="slide" id="login" defaultChecked />
          <input type="radio" name="slide" id="signup" />
          <label
            htmlFor="login"
            className="slide login"
            onClick={() => {
              document.querySelector<HTMLElement>(
                ".title-text .login"
              )!.style.marginLeft = "0%";
              document.querySelector<HTMLFormElement>(
                "form.login"
              )!.style.marginLeft = "0%";
            }}
          >
            Sign In
          </label>
          <label
            htmlFor="signup"
            className="slide signup"
            onClick={() => {
              document.querySelector<HTMLElement>(
                ".title-text .login"
              )!.style.marginLeft = "-50%";
              document.querySelector<HTMLFormElement>(
                "form.login"
              )!.style.marginLeft = "-50%";
            }}
          >
            Sign Up
          </label>
          <div className="slider-tab"></div>
        </div>
        <div className="form-inner">
          <form className="login">
            <pre></pre>
            <div className="field">
              <input
                type="text"
                placeholder="Email Address"
                onChange={(event) => {
                  setLoginEmail(event.target.value);
                }}
                required
              />
            </div>
            <div className="field">
              <input
                type="password"
                placeholder="Password"
                onChange={(event) => {
                  setLoginPassword(event.target.value);
                }}
                required
              />
            </div>
            <div className="field btn">
              <div className="btn-layer"></div>
              <input defaultValue="Sign In" onClick={login} />
              {/* <button onClick={login}> Login</button> */}
              {/* //FIXME: why button doesn't work? */}
            </div>
          </form>
          <form className="signup">
            <div className="field">
              <input
                type="text"
                placeholder="Email Address"
                onChange={(event) => {
                  setRegisterEmail(event.target.value);
                }}
                required
              />
            </div>
            <div className="field">
              <input
                type="password"
                placeholder="Password"
                onChange={(event) => {
                  setRegisterPassword(event.target.value);
                }}
                required
              />
            </div>
            <div className="field">
              <input
                type="password"
                placeholder="Confirm password"
                onChange={(event) => {
                  setRegisterConfirmPassword(event.target.value);
                }}
                required
              />
            </div>
            <div className="field btn">
              <div className="btn-layer"></div>
              <input
                className="register"
                defaultValue="Sign Up"
                onClick={register}
              />
              {/* <button onClick={register}>Sign Up</button>*/}
              {/* FIXME: why button doesn't work? */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
