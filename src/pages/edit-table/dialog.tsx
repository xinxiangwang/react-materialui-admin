import React from 'react';
import Button from '@material-ui/core/Button';
import { TextField } from 'formik-material-ui'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Formik, Form, Field } from 'formik'
import { IFormDialogProps, IRows } from './type'

const useStyles = makeStyles(() => createStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: '400px'
  },
  dialog: {
  }
}))

const FormDialog: React.FC<IFormDialogProps> = (props) => {
  const { data, open, handleClose, handleSubmit } = props

  const classes = useStyles()

  return (
    <Dialog className={classes.dialog} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Edit</DialogTitle>
      <Formik
       initialValues={data}
       validate={
         values => {
           const errors: Partial<IRows> = {}
          //  if (!values.username) {
          //    errors.username = 'Required'
          //  } else if (values.username.length < 7) {
          //    errors.username = 'username length must >= 7'
          //  }
          //  if (!values.password) {
          //    errors.password = 'Required'
          //  } else if (values.password.length < 7) {
          //    errors.password = 'password length must >= 7'
          //  }
           return errors
         }
       }
       onSubmit={(values, options) => {
         handleSubmit(values, options)
       }}
      >
        {({ submitForm, isSubmitting }) => (
          <Form autoComplete="off">
            <DialogContent className={classes.root}>
              <Field
                fullWidth
                component={TextField}
                name="name"
                label="Name"
                margin="normal"
                variant="outlined"
                required
              />
              <br />
              <Field
                fullWidth 
                component={TextField}
                required
                name="calories"
                label="Calories"
                margin="normal"
                variant="outlined"
              />
              <br />
              <Field
                fullWidth 
                component={TextField}
                required
                label="Fat"
                name="fat"
                margin="normal"
                variant="outlined"
              />
              <br />
              <Field
                fullWidth 
                component={TextField}
                required
                label="Carbs"
                name="carbs"
                margin="normal"
                variant="outlined"
              />
              <br />
              <Field
                fullWidth 
                component={TextField}
                required
                label="Protein"
                name="protein"
                margin="normal"
                variant="outlined"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button disabled={isSubmitting} onClick={submitForm} color="primary">
                submit
              </Button>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
}

export default FormDialog 
