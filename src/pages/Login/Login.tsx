import { Button } from "../../components/Button/Button"
import { Input } from "../../components/Input/Input"
import './Login.css'

export const Login = () => {
  return (
    <>
      <title>PopX | Sign In </title>
      <div className="login-modal">
        <div className="login-title">
          <p>Signin to your</p>
          <p>PopX account</p>
        </div>

        <div className="description">
          <p>Lorem ipsum dolor sit amet,</p>
          <p>consectetur adipiscing elit.</p>
        </div>

        <div className="login-fields-container">
          <Input labelColor='#6c25ff' labelText='Email address' placeholder='Enter email address' />
          <Input labelColor='#6c25ff' labelText='Password' placeholder='Enter password' />
        </div>

        <Button bgColor="#cbcbcb" textColor="white" redirectPath="/profile">Login</Button>
      </div>
    </>
  )
}
