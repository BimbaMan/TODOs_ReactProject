import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";

const MainHeader = () => {
  return (
    <div className="main-header">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default MainHeader;
