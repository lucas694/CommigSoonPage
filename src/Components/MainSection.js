import "./MainSection.css"
import Button from "./Button";


const MainSection = () =>{
  return(
    <div className={"MainSection"}>
      <p className={"Subtext"}>Our new site is</p>
      <h1 className={"MainTittle"}> COMMING SOON </h1>
      <hr className={"HrMain"}/>

      <div className={"UpdateSec"}>
        <p className={"Subtext"}>Want to get updates when we'll launch?</p>
        <Button BtnText={"SUBSCRIBE FOR UPDATES"} className={"BtnMainClass"}/>

      </div>
    </div>
  )
}
export default MainSection