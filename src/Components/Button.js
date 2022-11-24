import "./Button.css"

const Button = (props) => {
  return(
    <button className={props.className}>{props.BtnText}</button>
  )
};
export default Button