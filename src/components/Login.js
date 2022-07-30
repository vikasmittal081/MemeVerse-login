import React from 'react'
export default function Login() {
  {document.body.style.backgroundColor ="#0096FF"};
  return (
    <>
    <div style={{'position': 'relative', 'margin': 'auto','backgroundColor': 'white', 'width': '70%', 'top': '45px'}}> 
   <section className="vh-100">
    <div className="d-flex justify-content-center" style={{'position':'relative', 'top': '60px'}}>
    <h1> Welcome to login ! </h1>
    </div>

  <div className="container py-5 h-100">
    <div className="row d-flex align-items-center justify-content-center h-100">
      <div className="col-md-8 col-lg-7 col-xl-6">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          className="img-fluid" alt="blank"/>
      </div>

      <div className="col-md-7 col-lg-5 col-xl-4 offset-xl-1" style={{'position': 'relative','top': '-100px'}}>

      <div className=" d-flex justify-content-center" style={{'position': 'relative','top': '40px'}}>
           <img src='Logo.png' className="img-fluid" alt="f"/>
      </div> 

        <form>
          <div className="form-outline mb-4">
            <input type="email" id="form1Example13" className="form-control form-control-lg"/>
            <label className="form-label" htmlFor="form1Example13">Email address</label>
          </div>

          <div className="form-outline mb-4">
            <input type="password" id="form1Example23" className="form-control form-control-lg" />
            <label className="form-label" htmlFor="form1Example23">Password</label>
          </div>

          <div className="d-flex justify-content-around align-items-center mb-4">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
              <label className="form-check-label" htmlFor="form1Example3"> Remember me </label>
            </div>
            <a href="/">Forgot password?</a>
          </div>

          <button type="submit" className="btn btn-primary btn-lg btn-block">Sign in</button>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
          </div>

          <a className="btn btn-primary btn-lg btn-block" style={{'backgroundColor': '#3b5998'}} href="https://www.facebook.com/"
            role="button">
            <i className="fab fa-facebook-f me-2"></i>Continue with Facebook
          </a>
          <a className="btn btn-primary btn-lg btn-block" style={{'backgroundColor': '#55acee'}} href="https://twitter.com/"
            role="button">
            <i className="fab fa-twitter me-2"></i>Continue with Twitter</a>

        </form>
      </div>
    </div>
  </div>
</section>
</div>

<footer className="bg-dark text-center text-white" style={{'position':'relative','top':'100px'}}>
  <div className="container p-4 pb-0">
    <section className="mb-4">
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-facebook-f"></i
      ></a>

     
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-twitter"></i
      ></a>

     
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-google"></i
      ></a>

      
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-instagram"></i
      ></a>

      
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-linkedin-in"></i
      ></a>

     
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-github"></i
      ></a>
    </section>

    
  </div>
 
</footer>
    </>
  )
}