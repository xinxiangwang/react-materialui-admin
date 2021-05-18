import React from 'react';
import Button from '@material-ui/core/Button';
import { TextField } from 'formik-material-ui'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Formik, Form, Field } from 'formik'
import { IFormDialogProps, IRows } from './type'


const FormDialog: React.FC<IFormDialogProps> = (props) => {
  const { data, open, handleClose, handleSubmit } = props

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
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
            <DialogContent>
              <DialogContentText>
                To subscribe to this website, please enter your email address here. We will send updates
                occasionally.
              </DialogContentText>
            </DialogContent>
            <Field
              component={TextField}
              name="name"
              label="Name"
              margin="normal"
              variant="outlined"
              required
            />
            <br />
            <Field 
              component={TextField}
              required
              name="calories"
              label="Calories"
              margin="normal"
              variant="outlined"
            />
            <br />
            <Field 
              component={TextField}
              required
              label="Fat"
              name="fat"
              margin="normal"
              variant="outlined"
            />
            <br />
            <Field 
              component={TextField}
              required
              label="Carbs"
              name="carbs"
              margin="normal"
              variant="outlined"
            />
            <br />
            <Field 
              component={TextField}
              required
              label="Protein"
              name="protein"
              margin="normal"
              variant="outlined"
            />
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
