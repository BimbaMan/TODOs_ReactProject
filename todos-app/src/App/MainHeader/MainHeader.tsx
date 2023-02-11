import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";

const MainHeader = () => {
  //const [signInActive, setSignInActive] = useState<boolean>(true);
  return (
    <div className="main-header">
      <SignIn />
      {/* <SignIn active={signInActive} setActive={setSignInActive} /> */}

      <SignUp />
    </div>
  );
};

export default MainHeader;
