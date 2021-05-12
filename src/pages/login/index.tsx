import React from 'react'
import { Formik, Form, Field } from 'formik'
import { Button, LinearProgress, Grid, Paper, Avatar, Typography, Link } from '@material-ui/core'
import { LockOutlined  } from '@material-ui/icons'
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
  const classes = useLoginStyles()
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
    token ?
    (
      <Grid container component="main" className={classes.root}>
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlined />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <div className={classes.form}>
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
                    if (!values.password) {
                      errors.password = 'Required'
                    } else if (values.password.length < 7) {
                      errors.password = 'password length must >= 7'
                    }
                    return errors
                  }
                }
                onSubmit={(values, { setSubmitting }) => {
                  handleSubmit(values, setSubmitting)
                }}
               >
              {({ submitForm, isSubmitting }) => (
                <Form autoComplete="off">
                  <Field
                    component={TextField}
                    name="username"
                    label="Username"
                    margin="normal"
                    variant="outlined"
                    required
                    fullWidth
                  />
                  <br />
                  <Field 
                    component={TextField}
                    required
                    fullWidth
                    type="password"
                    label="Password"
                    name="password"
                    margin="normal"
                    variant="outlined"
                  />
                  <br />
                  {isSubmitting && <LinearProgress />}
                  <Button
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting}
                    onClick={submitForm}
                    className={classes.submit}
                  >
                    Submit
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="#" variant="body2">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                </Form>
              )}
              </Formik>
            </div>
          </div>
        </Grid>
      </Grid>
    ) : <Redirect to="/dashboard" />
  )
}

export default Login
