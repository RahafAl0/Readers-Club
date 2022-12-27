import { useState } from "react";

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  async function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password1').value;
    const password_confirm = document.getElementById('password1').value;

    try {
        const response = await fetch(`${API_URL}/api/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, username, password1, password2 })
        });
        const data = await response.json();
        localStorage.setItem('user', JSON.stringify(data));
        getUser();
    } catch (error) {
        console.log(error);
    }

}

async function getUser() {
  const user = JSON.parse(localStorage.getItem('user'));
  if (!user?.token) {
      alert('You are not logged in');
      return;
  }

  try {
      const response = await fetch(`${API_URL}/api/auth/me`, {
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${user.token}`
          }
      })
      const data = await response.json();
      const h1 = document.querySelector('h1');
      h1.innerHTML = `Hello ${data.username}`;
  } catch (error) {
      console.log(error);
  }
}


  return (
    <section className="vh-100" >
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-lg-12 col-xl-11">
          <div className="card text-black">
            <div className="card-body p-md-5">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
  
                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
  
                  <form className="mx-1 mx-md-4">
  
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <input type="text" id="name" value={name} className="form-control" onChange={(event) => {
                          setName(event.target.value)
                        }}/>
                        <label className="form-label" for="form3Example1c">Your Name</label>
                      </div>
                    </div>
  
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <input type="email" id="email" value={email} className="form-control" onChange={(event) => {
                          setEmail(event.target.value)
                        }}/>
                        <label className="form-label" for="form3Example3c">Your Email</label>
                      </div>
                    </div>
  
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <input type="password" id="password" value={password} className="form-control" onChange={(event) => {
                          setPassword(event.target.value)
                        }}/>
                        <label className="form-label" for="form3Example4c">Password</label>
                      </div>
                    </div>
  
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <input type="password" id="rebeatPassword" value={repeatPassword} className="form-control" onChange={(event) => {
                          setRepeatPassword(event.target.value) 
                        }}/>
                        <label className="form-label" for="form3Example4cd">Repeat your password</label>
                      </div>
                    </div>
  
                    <div className="form-check d-flex justify-content-center mb-5">
                      <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                      <label className="form-check-label" for="form2Example3">
                        I agree all statements in <a href="#!">Terms of service</a>
                      </label>
                    </div>
  
                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button type="button" className="btn btn-primary btn-lg">Register</button>
                    </div>
  
                  </form>
  
                </div>
                <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
  
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                    className="img-fluid" alt="Sample image"/>
  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Register;
