import React from "react";
import "../../../App.css";

const FilterList: React.FC = () => {
  return (
    <ul className="filters">
      <li>
        <a className="selected">All</a>
      </li>{" "}
      <li>
        <a className="">Active</a>
      </li>{" "}
      <li>
        <a className="">Completed</a>
      </li>
    </ul>
  );
};

/* i'll need it later*/
//
// const FilterList: React.FC = () => {
//   const { pathname } = useLocation();
//   return (
//     <ul className="filters">
//       <li>
//         <a className={pathname === "/" ? "selected" : ""} href="/">
//           All
//         </a>
//       </li>{" "}
//       <li>
//         <a className={pathname === "/active" ? "selected" : ""} href="/active">
//           Active
//         </a>
//       </li>{" "}
//       <li>
//         <a
//           className={pathname === "/completed" ? "selected" : ""}
//           href="/completed"
//         >
//           Completed
//         </a>
//       </li>
//     </ul>
//   );
// };

export default FilterList;
