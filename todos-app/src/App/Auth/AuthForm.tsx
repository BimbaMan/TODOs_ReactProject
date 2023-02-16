import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import { auth } from "../Firebase/FirebaseConfig";

type Props = {
  setAuthing(): void;
  updateUser(user: User | null): void;
};

const AuthForm = ({ setAuthing, updateUser }: Props) => {
  const [registerEmail, setRegisterEmail] = useState<string>("");
  const [registerPassword, setRegisterPassword] = useState<string>("");
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
    if (auth.currentUser === null) {
      setAuthing();
    }
  };

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );

      changeAuthState();

      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error);
    }
    changeAuthState();
  };

  return (
    <div className="authForm">
      <div>
        <h3> Register User </h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />
        <button className="headerButton" onClick={register}>
          {" "}
          Create User
        </button>
      </div>
      <div>
        <h3> Login </h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />
        <button className="headerButton" onClick={login}>
          {" "}
          Login
        </button>
      </div>
    </div>
  );
};

export default AuthForm;
