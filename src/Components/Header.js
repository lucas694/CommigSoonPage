import "./Header.css"
import { FaGithubAlt } from "react-icons/fa";
import Button from "./Button";

const Header = () => {
  return(
    <div className={"Header"}>
      <div className={"Header-Left"}>
        <a href={"https://github.com/lucas694"} target={"_blank"} className={"Header-Left"} >
          <FaGithubAlt className={"GitIcon"}/>
          <h1 className={"HeaderTittle"}>GitHub</h1>
        </a>
      </div>
      <div className={"Header-Right"}>
        <Button BtnText={"SUBSCRIBE"} className={"BtnHeaderClass"}/>
      </div>
    </div>
  )
}; export default Header