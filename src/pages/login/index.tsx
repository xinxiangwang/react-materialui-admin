import React from 'react'
import { Formik, Form, Field } from 'formik'
import { Button, LinearProgress } from '@material-ui/core'
import { TextField } from 'formik-material-ui'
import { useLoginStyles } from './useStyles'
import { ILoginReq } from '@/apis/types/user'

const Login: React.FC = () => {
  const loginClasses = useLoginStyles()

  const handleSubmit = async (values: ILoginReq, setSubmitting: (isSubmitting: boolean) => void) => {
    await userLogin(values)
    setSubmitting(false)
  }

  return (
    <div className={loginClasses.login}>
      <Formik
        initialValues={{
          username: '',
          password: ''
        }}
        validate={
          values => {
            const errors: Partial<ILoginReq> = {}
            if (!values.username) {
              errors.username = 'Required'
            } else if (values.username.length < 7) {
              errors.username = 'username length must >= 7'
            }
            return errors
          }
        }
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values, setSubmitting)
          // setTimeout(() => {
          //   setSubmitting(false)
          //   alert(JSON.stringify(values, null, 2))
          // }, 500)
        }}
       >
      {({ submitForm, isSubmitting }) => (
        <Form autoComplete="off">
          <Field
            component={TextField}
            name="username"
            label="Username"
          />
          <br />
          <Field 
            component={TextField}
            type="password"
            label="Password"
            name="password"
          />
          <br />
          {isSubmitting && <LinearProgress />}
          <Button
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            onClick={submitForm}
          >
            Submit
          </Button>
        </Form>
      )}
      </Formik>
    </div>
  )
}

export default Login
