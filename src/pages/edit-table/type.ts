import { FormikHelpers } from 'formik'
export interface IRows {
  name: string
  calories: number
  fat: number
  carbs: number
  protein: number
}

export type onFormikSubmit = (values: IRows, options: FormikHelpers<IRows>) => void

export interface IFormDialogProps {
  open: boolean
  handleClose: () => void
  handleSubmit: onFormikSubmit
  data: IRows
}