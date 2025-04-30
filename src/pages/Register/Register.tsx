import { Button } from "../../components/Button/Button"
import { Input } from "../../components/Input/Input"
import { RadioButtonQuestion } from "../../components/RadioButtonQuestion/RadioButtonQuestion"
import './Register.css'

export const Register = () => {
  return (
    <div className="register-modal">
      <div className="title">
        <p>Create your</p>
        <p>PopX account</p>
      </div>

      <div className="fields-container">
        <Input labelColor='#6c25ff' value='Marry Doe' labelText='Full Name' required />
        <Input labelColor='#6c25ff' value='Marry Doe' labelText='Phone number' required />
        <Input labelColor='#6c25ff' value='Marry Doe' labelText='Email address' required />
        <Input labelColor='#6c25ff' value='Marry Doe' labelText='Password' required />
        <Input labelColor='#6c25ff' value='Marry Doe' labelText='Company name' />

        <RadioButtonQuestion name='agency-question' question="Are you an Agency?" options={['Yes', 'No']} defaultCheck={0} required />
      </div>

      <Button bgColor="#6c25ff" redirectPath="/profile" textColor="white">Create Account</Button>
    </div>
  )
}
