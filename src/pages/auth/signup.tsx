import { useAppDispatch } from '@/redux/hooks'
import { registrationRequest } from '@/redux/reducers/auth/reducer'
import { ErrorMessage, Form, Formik } from 'formik'
import * as yup from 'yup'

const initialValues = {
  email: '',
  password: '',
  repeat_password: '',
}

const SignUpPage = () => {
  const dispatch = useAppDispatch()

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required('Login field is required')
      .max(32, 'Login must be shorter than 32 characters'),
    password: yup
      .string()
      .required('Password field is required')
      .max(32, 'Password must be shorter than 32 characters'),
    repeat_password: yup
      .string()
      .required('Repeat Password field is required')
      .oneOf([yup.ref('password')], 'Passwords do not match'),
  })

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { resetForm, setSubmitting }) => {
        dispatch(registrationRequest({ email: values.email, password: values.password }))
        setSubmitting(false)
        resetForm()
      }}
      validationSchema={validationSchema}
      validateOnBlur
    >
      {({ isValid, isSubmitting, dirty, values, handleChange, handleBlur }) => (
        <Form>
          <div className="content-wrapper">
            <div className="signup">
              <p className="signup__title">Sign Up</p>
              <div className="signup__field">
                <div className="input">
                  <p className="input__label">Login</p>
                  <input
                    type="text"
                    className="input__field"
                    value={values.email}
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <p className="error">
                    <ErrorMessage name="email" />
                  </p>
                </div>
              </div>
              <div className="signup__field">
                <div className="input">
                  <p className="input__label">Password</p>
                  <input
                    type="password"
                    className="input__field"
                    value={values.password}
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <p className="error">
                    <ErrorMessage name="password" />
                  </p>
                </div>
              </div>
              <div className="signup__field">
                <div className="input">
                  <p className="input__label">Repeat Password</p>
                  <input
                    type="password"
                    className="input__field"
                    value={values.repeat_password}
                    name="repeat_password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <p className="error">
                    <ErrorMessage name="repeat_password" />
                  </p>
                </div>
              </div>
              <div className="button-submit">
                <button
                  type="submit"
                  className="button button--confirm"
                  disabled={!(isValid && dirty) || isSubmitting}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default SignUpPage
