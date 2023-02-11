// const SignUp = () => {
//   console.log("Showing SignUp Form");

//   return (
//     <form className="login-form">
//       <h1>Login</h1>
//       <div className="form-input-material">
//         <input
//           type="text"
//           name="username"
//           id="username"
//           placeholder=" "
//           autoComplete="off"
//           className="form-control-material"
//           required
//         />
//         <label htmlFor="username">Username</label>
//       </div>
//       <div className="form-input-material">
//         <input
//           type="password"
//           name="password"
//           id="password"
//           placeholder=" "
//           autoComplete="off"
//           className="form-control-material"
//           required
//         />
//         <label htmlFor="password">Password</label>
//       </div>
//       <button type="submit" className="btn btn-primary btn-ghost">
//         Login
//       </button>
//     </form>
//   );
// };

const SignUp = () => {
  return (
    <button id="sign-up" className="headerButton" onClick={SignUp}>
      Sign Up
    </button>
  );
};

export default SignUp;
