import { Button } from "../../components/Button/Button"
import './Landing.css'

export const Landing = () => {
  return (
    <div className="landing-modal">
      <p>Welcome to PopX</p>

      <div className="description">
        <p>Lorem ipsum dolor sit amet,</p>
        <p>consectetur adipiscing elit.</p>
      </div>

      <div className="buttons-container">
        <Button bgColor='#6c25ff' textColor='#fdfcff' redirectPath='/register'>Create Account</Button>
        <Button bgColor='#cebafb' textColor='#1d2226' redirectPath='/login'>Already Registered? Login</Button>
      </div>
    </div>
  )
}
