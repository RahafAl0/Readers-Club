import { useState } from "react";



const Login = () => {
  const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [rememberMe, setRememberMe] = useState(false)

  return (
    <form>
 
  <div className="form-outline mb-4">
    <input type="email" id="email" value={email} className="form-control" onChange={(event) => {
      setEmail(event.target.value)
    }}/>
    <label className="form-label" for="email">Email address</label>
  </div>


  <div className="form-outline mb-4">
    <input type="password" id="password" value={password} className="form-control" onChange={(event) => {
      setPassword(event.target.value)}}/>
    <label className="form-label" for="password">Password</label>
  </div>

 
  <div className="row mb-4">
    <div className="col d-flex justify-content-center">
     
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value={rememberMe} id="rememberMe" checked onChange={(event) => {
      setRememberMe(event.target.value)}}/>
        <label className="form-check-label" for="rememberMe"> Remember me </label>
      </div>
    </div>

    <div className="col">
     
      <a href="#!">Forgot password?</a>
    </div>
  </div>


  <button type="button" className="btn btn-primary btn-block mb-4" onClick={() => {
    console.log(email,password,rememberMe)
  }}>Sign in</button>


  <div className="text-center">
    <p>Not a member? <a href="#!">Register</a></p>
    

   
  </div>
</form>
  )
}

export default Login;