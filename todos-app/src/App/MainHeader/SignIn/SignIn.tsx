import "./StyleSignIn.css";

// type Props = {
//   active: boolean;
//   setActive: React.Dispatch<React.SetStateAction<boolean>>;
// };

// function SignIn({ active, setActive }: Props) {
//   setActive(!active);
//   console.log("Showing SignIn Form");

//   return (
//     <div
//       className={active ? "signIn active" : "signIn"}
//       onClick={() => {
//         setActive(false);
//       }}
//     >
//       <div className="content" onClick={(e) => e.stopPropagation()}></div>
//     </div>
//   );
// }

const SignIn = () => {
  return (
    <button id="sign-in" className="headerButton">
      Sign In
    </button>
  );
};

export default SignIn;
