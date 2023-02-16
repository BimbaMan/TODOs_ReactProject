import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../Firebase/FirebaseConfig";

type Props = {
  setAuthing(): void;
  user: User | null;
  updateUser(user: User | null): void;
};

const MainHeader = ({ setAuthing, user, updateUser }: Props) => {
  const changeAuthState = () => {
    onAuthStateChanged(auth, (currentUser) => {
      updateUser(auth.currentUser);
    });
    if (auth.currentUser) {
      setAuthing();
    }
  };

  const logout = async () => {
    await signOut(auth);
    changeAuthState();
  };

  return (
    <div className="main-header">
      <h4> User Logged In: </h4>
      {user?.email}
      <button className="headerButton" onClick={logout}>
        {" "}
        Sign Out{" "}
      </button>
    </div>
  );
};

export default MainHeader;
