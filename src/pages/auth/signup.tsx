const SignUpPage = () => {
  return (
    <div className="content-wrapper">
      <div className="signup">
        <p className="signup__title">Sign Up</p>
        <div className="signup__field">
          <div className="input">
            <p className="input__label">Login</p>
            <input type="text" className="input__field" />
          </div>
        </div>
        <div className="signup__field">
          <div className="input">
            <p className="input__label">Password</p>
            <input type="password" className="input__field" />
          </div>
        </div>
        <div className="signup__field">
          <div className="input">
            <p className="input__label">Repeat Password</p>
            <input type="password" className="input__field" />
          </div>
        </div>
        <div className="button-submit">
          <button type="button" className="button button--confirm">
            Register
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage
