import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { auth } from "../Firebase/FirebaseConfig";
import "../css/MainHeader.css";

type Props = {
  user: User | null;
};

const MainHeader = ({ user }: Props) => {
  const logout = async () => {
    await signOut(auth);
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
