import React from 'react'
import { Formik, Form, Field } from 'formik'
import { Button, LinearProgress } from '@material-ui/core'
import { TextField } from 'formik-material-ui'
import { useSelector } from 'react-redux'
import { useLoginStyles } from './useStyles'
import { ILoginReq } from '@/apis/types/user'
import { useDispatch } from "react-redux"
import { login as loginAction } from '@/store/actions/user'
import { login } from '@/apis/user'
import { Redirect, useHistory, useLocation } from 'react-router-dom'
import { setToken } from '@/utils/auth'
import { getUrlSearchValue } from '@/utils'
import { IState } from '@/store/types'

const Login: React.FC = () => {
  const loginClasses = useLoginStyles()
  const dispatch = useDispatch()
  const history = useHistory()
  const { search } = useLocation()

  const token = useSelector((state: IState) => {
    return state.user.token
  })

  const redirect = getUrlSearchValue(search, 'Redirect')

  const handleSubmit = async (values: ILoginReq, setSubmitting: (isSubmitting: boolean) => void) => {
    try {
      const res = await login(values)
      if (res.data.token) {
        dispatch(loginAction(res.data.token))
        setToken(res.data.token)
        setSubmitting(false)
        history.push(redirect && redirect !== '/' ? redirect : '/dashboard')
      }
    } catch(err) {
      console.log(err)
    }
  }

  return (
    !token ?
    (
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
    ) : <Redirect to="/dashboard" />
  )
}

export default Login
