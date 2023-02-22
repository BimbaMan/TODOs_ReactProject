import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { auth } from "../Firebase/FirebaseConfig";
import "../css/MainHeader.css";

type Props = {
  user: User | null;
  updateUser(user: User | null): void;
};

const MainHeader = ({ user, updateUser }: Props) => {
  const changeAuthState = () => {
    onAuthStateChanged(auth, (currentUser) => {
      updateUser(auth.currentUser);
    });
  };

  const logout = async () => {
    await signOut(auth);
    changeAuthState();
  };

  return (
    <div className="main-header">
      <h4> User Logged In: {user?.email}</h4>

      <button className="headerButton" onClick={logout}>
        {" "}
        Sign Out{" "}
      </button>
    </div>
  );
};

export default MainHeader;
