import { memo } from "react";

const Copyright = memo(() => (
  <footer className="info">
    <p>
      Created by <a href="https://github.com/BimbaMan">Ivan Sidorenko</a>
    </p>
    <p>
      Test project{" "}
      <a href="https://github.com/BimbaMan/TODOs_ReactProject">
        "TODO React App"
      </a>
    </p>
  </footer>
));
export default Copyright;
